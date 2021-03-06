import React from 'react';
export class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser(){
        console.log("Logout");
        localStorage.removeItem("loggedUser");
        window.location.reload()
        // localStorage.clear();
    }
    render() {
        return (
            // <nav className="navbar navbar-expand-lg navbar-dark pb_navbar pb_scrolled-light scrolled awake" id="pb-navbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top pb_scrolled-light scrolled awake" id="pb-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html">Placement Socket</a>
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#probootstrap-navbar" aria-controls="probootstrap-navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span><i className="ion-navicon"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="probootstrap-navbar">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a className="nav-link" href="#section-home">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#section-features">About</a></li>
                            {/* <li className="nav-item"><a className="nav-link" href="#section-reviews">Reviews</a></li>
                            <li className="nav-item"><a className="nav-link" href="#section-pricing">Pricing</a></li>
                            <li className="nav-item"><a className="nav-link" href="#section-faq">FAQ</a></li> */}
                            &nbsp;&nbsp;{this.props.loggedUser && <i class="fas fa-user" style={{'color': 'white'}}></i>}
                            {this.props.loggedUser && <li className="nav-item"><a href="#" className="nav-link" style={{'border': 'none'}}>&nbsp;{this.props.loggedUser.id}</a></li>} 
                            &nbsp;&nbsp;&nbsp;&nbsp;{this.props.loggedUser && <i class="fas fa-sign-out-alt" style={{ 'color': 'white' }}></i>}
                            {this.props.loggedUser && <li className=" nav-item"><a href="#" className="nav-link" onClick={this.logoutUser}>&nbsp;Logout</a></li>}
                            {/* <li className=" nav-item cta-btn ml-xl-2 ml-lg-2 ml-md-0 ml-sm-0 ml-0 error"><a className="nav-link" href="#" target="_blank" onClick={this.logoutUser}><span className="pb_rounded-4 px-4 error">Logout</span></a></li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
