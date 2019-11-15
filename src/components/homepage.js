import React from 'react';
import axios from 'axios';
import { Route } from "react-router-dom";

import { RegisterUser } from "./registerUser";
import { Footer } from "./footer";
import { Header } from "./header";
import { Login } from "./login";
import { AddCompany } from "./addCompany";
import { CompanyTab } from "./companyTab";
import { CompanyDetails } from "./companyDetails";
import { StudentDashboard } from "./studentDashboard";
import { AdminDashboard } from "./adminDashboard";

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
                    loggedUser:user,
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

    checkLogin(user, b){
        if(b===true){
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
                <Header username={this.state.loggedUser.id}/>
                {/* <AddCompany/> */}

                {
                    !this.state.loginStatus ? <Login checkLogin={this.checkLogin} /> : (this.state.loggedUser.role === "student" ? <StudentDashboard /> : <AdminDashboard />)
                }

                <Route exact path="/register-user" component={RegisterUser} />
                {/* <Login checkLogin={this.checkLogin}/> */}
                {/* <StudentDashboard/> */}
                {/* <RegisterUser/> */}
                {/* <CompanyTab/> */}
                {/* <CompanyList/> */}
                <Footer/>s
            </div>
            
        );
    }
}
