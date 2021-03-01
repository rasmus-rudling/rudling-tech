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
            pageAddress: "blog",
            text: "Blog"
        },
        {
            pageAddress: "portfolio",
            text: "Portfolio"
        },
        {
            pageAddress: "tutorials",
            text: "Tutorials"
        }
    ]

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainMenu menuButtons = {mainMenuButtons}/>
                    <FrontPage />
                </Route>

                <Route exact path="/blog">
                    <MainMenu menuButtons = {mainMenuButtons}/>
                    <FrontPage />
                </Route>

                <Route exact path="/portfolio">
                    <MainMenu menuButtons = {mainMenuButtons}/>
                    <FrontPage />
                </Route>

                <Route exact path="/tutorials">
                    <MainMenu menuButtons = {mainMenuButtons}/>
                    <FrontPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
