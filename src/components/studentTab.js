import React from 'react';
import axios from 'axios';
export class StudentTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
        this.handlestudentClicked = this.handlestudentClicked.bind(this);

    }

    componentDidMount() {
        this.setState(() => {
            return {
                studentDetails: this.props.optionText,
            };
        });
    }

    handlestudentClicked(e) {
        // e.preventDefault();
        var id = this.props.optionText.id;
        const error = this.props.handlestudentClicked(id);
    }

    render() {
        return (
            <div className="container">
                <div className="col-md">
                    <div class="pb_pricing_v1 p-2 border border-primary text-center bg-white" style={{ 'margin-bottom': '50px', 'margin-top': '50px'}}>
                        <a href="#" data-toggle="modal" data-target="#studentModal" onClick={this.handlestudentClicked}>
                            <div className="media d-block pb_feature-v1">
                                <div className="pb_icon"><i className="ion-ios-bookmarks-outline pb_icon-gradient"></i></div>
                                <div className="media-body">
                                    <h6 className="mt-0 mb-3 heading" style={{ color: 'black' }}><b>{this.props.optionText.firstname + " " + this.props.optionText.lastname}</b></h6>
                                    <p className="text-sans-serif">{this.props.optionText.sapid + " - " + this.props.optionText.cgpa}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}
