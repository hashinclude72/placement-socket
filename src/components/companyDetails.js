import React from 'react';
// import axios from 'axios';
export class CompanyDetails extends React.Component {
    render() {
        return (
            <div className="container">

                <div className="col-md-12 relative">

                    <h2 className="mb-4 mt-0 text-center">Company Details</h2>
                    <div className="form-group">
                        <h6 className="text-left">Company Name : {this.props.optionText.companyName}</h6><input type="text" id="companyName" className="form-control pb_height-50 reverse" value={this.props.optionText.companyName} disabled />
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

                </div>

            </div>
        );
    }
}
