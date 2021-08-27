import React, { useState, useContext, createContext } from "react";
import { SvEnProject } from "../components/pages/PortfolioPage/portfolioUtilities";
import { svEnProjects } from "../components/pages/PortfolioPage/portfolioUtilities";

const SelectedProject = createContext<SvEnProject>(
	svEnProjects[Object.keys(svEnProjects)[0]]
);
const SelectedProjectUpdateContext = createContext<
	(newSelectedProject: SvEnProject) => void
>((x) => console.log(x));

export const useSelectedProject = () => {
	return useContext(SelectedProject);
};

export const useSelectedProjectUpdate = () => {
	return useContext(SelectedProjectUpdateContext);
};

interface Props {
	children: React.ReactNode;
}

const SelectedProjectProvider: React.FC<Props> = ({ children }) => {
	const projectFromSessionStorage = sessionStorage.getItem("project");

	const possibleProjects = Object.keys(svEnProjects);
	const URL = window.location.href;
	const projectName = String(URL.split("/").pop()).replace("_", " ");

	const projectFromURLExist = possibleProjects.includes(projectName);

	let initProject;

	if (projectFromURLExist) {
		initProject = svEnProjects[projectName];
	} else {
		const firstProject = svEnProjects[possibleProjects[0]];
		initProject =
			projectFromSessionStorage !== null
				? JSON.parse(projectFromSessionStorage)
				: firstProject;
	}

	const [selectedProject, setSelectedProject] =
		useState<SvEnProject>(initProject);

	const changeSelectedProject = (newSelectedProject: SvEnProject) => {
		setSelectedProject(newSelectedProject);
		sessionStorage.setItem("project", JSON.stringify(newSelectedProject));
	};

	return (
		<SelectedProject.Provider value={selectedProject}>
			<SelectedProjectUpdateContext.Provider
				value={changeSelectedProject}
			>
				{children}
			</SelectedProjectUpdateContext.Provider>
		</SelectedProject.Provider>
	);
};

export default SelectedProjectProvider;
