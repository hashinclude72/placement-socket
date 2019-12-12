import React from 'react';
import axios from 'axios';
import { Route } from "react-router-dom";

import { RegisterUser } from "./registerUser";
import { Footer } from "./footer";
import { Header } from "./header";
import { Login } from "./login";
import { StudentDashboard } from "./studentDashboard";
import { AdminDashboard } from "./adminDashboard";
import {Feeds} from "./feeds";

export class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loginStatus: false,
            loggedUser: "",
        };
        this.checkLogin = this.checkLogin.bind(this);

    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('loggedUser');
            const user = JSON.parse(json);

            if (user) {
                this.setState(() => ({
                    loggedUser: user,
                    loginStatus: true,
                }));
            }
        } catch (e) {
            // Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const json = JSON.stringify(this.state.loggedUser);
        localStorage.setItem('loggedUser', json);
    }

    checkLogin(user, b) {
        if (b === true) {
            this.setState(() => {
                return {
                    loginStatus: true,
                    loggedUser: user
                };
            });
        }
    }

    render() {
        return (
            <div>
                <Header loggedUser={this.state.loggedUser} />
                {/* <AddCompany/> */}

                <div className="container">
                    <div className="row">
                        <div className="col-md-11">
                            {
                                !this.state.loginStatus ? <Login checkLogin={this.checkLogin} /> : (this.state.loggedUser.role === "student" ? <StudentDashboard loggedUser={this.state.loggedUser} /> : <AdminDashboard loggedUser={this.state.loggedUser} />)
                            }
                        </div>
                        <div className="col-md-11 align-self-center">
                            <Route exact path="/register-user" component={RegisterUser} />
                        </div>
                    </div>
                </div>
                <div className="container">
                    {/* <MaterialTableDemo /> */}
                </div>
                {/* <Login checkLogin={this.checkLogin}/> */}
                {/* <StudentDashboard/> */}
                {/* <RegisterUser/> */}
                {/* <CompanyTab/> */}
                <Feeds/>
                <Footer />
            </div>

        );
    }
}
