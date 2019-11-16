import React from 'react';
import axios from 'axios';
import { StudentTab } from "./studentTab";
import { StudentDetails } from "./studentDetails";
import { Table } from "./table";


export class StudentList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            resdata: [],
            clickId: "",
            student: ""

        };
        this.handleClicked = this.handleClicked.bind(this);
        this.closeStudentDetail = this.closeStudentDetail.bind(this);

    }

    componentDidMount() {
        this.fetch_all_Students()
    }

    fetch_all_Students() {
        //fetch all acts from aws DynamoDb and save it to "resdata"

        this.fetch_from_dynamo('all').then(data => {
            console.log('fetch_all_Students :', data);
            var studentss = [];
            data.forEach(function (item) {
                studentss.push(item);
            });
            this.setState({
                resdata: studentss
            })
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
            console.log('fetch_from_dynamo :', response.data)
            return response.data;

        });
    }

    handleClicked(id) {
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

    closeStudentDetail() {
        this.setState(() => {
            return {
                clickId: "",
                student: [],//TODO: empty all student data
            };
        });
    }

    render() {
        const student = this.state.student;
        const stuCols = [
            { title: 'Name', field: 'firstname' },
            { title: 'Sap Id', field: 'sapid' },
            { title: 'CGPA', field: 'cgpa' },
            { title: 'Mobile No', field: 'mobile', },
            {
                title: 'Expand', field: 'url', render: rowData => <button className="btn btn-primary btn-sm" data-toggle="modal" data-target="#studentModal" onClick={() => this.handleClicked(rowData.id)}><i class="fas fa-edit"></i></button>,
            },
        ];

        return (
            <div>
                <Table data={this.state.resdata} columns={stuCols} title="Students" handleClicked={this.handleClicked} />

                {/* <h2 className="mb-4 mt-0 text-center">Student List</h2>
                {
                    this.state.resdata.map((option) => <StudentTab key={option.id} optionText={option} handlestudentClicked={this.handlestudentClicked} />)
                }
                modal */}
                <div className="modal fade" id="studentModal" role="dialog">
                    <div className="modal-dialog modal-lg">

                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                {/* <h4 className="modal-title">Modal Header</h4> */}
                            </div>
                            <div className="modal-body">
                                <StudentDetails key={student.id} optionText={student} />
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
