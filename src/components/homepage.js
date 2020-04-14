import React from 'react';
import axios from 'axios';
import { Router, Switch, Route } from "react-router-dom";
import createBrowseHistory from 'history/createBrowserHistory';

import { RegisterUser } from "./registerUser";
import { Footer } from "./footer";
import { Header } from "./header";
import { Login } from "./login";
import { StudentDashboard } from "./studentDashboard";
import { AdminDashboard } from "./adminDashboard";
import {Feeds} from "./feeds";
import loginpic from "../login.png"

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
                <div className="container-fluid left-panel" style= {{'padding-left':'0px'}} >
                <div className="row">
                    <div className= "col-4" >
                <img src = {loginpic} alt = "" style= {{'height': '90vh', 'float': 'left', 'width': '500px', 'position': 'fixed', 'margin-left': '-350px' }} />
                </div>
                {/* <div className="container" style={{'padding-bottom':'100px'}}> */}
                <div className= "col-8">
                    <Router history={createBrowseHistory()}>                     
                        <Switch>
                            <Route exact path="/">

                                <div className="row align-items-center justify-content-center screen_size">
                                    <div className="col-md-10  align-self-center">
                                        {
                                            !this.state.loginStatus ? <Login checkLogin={this.checkLogin} /> : (this.state.loggedUser.role === "student" ? <StudentDashboard loggedUser={this.state.loggedUser} /> : <AdminDashboard loggedUser={this.state.loggedUser} />)
                                        }
                                    </div>
                                    {/* <div className="col-md-11 align-self-center">
                                        <Route exact path="/register-user" component={RegisterUser} />
                                    </div> */}
                                </div>
                            </Route>
                            <div className="row align-items-center justify-content-center screen_size">
                                <div className="col-md-10 align-self-center">
                                    <Route exact path="/register-user" component={RegisterUser} />
                                </div>
                            </div>
                        </Switch>
                    </Router>


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
                {/* <Feeds/> */}
                <Footer />
            </div>

        );
    }
}
