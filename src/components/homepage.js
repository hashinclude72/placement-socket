import React from 'react';
import axios from 'axios';
import { Redirect, Router, Switch, Route } from "react-router-dom";
import createBrowseHistory from 'history/createBrowserHistory';

import { RegisterUser } from "./registerUser";
import { Login } from "./login";
import { StudentDashboard } from "./studentDashboard";
import { AdminDashboard } from "./adminDashboard";
import { CompanyList } from "./companyList";
import { StudentList } from "./studentList";
import { AddCompany } from "./addCompany";
import { VideoCalling } from "./room";
import Room from "./room";



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
        var history = createBrowseHistory();
        return (
            <div class="wrapper">
                {/* <Router history={history}> */}
                <Switch>
                    <Route exact path="/">
                        {
                            !this.state.loginStatus ? <Login checkLogin={this.checkLogin} /> : (this.state.loggedUser.role === "student" ? <StudentDashboard loggedUser={this.state.loggedUser} /> : <AdminDashboard loggedUser={this.state.loggedUser} />)
                        }
                    </Route>
                    {/* <Route path="/companies" component={() => <CompanyList loggedUser={this.state.loggedUser} />} /> */}
                    <Route path="/register-user">
                        {
                            !this.state.loginStatus ? <RegisterUser /> : <Redirect to='/' />
                        }
                    </Route>
                    <Route path="/companies">
                        {
                            this.state.loginStatus ? <CompanyList loggedUser={this.state.loggedUser} /> : <Redirect to='/' />
                        }
                    </Route>
                    <Route path="/students">
                        {
                            this.state.loginStatus ? <StudentList loggedUser={this.state.loggedUser} /> : <Redirect to='/' />
                        }
                    </Route>
                    <Route path="/add-company">
                        {
                            this.state.loginStatus ? <AddCompany loggedUser={this.state.loggedUser} /> : <Redirect to='/' />
                        }
                    </Route>
                    <Route path="/video-calling">
                        {
                            this.state.loginStatus ? <VideoCalling loggedUser={this.state.loggedUser} /> : <Redirect to='/' />
                        }
                    </Route>
                    {/* <Route path="/room/:roomID">
                        {
                            this.state.loginStatus ? <Room loggedUser={this.state.loggedUser} /> : <Redirect to='/' />
                        }
                    </Route> */}
                    <Route path="/room/:roomID" render={(props) => this.state.loginStatus ? <Room {...props} loggedUser={this.state.loggedUser} /> : <Redirect to='/' />} />
                </Switch>
                {/* </Router> */}
            </div>

        );
    }
}


