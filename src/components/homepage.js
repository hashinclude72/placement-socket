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
import logoPic from './Logo_upes.png';

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
                <div className="container-fluid" >
                    <div className="row  screen_size">
                        <div className= "col-3  left-panel">
                            <div className="row  justify-content-center align-items-center screen_size" style={{'margin-right':'0px', 'margin-top': '-100px'}}>
                                <div className="col-9">
                                    <h1><strong>Placement Socket</strong></h1>
                                    <img className='left-panel-img' src={logoPic} alt = "upes_logo" />
                                    <h4 style= {{'color':'black', 'padding-top':'10px'}}>University Recruiting Platform</h4>
                                    <p style= {{'opacity':'0.75'}}>Campus Recruitment made easy</p>
                                </div>
                            </div>
                {/* <img src = {loginpic} alt = "" style= {{'height': '90vh', 'float': 'left', 'width': '500px', 'position': 'fixed', 'margin-left': '-350px' }} /> */}
                </div>
                {/* <div className="container" style={{'padding-bottom':'100px'}}> */}
                <div className= "col-12 mb-3">
                    <Router history={createBrowseHistory()}>                     
                        <Switch>
                            <Route exact path="/">
                                <div className="row align-items-center justify-content-center screen_size mb-5" style={{'margin-top': '80px'}}>
                                    <div className="col-md-3 align-self-center">
                                    </div>
                                    <div className="col-md-9 align-self-center">
                                        <div className="row align-items-center justify-content-center screen_size mb-5">
                                            <div className="col-md-8 align-self-center">
                                                {
                                                    !this.state.loginStatus ? <Login checkLogin={this.checkLogin} /> : (this.state.loggedUser.role === "student" ? <StudentDashboard loggedUser={this.state.loggedUser} /> : <AdminDashboard loggedUser={this.state.loggedUser} />)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-md-11 align-self-center">
                                        <Route exact path="/register-user" component={RegisterUser} />
                                    </div> */}
                                </div>
                            </Route>
                            <div className="row align-items-center justify-content-center screen_size mb-5" style={{ 'margin-top': '80px' }}>
                                <div className="col-md-3 align-self-center">
                                </div>
                                <div className="col-md-9 align-self-center">
                                    <div className="row align-items-center justify-content-center screen_size mb-5">
                                        <div className="col-md-8 align-self-center">
                                            <Route exact path="/register-user" component={RegisterUser} />
                                        </div>
                                    </div>
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
                {/* <Footer /> */}
            </div>

        );
    }
}
