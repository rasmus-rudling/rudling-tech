import React from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


import MainMenu from './components/MainMenu/MainMenu';
import HomePage from './components/pages/HomePage/HomePage';
import PortfolioPage from "./components/pages/PortfolioPage/PortfolioPage";

const App = () => {
    const mainMenuButtons = [
        {
            pageAddress: "",
            text: "Home"
        },
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
                    <HomePage />
                </Route>

                <Route exact path="/blog">
                    <MainMenu menuButtons = {mainMenuButtons}/>
                    <HomePage />
                </Route>

                <Route exact path="/portfolio">
                    <MainMenu menuButtons = {mainMenuButtons}/>
                    <PortfolioPage />
                </Route>

                <Route exact path="/tutorials">
                    <MainMenu menuButtons = {mainMenuButtons}/>
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
