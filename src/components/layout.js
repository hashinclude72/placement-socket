import React from 'react';
import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";



export class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedUser: this.props.loggedUser,
        };
    }

    render() {
        var loggedUser = this.state.loggedUser;
        return (
            <div>
                <Sidebar loggedUser={loggedUser} history={this.props.history}/>
                <div class="main-panel" id="main-panel">
                    <Navbar loggedUser={loggedUser} history={this.props.history}/>
                    {this.props.children}
                </div>
            </div>
        );
    }
}