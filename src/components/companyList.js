import React from 'react';
import axios from 'axios';
import { CompanyTab } from "./companyTab";
import { CompanyDetails } from "./companyDetails";

export class CompanyList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            resdata: [],
            clickId: "",
            company:"",

        };
        this.handleCompanyClicked = this.handleCompanyClicked.bind(this);

    }

    componentDidMount() {
        this.fetch_all_Companies()
    }

    fetch_all_Companies() {
        //fetch all acts from aws DynamoDb and save it to "resdata"

        this.fetch_from_dynamo('all').then(data => {
            console.log('fetch_all_Companies :', data)
            this.setState({ resdata: data })
        })
    }

    fetch_from_dynamo(id) {
        //fetches acts from aws. Gets all acts if id == 'all' and one specific act if id == 'id-of-act'

        return axios({
            url: 'https://ex663qcrv2.execute-api.us-east-1.amazonaws.com/dev/getCompany/' + id,
            method: 'GET',
            crossDomain: true,
            responseType: 'json', // important
        }).then((response) => {
            // console.log('fetch_from_dynamo :', response.data)
            return response.data;

        });
    }

    handleCompanyClicked(id){
        // console.log("id list",id);
        var companies = this.state.resdata;
        var company = companies.filter(d=>d.id===id);
        // console.log(company);
        
        
        this.setState(() => {
            return {
                clickId: id,
                company: company[0]
            };
        });
        console.log("this.state.company : ",this.state.company[0]);
        // return 'This option already exists';
    }

    render() {
        const company = this.state.company;
        return (
            <div>
                <h2 className="mb-4 mt-0 text-center">Company List</h2>
                {
                    this.state.resdata.map((option) => <CompanyTab key={option.id} optionText={option} handleCompanyClicked={this.handleCompanyClicked}/>)
                }
                {/* modal */}
                <div className="modal fade" id="companyModal" role="dialog">
                    <div className="modal-dialog">

                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                {/* <h4 className="modal-title">Modal Header</h4> */}
                            </div>
                            <div className="modal-body">
                                {/* ------------- */}
                                <CompanyDetails optionText={company} />
                                {/* ------------ */}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
