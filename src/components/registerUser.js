import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
export class RegisterUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
        this.save_to_dynamo = this.save_to_dynamo.bind(this);

    }
    componentDidMount() {
        // var bt = document.getElementById('redirect');
        // bt.disabled = true;
    }

    save_to_dynamo() {
        var password1 = document.getElementById('password1').value;
        var password2 = document.getElementById('password2').value;
        if (password1 !== password2){
            alert("Passwords don't match.");
            return;
        }
        var b = document.getElementById('branch');
        var branch = b.options[b.selectedIndex].text;
        var c = document.getElementById('course');
        var course = c.options[c.selectedIndex].text;
        // var bt = document.getElementById('redirect');

        var data = {
            firstname: document.getElementById('fname').value,
            lastname: document.getElementById('lname').value,
            email: document.getElementById('email').value,
            mobile: document.getElementById('mobile').value,
            sapid: document.getElementById('sapid').value,
            rollNo: document.getElementById('rollno').value,
            sex: document.getElementById('sex').value,
            course: course,
            branch: branch,
            address: document.getElementById('address').value,
            higherSecondaryBoard: document.getElementById('higherSecondaryBoard').value,
            higherSecondaryYear: document.getElementById('higherSecondaryYear').value,
            higherSecondaryPercentage: document.getElementById('higherSecondaryPercentage').value,
            seniorSecondaryBoard: document.getElementById('seniorSecondaryBoard').value,
            seniorSecondaryYear: document.getElementById('seniorSecondaryYear').value,
            seniorSecondaryPercentage: document.getElementById('seniorSecondaryPercentage').value,
            cgpa: document.getElementById('cgpa').value,
            totalBacklogs: document.getElementById('totalBacklogs').value,
            standingBacklogs: document.getElementById('standingBacklogs').value,
            password: password1,
        }

        console.log("data :", data);
        axios({
            url: 'https://ex663qcrv2.execute-api.us-east-1.amazonaws.com/dev/createUser',
            method: 'POST',
            data: data,
        }).then((response) => {
            console.log('resonse_data_dynamo :', response.data);
            // document.getElementById('save').classNameName = 'btn btn-success bottomright';
            // bt.disabled = false;
            alert("User Added");
        });
    }
    render() {
        return (
            // <div className="container">

            <div className="col-md-12 relative align-self-center">

                <h3 className="mb-4 mt-0 text-center">Sign Up</h3>
                <div className="form-group">
                    <input type="text" id="fname" className="form-control pb_height-50 reverse" placeholder="First name" />
                </div>
                <div className="form-group">
                    <input type="text" id="lname" className="form-control pb_height-50 reverse" placeholder="Last name" />
                </div>
                <div className="form-group">
                    <input type="text" id="email" className="form-control pb_height-50 reverse" placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="text" id="mobile" className="form-control pb_height-50 reverse" placeholder="Mobile number" />
                </div>
                <div className="form-group">
                    <input type="text" id="sapid" className="form-control pb_height-50 reverse" placeholder="Sap Id" />
                </div>
                <div className="form-group">
                    <input type="text" id="rollno" className="form-control pb_height-50 reverse" placeholder="Roll number" />
                </div>
                <div className="form-group">
                    <select className="form-control pb_height-50 reverse" id="sex">
                        <option defaultValue>Sex</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                    {/* <input type="text" id="sex" className="form-control pb_height-50 reverse" placeholder="Sex" /> */}
                </div>
                <div className="form-group">
                    <input type="text" id="address" className="form-control pb_height-50 reverse" placeholder="Address" />
                </div>
                <div className="form-group">
                    <input type="text" id="higherSecondaryBoard" className="form-control pb_height-50 reverse" placeholder="10th Board" />
                </div>
                <div className="form-group">
                    <input type="text" id="higherSecondaryYear" className="form-control pb_height-50 reverse" placeholder="Passing year" />
                </div>
                <div className="form-group">
                    <input type="text" id="higherSecondaryPercentage" className="form-control pb_height-50 reverse" placeholder="10th percentage" />
                </div>
                <div className="form-group">
                    <input type="text" id="seniorSecondaryBoard" className="form-control pb_height-50 reverse" placeholder="12th Board" />
                </div>
                <div className="form-group">
                    <input type="text" id="seniorSecondaryYear" className="form-control pb_height-50 reverse" placeholder="Passing year" />
                </div>
                <div className="form-group">
                    <input type="text" id="seniorSecondaryPercentage" className="form-control pb_height-50 reverse" placeholder="12th percentage" />
                </div>
                <div className="form-group">
                    <div className="pb_select-wrap">
                        <select id="course" className="form-control pb_height-50 reverse">
                            <option value="" defaultValue>Course</option>
                            <option value="">Btech</option>
                            <option value="">BSC</option>
                            <option value="">BCA</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <div className="pb_select-wrap">
                        <select id="branch" className="form-control pb_height-50 reverse">
                            <option value="" defaultValue>Branch</option>
                            <option value="">OSOS</option>
                            <option value="">OGI</option>
                            <option value="">CSF</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <input type="text" id="cgpa" className="form-control pb_height-50 reverse" placeholder="Current CGPA" />
                </div>
                <div className="form-group">
                    <input type="text" id="standingBacklogs" className="form-control pb_height-50 reverse" placeholder="Standing backlogs" />
                </div>
                <div className="form-group">
                    <input type="text" id="totalBacklogs" className="form-control pb_height-50 reverse" placeholder="Total backlogs" />
                </div>
                <div className="form-group">
                    <input type="password" id="password1" className="form-control pb_height-50 reverse" placeholder="Password" />
                </div>
                <div className="form-group">
                    <input type="password" id="password2" className="form-control pb_height-50 reverse" placeholder="Confirm Password" />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-dark btn-block" value="Sign Up" onClick={this.save_to_dynamo} />
                </div>
                {/* btn btn-primary btn-lg btn-block pb_btn-pill */}
                <div className="form-group">
                    <Link to="/">
                        <input id="redirect" type="button" className="btn btn-dark btn-block" value="Login" />
                    </Link>
                </div>

            </div>

            // </div>
        );
    }
}
