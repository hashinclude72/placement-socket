import React from 'react';
import createBrowseHistory from 'history/createBrowserHistory';


export class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
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
                            {this.props.loggedUser && <a class="navbar-brand">{this.props.loggedUser.firstname} {this.props.loggedUser.lastname}</a>}
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
                                {/* <li class="nav-item">
                                    <a class="nav-link" href="#pablo">
                                        <i class="now-ui-icons media-2_sound-wave"></i>
                                        <p>
                                            <span class="d-lg-none d-md-block">Stats</span>
                                        </p>
                                    </a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="now-ui-icons location_world"></i>
                                        <p>
                                            <span class="d-lg-none d-md-block">Some Actions</span>
                                        </p>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li> */}
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