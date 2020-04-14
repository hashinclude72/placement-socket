import React from 'react';
import axios from 'axios';
import { CompanyDetails } from "./companyDetails";
import { Table } from "./table";
var _ = require('underscore');

export class CompanyList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            resdata: [],
            clickId: "",
            company:"",

        };
        this.handleClicked = this.handleClicked.bind(this);
        this.fetch_all_register_logs = this.fetch_all_register_logs.bind(this);
        this.fetch_all_Companies = this.fetch_all_Companies.bind(this);
        this.fetch_from_dynamo_register_logs = this.fetch_from_dynamo_register_logs.bind(this);
        this.handleUpdatedCompany = this.handleUpdatedCompany.bind(this);
        

    }

    componentDidMount() {
        this.fetch_all_Companies()
    }

    fetch_all_Companies() {
        //fetch all acts from aws DynamoDb and save it to "resdata"

        this.fetch_from_dynamo('all').then(data => {
            console.log('fetch_all_Companies :', data);
            var companies = [];
            data.forEach(function (item) {
                companies.push(item);
            });
            this.setState({ resdata: companies })
            this.fetch_all_register_logs();
        })
    }

    fetch_all_register_logs() {
        var loggedUserId = this.props.loggedUser.id;
        //fetch all acts from aws DynamoDb and save it to "resdata"

        this.fetch_from_dynamo_register_logs('all').then(data => {
            console.log('fetch_all_register_logs :', data);
            var companies = this.state.resdata;

            var logs = [];
            data.forEach(function (item) {
                if (item.studentSapId === loggedUserId){
                    delete item.id;
                    logs.push(item);
                }
            });

            var mergedList = _.map(companies, function (item) {
                return _.extend(item, _.findWhere(logs, { companyId: item.id }));
            });

            console.log("mergedList : ",mergedList);
            
            this.setState({ resdata: mergedList })
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

    fetch_from_dynamo_register_logs(id) {
        //fetches acts from aws. Gets all acts if id == 'all' and one specific act if id == 'id-of-act'

        return axios({
            url: 'https://ex663qcrv2.execute-api.us-east-1.amazonaws.com/dev/getRegisterLogs/' + id,
            method: 'GET',
            crossDomain: true,
            responseType: 'json', // important
        }).then((response) => {
            // console.log('fetch_from_dynamo :', response.data)
            return response.data;

        });
    }

    handleClicked(id){
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
        // console.log("this.state.company : ",this.state.company);
        // return 'This option already exists';
    }

    handleUpdatedCompany(updatedCompany) {
        var companies = this.state.resdata;
        var company = companies.filter(d => d.id === updatedCompany.id);
        var index = companies.indexOf(company);

        if (index !== -1) {
            companies[index] = updatedCompany;
        }

        this.setState(() => {
            return {
                resdata: companies,
            };
        });
    }

    render() {
        const company = this.state.company;
        const comColumns = [
            {
                title: 'Expand', field: 'url', render: rowData => <button className="btn btn-primary btn-sm" data-toggle="modal" data-target="#companyModal" onClick={() => this.handleClicked(rowData.id)}><i className="fas fa-edit"></i></button>,
            },
            {
                title: 'Register Status', field: 'url', render: rowData => <span>{rowData.registerStatus && <i class="fas fa-check-circle fa-2x text-success"></i>} </span>
            },
            { title: 'Company Name', field: 'companyName' },
            { title: 'Category', field: 'category' },
            { title: 'Profile', field: 'jobProfile' },
            {
                title: 'Salary',
                field: 'expectedSalary',
            },
            
        ];
        if (this.props.loggedUser.role === 'company'){
            comColumns.splice(1, 1);
        }
        return (
            <div className="mt-4 mb-4">
                <Table data={this.state.resdata} columns={comColumns} title="Companies" handleClicked={this.handleClicked} />

                {/* <h2 className="mb-4 mt-0 text-center">Company List</h2>
                {
                    this.state.resdata.map((option) => <CompanyTab key={option.id} optionText={option} handleCompanyClicked={this.handleCompanyClicked}/>)
                } */}

                <div className="modal fade" id="companyModal" role="dialog">
                    <div className="modal-dialog modal-lg">

                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <CompanyDetails key={company.id} company={company} loggedUser={this.props.loggedUser} handleUpdatedCompany={this.handleUpdatedCompany} />
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
