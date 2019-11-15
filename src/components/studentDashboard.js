import React from 'react';
import axios from 'axios';
import { StudentTab } from "./studentTab";
import { StudentDetails } from "./studentDetails";

export class StudentDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            studentDetails: "",
        };
        this.handlestudentClicked = this.handlestudentClicked.bind(this);


    }

    componentDidMount() {
        this.setState(() => {
            return {
                studentDetails: localStorage.getItem("loggedUser"),
            };
        });
    }

    
    handlestudentClicked(id) {
        console.log("bcbcbccbcbcbc", this.state.studentDetails);
        var id = this.state.studentDetails.id;
        
    }
    render() {
        return (
            // <div>
            //     <StudentTab key={this.state.studentDetails.id} optionText={this.state.studentDetails} handlestudentClicked={this.handlestudentClicked} />
            //     {/* //TODO:stuDetails non modal */}
                
            // </div>


            <div>
                {/* <h2 className="mb-4 mt-0 text-center">Student List</h2> */}
                {
                    <StudentTab key={this.state.studentDetails.id} optionText={this.state.studentDetails} handlestudentClicked={this.handlestudentClicked} />
                }
                {/* modal */}
                <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">

                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                {/* <h4 class="modal-title">Modal Header</h4> */}
                            </div>
                            <div class="modal-body">
                                {/* ------------- */}
                                <StudentDetails optionText={this.state.studentDetails} />
                                {/* ------------ */}
                            </div>
                            <div class="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.closeStudentDetail}>Close</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
