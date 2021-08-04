import React, { useState, useContext, createContext } from "react";
import { Project } from "../components/pages/PortfolioPage/portfolioUtilities";
import { projects } from "../components/pages/PortfolioPage/portfolioUtilities";

const SelectedProject = createContext<Project>(
    projects[Object.keys(projects)[0]]
);
const SelectedProjectUpdateContext = createContext<
    (newSelectedProject: Project) => void
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
    const firstProject = projects[Object.keys(projects)[0]];

    const [selectedProject, setSelectedProject] = useState<Project>(
        projectFromSessionStorage !== null
            ? JSON.parse(projectFromSessionStorage)
            : firstProject
    );

    const changeSelectedProject = (newSelectedProject: Project) => {
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
