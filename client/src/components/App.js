// configure react router
// all routing logic for application setup here


import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';    // BrowserRouter and Router are both React Components
import { connect } from 'react-redux';
import * as actions from '../actions';
import SurveyNew from './surveys/SurveyNew';

import Header from './Header';
// import Dashboard from './Dashboard';
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>;

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />

                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

// export default App;
export default connect(null, actions)(App);