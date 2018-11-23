// holds react router stuff

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';    // BrowserRouter and Router are both React Components

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" component={Landing} />
                    <Route path="/surveys" component={Dashboard} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;