import React from 'react';
import { Link } from "react-router-dom";
import createBrowseHistory from 'history/createBrowserHistory';


export class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser() {
        console.log("Logout");
        localStorage.removeItem("loggedUser");
        var history = createBrowseHistory();
        history.push('/');
        window.location.reload()
        // localStorage.clear();
    }
    render() {
        return (
            <div>
                <div class="sidebar" data-color="orange">
                    <div class="logo">
                        <a class="simple-text logo-mini">
                            PS
                    </a>
                        <a class="simple-text logo-normal">
                            Placement Socket
                    </a>
                    </div>
                    <div class="sidebar-wrapper" id="sidebar-wrapper">
                        <ul class="nav">
                            {this.props.loggedUser && <li>
                                <Link to="/">
                                    <a>
                                        <i class="now-ui-icons design_app"></i>
                                        <p>Dashboard</p>
                                    </a>
                                </Link>
                            </li>}
                            {this.props.loggedUser &&
                                (
                                    this.props.loggedUser.role === "company" && <li>
                                        <Link to="/add-company">
                                            <a>
                                                <i class="now-ui-icons education_atom"></i>
                                                <p>Add Company</p>
                                            </a>
                                        </Link>
                                    </li>
                                )
                            }
                            {this.props.loggedUser &&
                                // (
                                //     this.props.loggedUser.role === "company" && 
                                <li>
                                    <Link to='/room/admin'>
                                        <a>
                                            <i class="now-ui-icons education_atom"></i>
                                            <p>Creat Calling Room</p>
                                        </a>
                                    </Link>
                                </li>
                                // )
                            }
                            {this.props.loggedUser &&
                                (
                                    this.props.loggedUser.role === "company" && <li>
                                        <Link to="/students">
                                            <a>
                                                <i class="now-ui-icons location_map-big"></i>
                                                <p>Student Details</p>
                                            </a>
                                        </Link>
                                    </li>
                                )
                            }
                            {this.props.loggedUser && <li>
                                <Link to="/companies">
                                    <a>
                                        <i class="now-ui-icons ui-1_bell-53"></i>
                                        <p>Company Details</p>
                                    </a>
                                </Link>
                            </li>}
                            {!this.props.loggedUser && <li>
                                <Link to="/">
                                    <a>
                                        <i class="now-ui-icons users_single-02"></i>
                                        <p>Login</p>
                                    </a>
                                </Link>
                            </li>}
                            {!this.props.loggedUser && <li>
                                <Link to="/register-user">
                                    <a>
                                        <i class="now-ui-icons design_bullet-list-67"></i>
                                        <p>Register</p>
                                    </a>
                                </Link>
                            </li>}
                            {this.props.loggedUser && <li class="active-pro">
                                <a onClick={this.logoutUser}>
                                    <i class="now-ui-icons arrows-1_cloud-download-93"></i>
                                    <p>Logout</p>
                                </a>
                            </li>}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
