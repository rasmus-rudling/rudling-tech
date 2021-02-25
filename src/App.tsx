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
    const mainMenuButtons = [
        {
            pageAddress: "tech-blog",
            text: "Tech blog"
        },
        {
            pageAddress: "tutorials",
            text: "Tutorials"
        },
        {
            pageAddress: "portfolio",
            text: "Portfolio"
        }
    ]

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainMenu menuButtons = {mainMenuButtons}/>
                    <FrontPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
