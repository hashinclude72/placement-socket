import React from 'react';
// import axios from 'axios';
export class StudentDetails extends React.Component {
    render() {
        return (
            <div className="container">

                {/* <div className="col-md-12 relative">

                    <h2 className="mb-4 mt-0 text-center">Student Details</h2>
                    <div className="form-group">
                        <h6 className="text-left">Student Name : {this.props.optionText.companyName}</h6><input type="text" id="companyName" className="form-control pb_height-50 reverse" value={this.props.optionText.companyName} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Category : </h6><input type="text" id="category" className="form-control pb_height-50 reverse" value={this.props.optionText.category} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Job Profile : </h6><input type="text" id="jobProfile" className="form-control pb_height-50 reverse" value={this.props.optionText.jobProfile} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Expected Salary : </h6><input type="text" id="expectedSalary" className="form-control pb_height-50 reverse" value={this.props.optionText.expectedSalary} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Students Required : </h6><input type="text" id="studentsRequired" className="form-control pb_height-50 reverse" value={this.props.optionText.studentsRequired} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Company visiting campus : </h6><input type="text" id="companyVisitingCampus" className="form-control pb_height-50 reverse" value={this.props.optionText.companyVisitingCampus} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">10th Passing Criteria : </h6><input type="text" id="criteriaOf10th" className="form-control pb_height-50 reverse" value={this.props.optionText.criteriaOf10th} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">12th passing Criteria : </h6><input type="text" id="criteriaOf12th" className="form-control pb_height-50 reverse" value={this.props.optionText.criteriaOf12th} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Collage Passing Criteria : </h6><input type="text" id="collegeCriteria" className="form-control pb_height-50 reverse" value={this.props.optionText.collegeCriteria} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Description : </h6><textarea rows="5" type="text" id="description" className="form-control reverse" value={this.props.optionText.description} disabled />
                    </div>
                    <div className="form-group">
                        <input type="button" className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue" value="Edit Details" />
                    </div>

                </div> */}

                <div className="col-md-12 relative align-self-center">

                    <h2 className="mb-4 mt-0 text-center">Student Details</h2>
                    <div className="form-group">
                        <h6 className="text-left">Student Name : </h6>
                        <input type="text" id="fname" className="form-control pb_height-50 reverse" value={this.props.optionText.firstname + " " + this.props.optionText.lastname} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Email : </h6>
                        <input type="text" id="email" className="form-control pb_height-50 reverse" value={this.props.optionText.email || ''} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Mobile no. : </h6>
                        <input type="text" id="email2" className="form-control pb_height-50 reverse" value={this.props.optionText.mobile} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">SAP ID : </h6>
                        <input type="text" id="mobile" className="form-control pb_height-50 reverse" value={this.props.optionText.sapid} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Roll Number : </h6>
                        <input type="text" id="sapid" className="form-control pb_height-50 reverse" value={this.props.optionText.rollNo} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Sex : </h6>
                        <input type="text" id="rollno" className="form-control pb_height-50 reverse" value={this.props.optionText.sex} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Address : </h6>
                        <input type="text" id="sex" className="form-control pb_height-50 reverse" value={this.props.optionText.address} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Higher Secondary Board : </h6>
                        <input type="text" id="address" className="form-control pb_height-50 reverse" value={this.props.optionText.higherSecondaryBoard} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Higher Secondary Year : </h6>
                        <input type="text" id="higherSecondaryBoard" className="form-control pb_height-50 reverse" value={this.props.optionText.higherSecondaryYear} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Higher Secondary Percentage : </h6>
                        <input type="text" id="higherSecondaryYear" className="form-control pb_height-50 reverse" value={this.props.optionText.higherSecondaryPercentage} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Senior Secondary Board : </h6>
                        <input type="text" id="higherSecondaryPercentage" className="form-control pb_height-50 reverse" value={this.props.optionText.seniorSecondaryBoard} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Senior Secondary Year : </h6>
                        <input type="text" id="seniorSecondaryBoard" className="form-control pb_height-50 reverse" value={this.props.optionText.seniorSecondaryYear} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Senior Secondary Percentage : </h6>
                        <input type="text" id="seniorSecondaryYear" className="form-control pb_height-50 reverse" value={this.props.optionText.seniorSecondaryPercentage} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Course : </h6>
                        <input type="text" id="seniorSecondaryPercentage" className="form-control pb_height-50 reverse" value={this.props.optionText.course} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Branch : </h6>
                        <input type="text" id="seniorSecondaryPercentage" className="form-control pb_height-50 reverse" value={this.props.optionText.branch} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Collage CGPA : </h6>
                        <input type="text" id="cgpa" className="form-control pb_height-50 reverse" value={this.props.optionText.cgpa} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Standing Backlogs : </h6>
                        <input type="text" id="standingBacklogs" className="form-control pb_height-50 reverse" value={this.props.optionText.standingBacklogs} disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Total Backlogs : </h6>
                        <input type="text" id="totalBacklogs" className="form-control pb_height-50 reverse" value={this.props.optionText.totalBacklogs} disabled />
                    </div>
                    <div className="form-group">
                        <input type="button" className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue" value="Edit Details"/>
                    </div>

                </div>

            </div>
        );
    }
}
