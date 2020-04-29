import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Layout } from "./layout";
import upes from "../upes1.jpg"



export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loginUser: "",
        };
        this.login_user = this.login_user.bind(this);

    }

    login_user() {
        var password = document.getElementById("loginPassword").value;
        var data = {
            sapid: document.getElementById("loginSapid").value,
            password: password,
        }
        // var element = document.getElementById("loading1");
        // element.classList.add("spinner-grow");
        // element = document.getElementById("loading2");
        // element.classList.add("spinner-grow");
        // element = document.getElementById("loading3");
        // element.classList.add("spinner-grow");
        // element = document.getElementById("loading4");
        // element.classList.add("spinner-grow");
        // element = document.getElementById("loading5");
        // element.classList.add("spinner-grow");
        // element = document.getElementById("loading6");
        // element.classList.add("spinner-grow");
        // element = document.getElementById("loading7");
        // element.classList.add("spinner-grow");

        var element = document.getElementById("loading");
        element.classList.add("spinner-border");
        element.classList.add("spinner-border-sm");

        console.log("login sent data", data);


        axios({
            url: 'https://ex663qcrv2.execute-api.us-east-1.amazonaws.com/dev/loginUser',
            method: 'POST',
            data: data,
        }).then((response) => {
            console.log('fetch LOGIN :', response.data)
            if (response.data.password === password) {
                console.log("login success");
                this.props.checkLogin(response.data, true);

                this.setState(() => {
                    return {
                        loginUser: response.data,
                    };
                });
            } else {
                console.log("no pass match");

            }

        });

    }
    render() {
        return (
            <Layout>
                <div class="content">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-header">
                                    <h5 class="title">Login</h5>
                                </div>
                                <div class="card-body">
                                    <div class="row justify-content-center">
                                        <div class="col-md-8 pr-1">
                                            <div class="form-group">
                                                <label>Username</label>
                                                <input type="text" id="loginSapid" class="form-control" placeholder="Company" />
                                            </div>
                                        </div>
                                        <div class="col-md-8 pr-1">
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input type="password" id="loginPassword" class="form-control" placeholder="Username" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="col-md-8 pr-1">
                                            <div class="form-group">
                                                <button type="submit" className="btn btn-round" value="Login" onClick={this.login_user}>Login&nbsp;&nbsp;
                                                    <div role="status" className="float-right" id="loading">
                                                        <span className="sr-only">Loading...</span>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-8 pr-1">
                                            <div class="form-group">
                                                <Link to="/register-user">
                                                    <label><font color="black">Not Registered yet?</font> <a style={{ 'color': '#007bff' }}>Sign Up!</a>
                                                        {/* <input type="button" className="btn btn-primary btn-lg btn-block pb_btn-pill" value="Register" /> */}
                                                    </label>
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
