import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './Components/login';
import Mainpage from './Components/mainpage';

const router = (
    <Router>
        <div className = "body">

            <Route path='/' exact component={Mainpage} />
            <Route path='/login' exact component={Login} />

        </div>
    </Router>


)


ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
