import React from 'react';
import axios from 'axios';
import { AddCompany } from "./addCompany";
import { CompanyList } from "./companyList";
import { StudentList } from "./studentList";
import { Feeds } from "./feeds";
import { Layout } from "./layout";

export class AdminDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <Layout loggedUser={this.props.loggedUser}>
                <div className='content'>
                    <div className='row justify-content-center'>
                        <div className='col-md-8'>
                            {/* <Feeds /> */}
                            <StudentList loggedUserRole={this.props.loggedUser.role} />
                            <br />
                            <AddCompany />
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}
