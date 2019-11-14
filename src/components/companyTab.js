import React from 'react';
import axios from 'axios';
export class CompanyTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
        this.handleCompanyClicked = this.handleCompanyClicked.bind(this);

    }

    handleCompanyClicked(e){
        e.preventDefault();
        var id = this.props.optionText.id;
        // console.log("id tab",id );
        
        const error = this.props.handleCompanyClicked(id);
        // console.log(error);
        

    }

    render() {
        return (
            <div className="container">
                <div className="col-lg-11 col-md- col-sm-11" style={{ border: '3px solid black' }}>
                    <a href="#" data-toggle="modal" data-target="#myModal" onClick={this.handleCompanyClicked}>
                        <div className="media d-block pb_feature-v1 text-left">
                            <div className="pb_icon"><i className="ion-ios-bookmarks-outline pb_icon-gradient"></i></div>
                            <div className="media-body">
                                <h6 className="mt-0 mb-3 heading" style={{ color: 'black' }}><b>{this.props.optionText.companyName}</b></h6>
                                <p className="text-sans-serif">{this.props.optionText.description}</p>
                            </div>
                        </div>
                    </a>
                </div>
                
            </div>
        );
    }
}
