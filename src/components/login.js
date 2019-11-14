import React from 'react';
export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }
    render() {
        return (
            <div className="container">

                <div className="col-md-5 relative align-self-center">

                    {/* <h2 className="mb-4 mt-0 text-center">Sign Up</h2> */}
                    <div className="form-group">
                        <input type="text" id="fname" className="form-control pb_height-50 reverse" placeholder="Sap Id" />
                    </div>
                    <div className="form-group">
                        <input type="password" id="lname" className="form-control pb_height-50 reverse" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue" value="Login" onClick={this.login_user} />
                    </div>

                </div>

            </div>
        );
    }
}
