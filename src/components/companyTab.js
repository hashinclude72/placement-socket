import React from 'react';
import axios from 'axios';
export class CompanyTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }
    
    render() {
        return (
            <div classNameName="container">
                <div className="col-lg-11 col-md- col-sm-11" style={{ border: '3px solid black' }}>
                    <div className="media d-block pb_feature-v1 text-left">
                        <div className="pb_icon"><i className="ion-ios-bookmarks-outline pb_icon-gradient"></i></div>
                        <div className="media-body">
                            <h5 className="mt-0 mb-3 heading" style={{ color:'black' }}><b>Comapny Name</b></h5>
                            <p className="text-sans-serif">A small description about company.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
