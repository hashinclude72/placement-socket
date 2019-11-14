import React from 'react';
import axios from 'axios';
export class AddCompany extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            encodedPdf1:"",
            encodedPdf2: "",

        };
        this.save_to_dynamo = this.save_to_dynamo.bind(this);
        // this.addFile = this.addFile.bind(this);

    }

//  TODO:
    // addWorkflow(){
    //     var inp = document.createElement('input');
    // }


    encodePdf(pdfid){
        var pdf = document.getElementById(pdfid).files[0];
        console.log("bcbcbccbcbc");

        var reader = new FileReader();
        var encodedPdf = "";
        reader.addEventListener("load", function (e) {
            encodedPdf = e.target.result.replace(/data:application\/(pdf);base64,/, '');
            console.log(encodedPdf);
            
            if(pdfid === "pdf1"){
                this.setState({encodedPdf1: encodedPdf});
            } else if (pdfid === "pdf2") {
                this.setState({ encodedPdf2: encodedPdf });
            }
            pdfid = pdfid + "ch";
            document.getElementById(pdfid).className = 'fas fa-check-circle';
            
            // axios({
            //     url: '',
            //     method: 'POST',
            //     data: encodedPdf,
            // }).then((response) => {
            //     console.log('resonse_data_dynamo :', response.data);
            //     // document.getElementById('save').innerHTML = 'Added <span className="fas fa-check-circle"></span>';
            //     // document.getElementById('save').classNameName = 'btn btn-success bottomright';
            //     alert("User Added");
            // });
            
            // return encodedImage;
        }.bind(this), false);
        reader.readAsDataURL(pdf);
    }


    save_to_dynamo() {
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
            encodedPdfList: [this.state.encodedPdf1, this.state.encodedPdf2],
        }

        console.log("data :", data);
        axios({
            url: 'https://ex663qcrv2.execute-api.us-east-1.amazonaws.com/dev/addCompany',
            method: 'POST',
            data: data,
        }).then((response) => {
            console.log('resonse_data_dynamo :', response.data);
            // document.getElementById('save').innerHTML = 'Added <span className="fas fa-check-circle"></span>';
            // document.getElementById('pdf1').className = 'fas fa-check-circle';
            alert("Company Added");
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

                    {/* <div id="workflow" TODO:>
                        <div className="form-group">
                            <input type="button" className="btn btn-dark btn-sm btn-block pb_btn-pill  btn-shadow-blue" value="Add workflow level" onClick={this.addWorkflow} />
                        </div>

                    </div> */}

                    <div className="form-group" id="addFile">
                        {/* <input type="button" className="btn btn-dark btn-sm btn-block pb_btn-pill  btn-shadow-blue" value="Add file" onClick={this.addFile} /> */}
                        <div>
                            <input type="file" id="pdf1" className="btn btn-dark btn-sm btn-block pb_btn-pill  btn-shadow-blue" onChange={() => this.encodePdf('pdf1')}/>
                            <i id="pdf1ch" className="fas fa-times-circle"></i>
                        </div>
                        <div>
                            <input type="file" id="pdf2" className="btn btn-dark btn-sm btn-block pb_btn-pill  btn-shadow-blue" onChange={() => this.encodePdf('pdf2')}/>
                            <i id="pdf2ch" className="fas fa-times-circle"></i>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue" value="Add Company" onClick={this.save_to_dynamo} />
                    </div>


                </div>

            </div>
        );
    }
}
