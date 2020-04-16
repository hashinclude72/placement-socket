import React from 'react';
import axios from 'axios';
import { StudentTab } from "./studentTab";
import { StudentDetails } from "./studentDetails";
import { CompanyList } from "./companyList";
import { Feeds } from "./feeds";
import { Layout } from "./layout";



export class StudentDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentDetails: this.props.loggedUser,
        };
        this.handlestudentClicked = this.handlestudentClicked.bind(this);
        this.handleUpdatedStudent = this.handleUpdatedStudent.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    handleUpdatedStudent(updatedStudent) {
        const json = JSON.stringify(updatedStudent);
        localStorage.setItem('loggedUser', json);
        this.setState(() => {
            return {
                studentDetails: updatedStudent,
            };
        });
    }


    handlestudentClicked(id) {
        console.log("id", id);

    }
    render() {
        const student = this.state.studentDetails;
        return (
            <Layout loggedUser={student}>
                <div className='content'>
                    <div class="row justify-content-center">
                        <div className="col-md-8">
                            {student &&
                                <StudentTab key={student.id} optionText={student} handlestudentClicked={this.handlestudentClicked} />
                            }
                            <Feeds username={student.id} /><br /><br />
                            {/* modal */}
                            <div className="modal fade" id="studentModal" role="dialog">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                            {/* <h4 className="modal-title">Modal Header</h4> */}
                                        </div>
                                        <div className="modal-body">
                                            {student && <StudentDetails key={student.id} student={student} loggedUserRole={this.props.loggedUser.role} handleUpdatedStudent={this.handleUpdatedStudent} />}
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.closeStudentDetail}>Close</button>
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
