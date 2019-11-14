import React from 'react';
import axios from 'axios';
export class CompanyDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }
    render() {
        return (
            <div className="container">

                <div className="col-md-5 relative">

                    <h2 className="mb-4 mt-0 text-center">Add Company</h2>
                    <div className="form-group">
                        <h6 className="text-left">Company Name : </h6><input type="text" id="companyName" className="form-control pb_height-50 reverse" placeholder="Company name" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Category : </h6><input type="text" id="category" className="form-control pb_height-50 reverse" placeholder="Category" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Job Profile : </h6><input type="text" id="jobProfile" className="form-control pb_height-50 reverse" placeholder="Job profile" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Expected Salary : </h6><input type="text" id="expectedSalary" className="form-control pb_height-50 reverse" placeholder="Expected Salary" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Students Required : </h6><input type="text" id="studentsRequired" className="form-control pb_height-50 reverse" placeholder="Students Required" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Company visiting campus : </h6><input type="text" id="companyVisitingCampus" className="form-control pb_height-50 reverse" placeholder="Company visiting campus" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">10th Passing Criteria : </h6><input type="text" id="criteriaOf10th" className="form-control pb_height-50 reverse" placeholder="Criteria of 10th" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">12th passing Criteria : </h6><input type="text" id="criteriaOf12th" className="form-control pb_height-50 reverse" placeholder="Criteria of 12th" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Collage Passing Criteria : </h6><input type="text" id="collegeCriteria" className="form-control pb_height-50 reverse" placeholder="College criteria" disabled />
                    </div>
                    <div className="form-group">
                    <h6 className="text-left">Description : </h6><input type="text" id="description" className="form-control pb_height-50 reverse" placeholder="Description" disabled />
                    </div>
                    <div className="form-group">
                        <input type="button" className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue" value="Edit Details" />
                    </div>


                </div>

            </div>
        );
    }
}
