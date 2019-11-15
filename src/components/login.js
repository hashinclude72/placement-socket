import React from 'react';
import axios from 'axios';

export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loginUser: "",
        };
        this.login_user = this.login_user.bind(this);

    }

    login_user(){
        var password = document.getElementById("pass").value;
        var data = {
            sapid: document.getElementById("sapid").value,
            password: password,
        }

        axios({
            url: 'https://ex663qcrv2.execute-api.us-east-1.amazonaws.com/dev/loginUser',
            method: 'POST',
            data: data,
        }).then((response) => {
            console.log('fetch LOGIN :', response.data)
            if (response.data.password===password){
                console.log("login success");
                this.props.checkLogin(response.data, true);
                
                this.setState(() => {
                    return {
                        loginUser: response.data,
                    };
                });
            }

        });

    }
    render() {
        return (
            <div className="container">

                <div className="col-md-5 relative align-self-center">

                    {/* <h2 className="mb-4 mt-0 text-center">Sign Up</h2> */}
                    <div className="form-group">
                        <input type="text" id="sapid" className="form-control pb_height-50 reverse" placeholder="Sap Id" />
                    </div>
                    <div className="form-group">
                        <input type="password" id="pass" className="form-control pb_height-50 reverse" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue" value="Login" onClick={this.login_user} />
                    </div>

                </div>

            </div>
        );
    }
}
