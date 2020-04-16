import React from 'react';
import createBrowseHistory from 'history/createBrowserHistory';
import { StudentDetails } from "./studentDetails";

export class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            studentDetails: this.props.loggedUser,
        };
        this.handleUpdatedStudent = this.handleUpdatedStudent.bind(this);
    }

    logoutUser() {
        console.log("Logout");
        localStorage.removeItem("loggedUser");
        var history = createBrowseHistory();
        history.push('/');
        window.location.reload()
        // localStorage.clear();
    }

    handleUpdatedStudent(updatedStudent) {
        const json = JSON.stringify(updatedStudent);
        localStorage.setItem('loggedUser', json);
        this.setState(() => {
            return {
                studentDetails: updatedStudent,
            };
        });
    }

    render() {
        return (
            <div>
                <div className="modal fade" id="studentModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                {/* <h4 className="modal-title">Modal Header</h4> */}
                            </div>
                            <div className="modal-body">
                                {this.props.loggedUser && <StudentDetails key={this.props.loggedUser.id} student={this.props.loggedUser} loggedUserRole={this.props.loggedUser.role} handleUpdatedStudent={this.handleUpdatedStudent} />}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.closeStudentDetail}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <nav class="navbar navbar-expand-lg navbar-transparent  bg-primary  navbar-absolute">
                    <div class="container-fluid">
                        <div class="navbar-wrapper">
                            <div class="navbar-toggle">
                                <button type="button" class="navbar-toggler">
                                    <span class="navbar-toggler-bar bar1"></span>
                                    <span class="navbar-toggler-bar bar2"></span>
                                    <span class="navbar-toggler-bar bar3"></span>
                                </button>
                            </div>
                            {this.props.loggedUser &&
                                <a href="#" data-toggle="modal" data-target="#studentModal" class="navbar-brand">{this.props.loggedUser.firstname} {this.props.loggedUser.lastname} - CGPA: {this.props.loggedUser.cgpa}</a>
                            }
                        </div>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-bar navbar-kebab"></span>
                            <span class="navbar-toggler-bar navbar-kebab"></span>
                            <span class="navbar-toggler-bar navbar-kebab"></span>
                        </button>

                        <div class="collapse navbar-collapse justify-content-end" id="navigation">
                            <form>
                                {this.props.loggedUser && <div class="input-group no-border">
                                    <div class="input-group-text">
                                        <i class="now-ui-icons users_single-02"></i>
                                    </div>
                                    <input style={{ 'text-align': 'center' }} type="text" value={this.props.loggedUser.id} class="form-control" disabled />
                                </div>}
                            </form>
                            <ul class="navbar-nav">
                                {this.props.loggedUser && <li class="nav-item">
                                    <a class="nav-link" onClick={this.logoutUser}>
                                        <i class="now-ui-icons arrows-1_share-66"></i>
                                        <p>
                                            <span class="d-lg-none d-md-block">Logout</span>
                                        </p>
                                    </a>
                                </li>}
                            </ul>
                        </div>

                    </div>
                </nav>
                <div class="panel-header panel-header-sm">
                </div>
            </div>
        );
    }
}