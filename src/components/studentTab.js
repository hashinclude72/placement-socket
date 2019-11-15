import React from 'react';
import axios from 'axios';
export class StudentTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
        this.handlestudentClicked = this.handlestudentClicked.bind(this);

    }

    handlestudentClicked(e) {
        // e.preventDefault();
        console.log("stuTab handleclick : ", this.props.optionText);
        
        var id = this.props.optionText.id;
        console.log("stuTab handleclick id: ", this.props.optionText.id);
        // console.log("id tab",id );

        const error = this.props.handlestudentClicked(id);
        // console.log(error);


    }

    render() {
        return (
            <div className="container">
                <div className="col-lg-11 col-md- col-sm-11" style={{ border: '3px solid black' }}>
                    <a href="#" data-toggle="modal" data-target="#myModal" onClick={this.handlestudentClicked}>
                        <div className="media d-block pb_feature-v1 text-left">
                            <div className="pb_icon"><i className="ion-ios-bookmarks-outline pb_icon-gradient"></i></div>
                            <div className="media-body">
                                <h6 className="mt-0 mb-3 heading" style={{ color: 'black' }}><b>{this.props.optionText.firstname}</b></h6>
                                <p className="text-sans-serif">{this.props.optionText.sapid}</p>
                            </div>
                        </div>
                    </a>
                </div>
                <br/>
            </div>
        );
    }
}
