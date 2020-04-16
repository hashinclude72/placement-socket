import React from 'react';
import axios from 'axios';
import { Router, Switch, Route } from "react-router-dom";
import createBrowseHistory from 'history/createBrowserHistory';

import { RegisterUser } from "./registerUser";
import { Footer } from "./footer";
import { Sidebar } from "./sidebar";
import { Login } from "./login";
import { StudentDashboard } from "./studentDashboard";
import { AdminDashboard } from "./adminDashboard";
import { Feeds } from "./feeds";
import { CompanyList } from "./companyList";
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
        var history = createBrowseHistory();
        return (
            <div class="wrapper">
                <Router history={history}>
                    <Switch>
                        <Route exact path="/">
                            {
                                !this.state.loginStatus ? <Login checkLogin={this.checkLogin} /> : (this.state.loggedUser.role === "student" ? <StudentDashboard loggedUser={this.state.loggedUser}/> : <AdminDashboard loggedUser={this.state.loggedUser}/>)
                            }
                        </Route>
                        {/* <Route path="/companies" component={() => <CompanyList loggedUser={this.state.loggedUser} />} /> */}
                        <Route path="/register-user" component={RegisterUser} />
                        <Route path="/companies">
                            <CompanyList loggedUser={this.state.loggedUser} />
                        </Route>
                    </Switch>
                </Router>
            </div>

        );
    }
}


