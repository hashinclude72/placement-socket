import React from 'react';
import axios from 'axios';
export class AddCompany extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }

    save_to_dynamo() {
        // gets the data from html and send blog to AWS
        // var b = document.getElementById('branch');
        // var branch = b.options[b.selectedIndex].text;
        // var c = document.getElementById('course');
        // var course = c.options[c.selectedIndex].text;

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

        console.log("data :", data);
        axios({
            url: 'https://ex663qcrv2.execute-api.us-east-1.amazonaws.com/dev/registerStudent',
            method: 'POST',
            data: data,
        }).then((response) => {
            console.log('resonse_data_dynamo :', response.data);
            // document.getElementById('save').innerHTML = 'Added <span className="fas fa-check-circle"></span>';
            // document.getElementById('save').classNameName = 'btn btn-success bottomright';
            alert("User Added");
        });
    }


    render() {
        return (
            <div className="container">

                <div className="col-md-5 relative align-self-center">

                    <h2 className="mb-4 mt-0 text-center">Add Company</h2>
                    <div className="form-group">
                        <input type="text" id="companyName" className="form-control pb_height-50 reverse" placeholder="Company name" />
                    </div>
                    <div className="form-group">
                        <input type="text" id="category" className="form-control pb_height-50 reverse" placeholder="Category" />
                    </div>
                    <div className="form-group">
                        <input type="text" id="jobProfile" className="form-control pb_height-50 reverse" placeholder="Job profile" />
                    </div>
                    <div className="form-group">
                        <input type="text" id="expectedSalary" className="form-control pb_height-50 reverse" placeholder="Expected Salary" />
                    </div>
                    <div className="form-group">
                        <input type="text" id="studentsRequired" className="form-control pb_height-50 reverse" placeholder="Students Required" />
                    </div>
                    <div className="form-group">
                        <input type="text" id="companyVisitingCampus" className="form-control pb_height-50 reverse" placeholder="Company visiting campus" />
                    </div>
                    <div className="form-group">
                        <input type="text" id="criteriaOf10th" className="form-control pb_height-50 reverse" placeholder="Criteria of 10th" />
                    </div>
                    <div className="form-group">
                        <input type="text" id="criteriaOf12th" className="form-control pb_height-50 reverse" placeholder="Criteria of 12th" />
                    </div>
                    <div className="form-group">
                        <input type="text" id="collegeCriteria" className="form-control pb_height-50 reverse" placeholder="College criteria" />
                    </div>
                    <div className="form-group">
                        <input type="text" id="description" className="form-control pb_height-50 reverse" placeholder="Description" />
                    </div>

                    <div id="workflow">
                        <div className="form-group">
                            <input type="button" className="btn btn-dark btn-sm btn-block pb_btn-pill  btn-shadow-blue" value="Add workflow level" onClick={this.addWorkflow} />
                        </div>
                        
                    </div>

                    <div id="addFile">
                        <div className="form-group">
                            <input type="button" className="btn btn-dark btn-sm btn-block pb_btn-pill  btn-shadow-blue" value="Add file" onClick={this.addFile} />
                        </div>
                        {/* <input type="file" name="about company"></input> */}
                    </div>

                    <div className="form-group">
                        <input type="submit" className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue" value="Add Company" onClick={this.save_to_dynamo} />
                    </div>


                </div>

            </div>
        );
    }
}
