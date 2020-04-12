import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from "react-router-dom";
import createBrowseHistory from 'history/createBrowserHistory';
import './index.css';
import App from './App';
import { RegisterUser } from "./components/registerUser";
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//     <Router history={createBrowseHistory()}>
//         <Switch>
//             <Route exact path="/" component={App} />
//             <Route exact path="/register-user" component={RegisterUser} />
//         </Switch>
//     </Router>,
//     document.getElementById('root')
//     );

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
