import React from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import FrontPage from './components/pages/FrontPage/FrontPage';
import MainMenu from './components/MainMenu/MainMenu';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainMenu />
                    <FrontPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
