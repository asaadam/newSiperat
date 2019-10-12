import  React  from 'react';
import { HashRouter as Router, Switch,Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HomePage from './components/homepage';
export default function router() {
    return (

        <div>
            <Navbar/>

                <Router>
                    <Switch>
                    <Route path="/" exact component={HomePage} />
                    </Switch>

                </Router>
        </div>

    )
}