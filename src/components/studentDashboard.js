import React from 'react';
import axios from 'axios';
import { StudentTab } from "./studentTab";
import { StudentDetails } from "./studentDetails";
import { CompanyList } from "./companyList";


export class StudentDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentDetails: "",
        };
        this.handlestudentClicked = this.handlestudentClicked.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount");
    }


    handlestudentClicked(id) {
        console.log("id", id);

    }
    render() {
        const student = this.props.loggedUser;
        return (
            // <div>
            //     <StudentTab key={this.state.studentDetails.id} optionText={this.state.studentDetails} handlestudentClicked={this.handlestudentClicked} />
            //     {/* //TODO:stuDetails non modal */}

            // </div>


            <div>
                {/* <h2 className="mb-4 mt-0 text-center">Student List</h2> */}
                {student &&
                    <StudentTab key={student.id} optionText={student} handlestudentClicked={this.handlestudentClicked} />
                }

                <CompanyList loggedUser={this.props.loggedUser}/>
                {/* modal */}
                <div className="modal fade" id="studentModal" role="dialog">
                    <div className="modal-dialog">

                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                {/* <h4 className="modal-title">Modal Header</h4> */}
                            </div>
                            <div className="modal-body">
                                {/* ------------- */}

                                {student && <StudentDetails key={student.id} student={student} loggedUserRole={this.props.loggedUser.role} />}

                                {/* ------------ */}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.closeStudentDetail}>Close</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
