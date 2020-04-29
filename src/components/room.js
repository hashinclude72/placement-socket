import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";
import { Layout } from "./layout";
import { Link } from "react-router-dom";




export class VideoCalling extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            path: '',
        };
        this.room_id = this.room_id.bind(this);
        this.change = this.change.bind(this);
    }

    room_id() {
        var roomid = document.getElementById("roomid").value;
        var path = '/room/' + roomid;
        if (roomid) {
            document.getElementById('submit').disabled = true;
            // document.getElementById('create').disabled = false;
            document.getElementById('join').disabled = false;
            this.setState(() => {
                return {
                    path: path,
                };
            });
        }
    }

    // create() {
    // }

    change() {
        document.getElementById('submit').disabled = false;
        // document.getElementById('create').disabled = true;
        document.getElementById('join').disabled = true;
    }



    render() {
        return (
            <Layout loggedUser={this.props.loggedUser}>
                <div class="content">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-header">
                                    <h5 class="title">Create or Join Room</h5>
                                </div>
                                <div class="card-body">
                                    <div class="row justify-content-center">
                                        <div class="col-md-8 pr-1">
                                            <div class="form-group">
                                                <label>Room ID</label>
                                                <input type="text" id="roomid" class="form-control" placeholder="Room ID" onChange={this.change} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div className="col-md-3 relative align-self-center">
                                            <div class="form-group">
                                                <button type="button" id='submit' className="btn btn-dark btn-block" onClick={this.room_id}>Submit
                                                    </button>
                                            </div>
                                            {/* <div class="col-md-3 pr-1">
                                            <div class="form-group">
                                                <button type="button" id='create' className="btn btn-dark btn-block" onClick={this.create} disabled>Create
                                                        </button>
                                            </div>
                                        </div> */}
                                            <div class="form-group">
                                                <Link to={this.state.path} style={{ 'text-decoration': 'none' }}>
                                                    <button type="button" id='join' className="btn btn-dark btn-block" disabled>Join
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}




const StyledVideo = styled.video`
    height: 100%;
    width: 100%;
`;

const Video = (props) => {
    const ref = useRef();

    useEffect(() => {
        props.peer.on("stream", stream => {
            ref.current.srcObject = stream;
        })
    }, []);

    return (
        <StyledVideo playsInline autoPlay ref={ref} />
    );
}


const videoConstraints = {
    height: window.innerHeight / 2,
    width: window.innerWidth / 2
};

const Room = (props) => {
    const [peers, setPeers] = useState([]);
    const socketRef = useRef();
    const userVideo = useRef();
    const peersRef = useRef([]);
    const roomID = props.match.params.roomID;

    useEffect(() => {
        socketRef.current = io.connect("https://placement-socket-server.herokuapp.com/");
        // socketRef.current = io.connect("http://localhost:8000/");
        navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: true }).then(stream => {
            userVideo.current.srcObject = stream;
            socketRef.current.emit("join room", roomID);
            socketRef.current.on("all users", users => {
                const peers = [];
                users.forEach(userID => {
                    const peer = createPeer(userID, socketRef.current.id, stream);
                    peersRef.current.push({
                        peerID: userID,
                        peer,
                    })
                    peers.push(peer);
                })
                setPeers(peers);
            })

            socketRef.current.on("user joined", payload => {
                const peer = addPeer(payload.signal, payload.callerID, stream);
                peersRef.current.push({
                    peerID: payload.callerID,
                    peer,
                })

                setPeers(users => [...users, peer]);
            });

            socketRef.current.on("receiving returned signal", payload => {
                const item = peersRef.current.find(p => p.peerID === payload.id);
                item.peer.signal(payload.signal);
            });

            // socketRef.current.on("user disconnect", users => {
            //     var removed_peer = []
            //     peers.forEach(peer => {
            //         if(!users.includes(peer.userID)){
            //             removed_peer.push(peer)
            //         }
            //     })
            //     removed_peer.forEach(peer => {
            //         peers.remove(peer)
            //     })
            //     setPeers(peers);
            // });


        })

        return () => { window.location.reload() };

    }, []);

    function createPeer(userToSignal, callerID, stream) {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream,
        });
        peer['userID'] = userToSignal;

        peer.on("signal", signal => {
            socketRef.current.emit("sending signal", { userToSignal, callerID, signal })
        })

        return peer;
    }

    function addPeer(incomingSignal, callerID, stream) {
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream,
        })

        peer.on("signal", signal => {
            socketRef.current.emit("returning signal", { signal, callerID })
        })

        peer.signal(incomingSignal);

        return peer;
    }

    return (
        <Layout loggedUser={props.loggedUser}>
            <div className="content">
                <div className="card" style={{ 'height': '100vh' }}>
                    <div className="row m-2">
                        <div className="col-md-6 p-0 pt-0 pb-0" style={{ 'border': '2px solid black', 'background-color': 'black' }}>
                            <StyledVideo muted ref={userVideo} autoPlay playsInline />
                        </div>
                        {peers.map((peer, index) => {
                            return (
                                <div className="col-md-6 p-0 pt-0 pb-0" style={{ 'border': '2px solid black', 'background-color': 'black' }}>
                                    <Video muted key={index} peer={peer} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Room;