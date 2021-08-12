import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { svEnProjects } from "./components/pages/PortfolioPage/portfolioUtilities";

import MainMenu from "./components/MainMenu/MainMenu";
import HomePage from "./components/pages/HomePage/HomePage";
import PortfolioPage from "./components/pages/PortfolioPage/PortfolioPage";
import ProjectDetails from "./components/pages/PortfolioPage/ProjectDetails/ProjectDetails";

import IsTouchScreenProvider from "./contexts/IsTouchScreenContext";
import SelectedProjectProvider from "./contexts/SelectedProjectContext";
import LanguageProvider from "./contexts/LanguageContext";

const App = () => {
	const mainMenuButtons = [
		{
			pageAddress: "/",
			text: "Home",
		},
		// {
		//     pageAddress: "blog",
		//     text: "Blog"
		// },
		{
			pageAddress: "/portfolio",
			text: "Portfolio",
		},
		// {
		//     pageAddress: "tutorials",
		//     text: "Tutorials"
		// }
	];

	let projectPaths = Object.keys(svEnProjects).map((projectName) =>
		projectName.split(" ").join("_")
	);

	return (
		<LanguageProvider>
			<IsTouchScreenProvider>
				<SelectedProjectProvider>
					<Router>
						<Switch>
							<Route exact path="/">
								<MainMenu menuButtons={mainMenuButtons} />
								<HomePage />
							</Route>

							<Route exact path="/blog">
								<MainMenu menuButtons={mainMenuButtons} />
								<HomePage />
							</Route>

							<Route exact path="/portfolio">
								<MainMenu menuButtons={mainMenuButtons} />
								<PortfolioPage />
							</Route>

							{projectPaths.map((projectPath) => {
								// console.log(`portfolio/details/${projectPath}`);
								return (
									<Route
										exact
										path={`/portfolio/details/${projectPath}`}
										key={projectPath}
									>
										<MainMenu
											menuButtons={mainMenuButtons}
										/>
										<ProjectDetails />
									</Route>
								);
							})}

							<Route exact path="/tutorials">
								<MainMenu menuButtons={mainMenuButtons} />
								<HomePage />
							</Route>
						</Switch>
					</Router>
				</SelectedProjectProvider>
			</IsTouchScreenProvider>
		</LanguageProvider>
	);
};

export default App;
