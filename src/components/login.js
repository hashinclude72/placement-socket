import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

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
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 relative align-self-center">

                        <h3 className="mb-4 mt-0 text-center">Sign In</h3>
                        <div className="form-group">
                            <input type="text" id="loginSapid" className="form-control pb_height-50 reverse" placeholder="Sap Id" />
                        </div>
                        <div className="form-group">
                            <input type="password" id="loginPassword" className="form-control pb_height-50 reverse" placeholder="Password" />
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 relative align-self-center">
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-lg btn-block pb_btn-pill" value="Login" onClick={this.login_user}>Login&nbsp;&nbsp;
                            <div role="status" className="mt-2 float-right" id="loading">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </button>
                            <br />

                            <Link to="/register-user">
                                <input type="button" className="btn btn-primary btn-lg btn-block pb_btn-pill" value="Register" />
                            </Link>
                            <br />
                            {/* <div class="text-dark" role="status" id="loading1">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="text-dark" role="status" id="loading2">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="text-dark" role="status" id="loading3">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="text-dark" role="status" id="loading4">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="text-dark" role="status" id="loading5">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="text-dark" role="status" id="loading6">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div class="text-dark" role="status" id="loading7">
                                <span class="sr-only">Loading...</span>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
