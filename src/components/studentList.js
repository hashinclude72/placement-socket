import React from 'react';
import axios from 'axios';
import { StudentTab } from "./studentTab";
import { StudentDetails } from "./studentDetails";

export class StudentList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            resdata: [],
            clickId: "",
            student: "",

        };
        this.handlestudentClicked = this.handlestudentClicked.bind(this);
        this.closeStudentDetail = this.closeStudentDetail.bind(this);

    }

    componentDidMount() {
        this.fetch_all_Students()
    }

    fetch_all_Students() {
        //fetch all acts from aws DynamoDb and save it to "resdata"

        this.fetch_from_dynamo('all').then(data => {
            console.log('fetch_all_Students :', data)
            this.setState({ resdata: data })
        })
    }

    fetch_from_dynamo(id) {
        //fetches acts from aws. Gets all acts if id == 'all' and one specific act if id == 'id-of-act'

        return axios({
            url: 'https://ex663qcrv2.execute-api.us-east-1.amazonaws.com/dev/getStudent/' + id,
            method: 'GET',
            crossDomain: true,
            responseType: 'json', // important
        }).then((response) => {
            // console.log('fetch_from_dynamo :', response.data)
            return response.data;

        });
    }

    handlestudentClicked(id) {
        // console.log("id list",id);
        var students = this.state.resdata;
        var student = students.filter(d => d.id === id);
        // console.log(student);


        this.setState(() => {
            return {
                clickId: id,
                student: student[0]
            };
        });
        console.log("this.state.student : ", this.state.student[0]);
        // return 'This option already exists';
    }

    closeStudentDetail(){
        this.setState(() => {
            return {
                clickId: "",
                student: [],//TODO: empty all student data
            };
        });
    }

    render() {
        const student = this.state.student;
        return (
            <div>
                <h2 className="mb-4 mt-0 text-center">Student List</h2>
                {
                    this.state.resdata.map((option) => <StudentTab key={option.id} optionText={option} handlestudentClicked={this.handlestudentClicked} />)
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
                                <StudentDetails optionText={student} />
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
