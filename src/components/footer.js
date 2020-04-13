import React from 'react';
export class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom align-self-center" role="contentinfo">
                <div className="container">
                    {/* <div className="row text-center"> */}
                        <div className="col-md-6 align-self-center">
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="https://github.com/jaswal72/placement-socket" className="p-2"><i className="fab fa-github-alt"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="p-2"><i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="p-2"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 align-self-center">
                                <p className="pb_font-14" style={{'color': 'white'}}>&copy; 2019. All Rights Reserved. <br /> 
                                {/* <a
                                    href="https://uicookies.com/bootstrap-html-templates/">Bootstrap Templates</a> by uiCookies</p> */}
                                {/* <p className="pb_font-14">Demo Images: <a href="https://unsplash.com/" target="_blank" rel="nofollow">Unsplash</a> */}
                                </p>
                        </div>
                    {/* </div> */}
                </div>
            </nav>
        );
    }
}
