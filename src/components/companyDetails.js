import React from 'react';
import axios from 'axios';
export class CompanyDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            company: this.props.company,
        };
        this.updateCompany = this.updateCompany.bind(this);
        this.toggleFormElements = this.toggleFormElements.bind(this);

    }

    componentDidMount() {
        if(this.props.loggedUser.role==="student"){
            // document.getElementById("editCompanyBtn").style.display = "none";
            // document.getElementById("registerBtn").style.display = "block";
            var eligible = true;
            //10th
            if (parseFloat(this.props.company.criteriaOf10th) >= parseFloat(this.props.loggedUser.higherSecondaryPercentage)){
                document.getElementById('criteriaOf10th').classList.add("red-border");
                eligible = false;
            }else{
                document.getElementById('criteriaOf10th').classList.add("green-border");
            }
            //12th
            if (parseFloat(this.props.company.criteriaOf12th) >= parseFloat(this.props.loggedUser.seniorSecondaryPercentage)) {
                document.getElementById('criteriaOf12th').classList.add("red-border");
                eligible = false;
            } else {
                document.getElementById('criteriaOf12th').classList.add("green-border");
            }
            //college
            if (parseFloat(this.props.company.collegeCriteria) > parseFloat(this.props.loggedUser.cgpa)) {
                document.getElementById('collegeCriteria').classList.add("red-border");
                eligible = false;
            } else {
                document.getElementById('collegeCriteria').classList.add("green-border");
            }

            if(!eligible){
                var registerInpBtn = document.getElementById('registerInpBtn');
                registerInpBtn.classList.add("btn-danger");
                registerInpBtn.value = "Not Eligible";
                registerInpBtn.disabled = true;
            }
        }

        document.getElementById('companyName').value = this.props.company.companyName;
        document.getElementById('category').value = this.props.company.category;
        document.getElementById('jobProfile').value = this.props.company.jobProfile;
        document.getElementById('expectedSalary').value = this.props.company.expectedSalary;
        document.getElementById('studentsRequired').value = this.props.company.studentsRequired;
        document.getElementById('companyVisitingCampus').value = this.props.company.companyVisitingCampus;
        document.getElementById('criteriaOf10th').value = this.props.company.criteriaOf10th;
        document.getElementById('criteriaOf12th').value = this.props.company.criteriaOf12th;
        document.getElementById('collegeCriteria').value = this.props.company.collegeCriteria;
        document.getElementById('description').value = this.props.company.description;
    }

    // componentDidUpdate(prevProps, prevState) {
    //     const json = JSON.stringify(this.state.loggedUser);
    //     localStorage.setItem('loggedUser', json);
    // }
    toggleFormElements() {
        document.getElementById("editCompanyBtn").style.display = "none";
        document.getElementById("updateCompanyBtn").style.display = "block";
        var inputs = document.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = false;
        }
        var textareas = document.getElementsByTagName("textarea");
        for (i = 0; i < textareas.length; i++) {
            textareas[i].disabled = false;
        }
    }
    updateCompany() {
        var id = this.props.company.id;
        var data = {
            companyName: document.getElementById('companyName').value,
            category: document.getElementById('category').value,
            jobProfile: document.getElementById('jobProfile').value,
            expectedSalary: document.getElementById('expectedSalary').value,
            studentsRequired: document.getElementById('studentsRequired').value,
            companyVisitingCampus: document.getElementById('companyVisitingCampus').value,
            criteriaOf10th: document.getElementById('criteriaOf10th').value,
            criteriaOf12th: document.getElementById('criteriaOf12th').value,
            collegeCriteria: document.getElementById('collegeCriteria').value,
            description: document.getElementById('description').value,
        }

        console.log("update company data :", data);
        axios({
            url: 'https://ex663qcrv2.execute-api.us-east-1.amazonaws.com/dev/updateCompany/' + id,
            method: 'POST',
            data: data,
        }).then((response) => {
            console.log('resonse_data_dynamo :', response.data);
            // document.getElementById('save').innerHTML = 'Added <span className="fas fa-check-circle"></span>';
            // document.getElementById('save').classNameName = 'btn btn-success bottomright';
            var updateCompanyInpBtn = document.getElementById('updateCompanyInpBtn');
            updateCompanyInpBtn.classList.add("btn-success");
            updateCompanyInpBtn.value = "Registered";
            updateCompanyInpBtn.disabled = true;
            // alert("Company updated");
        });
    }

    registerForCompany() {

    }
    render() {
        return (
            <div className="container">

                <div className="col-md-12 relative">

                    <h2 className="mb-4 mt-0 text-center">Company Details</h2>
                    <div className="form-group">
                        <h6 className="text-left">Company Name : </h6><input type="text" id="companyName" className="form-control pb_height-50 reverse" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Category : </h6><input type="text" id="category" className="form-control pb_height-50 reverse" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Job Profile : </h6><input type="text" id="jobProfile" className="form-control pb_height-50 reverse" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Expected Salary : </h6><input type="text" id="expectedSalary" className="form-control pb_height-50 reverse" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Students Required : </h6><input type="text" id="studentsRequired" className="form-control pb_height-50 reverse" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Company visiting campus : </h6><input type="text" id="companyVisitingCampus" className="form-control pb_height-50 reverse" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">10th Passing Criteria : </h6><input type="text" id="criteriaOf10th" className="form-control pb_height-50 reverse" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">12th passing Criteria : </h6><input type="text" id="criteriaOf12th" className="form-control pb_height-50 reverse" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Collage Passing Criteria : </h6><input type="text" id="collegeCriteria" className="form-control pb_height-50 reverse" disabled />
                    </div>
                    <div className="form-group">
                        <h6 className="text-left">Description : </h6>
                        <textarea rows="5" type="text" id="description" className="form-control reverse" disabled />
                    </div>

                    {this.props.loggedUser.role === "company" ?
                        <div>
                            <div className="form-group" id="editCompanyBtn">
                                <input type="button" className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue" value="Edit Details" onClick={this.toggleFormElements} />
                            </div>
                            <div className="form-group" style={{ display: "none" }} id="updateCompanyBtn">
                                <input type="button" id="updateCompanyInpBtn" className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue" value="Update" onClick={this.updateCompany} />
                            </div>
                        </div>
                        :
                        <div>
                            <div className="form-group" style={{ display: "block" }} id="registerBtn">
                                <input type="button" id="registerInpBtn" className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue" value="Register" onClick={this.registerForCompany} />
                            </div>
                        </div>
                    }
                </div>

            </div>
        );
    }
}
