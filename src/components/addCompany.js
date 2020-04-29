import React from 'react';
import axios from 'axios';
import { Layout } from './layout';

export class AddCompany extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            encodedPdf1: "",
            encodedPdf2: "",

        };
        this.save_to_dynamo = this.save_to_dynamo.bind(this);
        // this.addFile = this.addFile.bind(this);

    }

    //  TODO:
    // addWorkflow(){
    //     var inp = document.createElement('input');
    // }


    encodePdf(pdfid) {
        var pdf = document.getElementById(pdfid).files[0];
        console.log("bcbcbccbcbc");

        var reader = new FileReader();
        var encodedPdf = "";
        reader.addEventListener("load", function (e) {
            encodedPdf = e.target.result.replace(/data:application\/(pdf);base64,/, '');
            console.log(encodedPdf);

            if (pdfid === "pdf1") {
                this.setState({ encodedPdf1: encodedPdf });
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
            companyName: document.getElementById('addcompanyName').value,
            category: document.getElementById('addcategory').value,
            jobProfile: document.getElementById('addjobProfile').value,
            expectedSalary: document.getElementById('addexpectedSalary').value,
            studentsRequired: document.getElementById('addstudentsRequired').value,
            companyVisitingCampus: document.getElementById('addcompanyVisitingCampus').value,
            criteriaOf10th: document.getElementById('addcriteriaOf10th').value,
            criteriaOf12th: document.getElementById('addcriteriaOf12th').value,
            collegeCriteria: document.getElementById('addcollegeCriteria').value,
            description: document.getElementById('adddescription').value,
            encodedPdfList: [this.state.encodedPdf1, this.state.encodedPdf2],
        }

        console.log("data :", data);
        axios({
            url: 'https://ex663qcrv2.execute-api.us-east-1.amazonaws.com/dev/createCompany',
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
            <Layout loggedUser={this.props.loggedUser}>
                <div class="content">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <div class="card">
                                {/* <div class="card-header">
                                    <h5 class="title">Login</h5>
                                </div> */}
                                <div class="card-body">
                                    <div class="row justify-content-center">
                                        <div className="col-md-12 relative align-self-center">
                                            <h2 className="mb-4 mt-0 text-center">Add Company</h2>
                                            <div className="form-group">
                                                <input type="text" id="addcompanyName" className="form-control" placeholder="Company name" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" id="addcategory" className="form-control" placeholder="Category" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" id="addjobProfile" className="form-control" placeholder="Job profile" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" id="addexpectedSalary" className="form-control" placeholder="Expected Salary" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" id="addstudentsRequired" className="form-control" placeholder="Students Required" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" id="addcompanyVisitingCampus" className="form-control" placeholder="Company visiting campus" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" id="addcriteriaOf10th" className="form-control" placeholder="Criteria of 10th" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" id="addcriteriaOf12th" className="form-control" placeholder="Criteria of 12th" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" id="addcollegeCriteria" className="form-control" placeholder="College criteria" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" id="adddescription" className="form-control" placeholder="Description" />
                                            </div>
                                            <div className="form-group" id="addFile">
                                                {/* <input type="button" className="btn btn-dark btn-sm btn-block pb_btn-pill  btn-shadow-blue" value="Add file" onClick={this.addFile} /> */}
                                                <div className="row ml-0 mr-0 justify-content-center mb-2">
                                                    <input type="file" id="pdf1" className="btn" style={{ 'width': '50%' }} onChange={() => this.encodePdf('pdf1')} />
                                                    <i id="pdf1ch" className="fas fa-times-circle upload_icon"></i>
                                                </div>
                                                <div className="row ml-0 mr-0 justify-content-center">
                                                    <input type="file" id="pdf2" className="btn btn-dark btn-block" style={{ 'width': '50%' }} onChange={() => this.encodePdf('pdf2')} />
                                                    <i id="pdf2ch" className="fas fa-times-circle upload_icon"></i>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <input type="submit" className="btn btn-dark btn-block" value="Add Company" onClick={this.save_to_dynamo} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}
