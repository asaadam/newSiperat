import React, { Fragment } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './components/homepage';
import Login from './pages/Login';
import Admin from './pages/Admin';
export default function router() {
    return (
        <Fragment>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/admin' exact component={Admin}/>
                </Switch>
            </Router>
        </Fragment>

    )
}