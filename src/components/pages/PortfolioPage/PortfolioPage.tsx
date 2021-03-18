import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import classes from './portfolioPage.module.scss';
import { projects, technologiesInfo, Project } from "./portfolioUtilities";

// === COMPONENTS ===
import ThreeDimButton from "../../common/Buttons/ThreeDimButton/ThreeDimButton";
import ProjectCard from "./ProjectCard/ProjectCard";
import MultipleChoiceButtonPrimary from "../../common/Buttons/MultipleChoiceButtonPrimary/MultipleChoiceButtonPrimary";
import MultipleChoiceButtonSecondary from "../../common/Buttons/MultipleChoiceButtonSecondary/MultipleChoiceButtonSecondary";
import ImageCarousel from "../../common/ImageCarousel/ImageCarousel";
import TechnologiesBarChart from "./TechnologiesBarChart/TechnologiesBarChart.jsx";
// ==================

interface typesDict {
    [key: string]: any;
}

export interface TechnologiesCounter {
    [key: string]: number
}

export interface TechnologiesCounterObject {
    technology: string,
    count: number
}

// TODO: Make visually appealing summary of the technologies I've been using
const PortfolioPage: React.FC = () => {
    const changeProjectType = (newProjectType : string) => {
        if (selectedProjectType !== newProjectType) {
            setHideMobileProjectsMenu(true);
        }

        let tempProjectTypes = [...projectTypes];

        tempProjectTypes.forEach(option => {
            option.isSelected = option.type === newProjectType;
        })

        setProjectTypes(tempProjectTypes);
        setSelectedProjectType(newProjectType);

        let newProjectsToShow = getNewProjectsToShow("", newProjectType,true);
        setProjectsToShow(newProjectsToShow);

        setTimeout(() => setHideMobileProjectsMenu(false), 200);
    }

    const changeCurrentProject = (newCurrentProject : string) => {
        setProjectsToShow(getNewProjectsToShow(newCurrentProject));
        setSelectedProject(projects[newCurrentProject]);
    }

    const getNewProjectsToShow = (newCurrentProject : string, _selectedProjectType=selectedProjectType, setWithIdx=false) => {
        let tempProjectsToShow : Array<typesDict> = [],
            projectIdx = 0;

        Object.keys(projects).forEach(projectKey => {
            let project = projects[projectKey]
            if (project.type === _selectedProjectType) {
                let optionObject : typesDict = {};
                optionObject["type"] = project.name;
                if (setWithIdx) {
                    if (projectIdx === 0) {
                        setSelectedProject(project);
                        optionObject["isSelected"] = true;
                    } else {
                        optionObject["isSelected"] = false;
                    }

                } else {
                    optionObject["isSelected"] = project.name === newCurrentProject;
                }

                tempProjectsToShow.push(optionObject);
                projectIdx++;
            }
        })
        return tempProjectsToShow;
    }

    const [showAllDetails, setShowAllDetails] = useState<boolean>(window.innerWidth < 535);
    const [projectTypes, setProjectTypes] = useState<Array<typesDict>>([
        {
            "type": "Personal",
            "isSelected": true
        },
        {
            "type": "Professional",
            "isSelected": false
        },
        {
            "type": "School",
            "isSelected": false
        }
    ]);
    const [selectedProjectType, setSelectedProjectType] = useState<string>("Personal");
    const [selectedProject, setSelectedProject] = useState<Project>(projects["Learn AI"]);
    const [projectsToShow, setProjectsToShow] = useState<Array<typesDict>>(getNewProjectsToShow("Learn AI"));
    const [hideMobileProjectsMenu, setHideMobileProjectsMenu] = useState<boolean>(false);

    window.addEventListener("resize", () => {
        setShowAllDetails(window.innerWidth < 535);
    })

    const barChartWidth = window.innerWidth > 500 ? 500 : window.innerWidth * 0.8;
    let technologiesCounter : TechnologiesCounter = {};

    Object.keys(projects).forEach(projectName => {
        let projectTechnologies = projects[projectName].technologies;

        projectTechnologies.forEach(technology => {
            if (technologiesCounter[technology] === undefined) {
                technologiesCounter[technology] = 1;
            } else {
                technologiesCounter[technology] += 1;
            }
        })
    })

    let technologiesCounterArray : Array<TechnologiesCounterObject> = [];

    Object.keys(technologiesCounter).forEach(technology => {
        technologiesCounterArray.push({technology: technology, count: technologiesCounter[technology]});
    });

    console.log(technologiesCounterArray);


    return (
        <div className={classes.PortfolioPage}>
            <div className={classes.header}><h1 style={{"marginBottom":"10px"}}>Rasmus Rudling Portfolio</h1></div>
            <p>
                On this page you will find a selection
                of projects that I have been working
                on during my years as a developer.
            </p>

            <TechnologiesBarChart
                technologiesCounter={technologiesCounterArray}
                width={barChartWidth}
            />

            {/* === DESKTOP === */}
            <div className={classes.projectsContainer}>
                {
                    Object.keys(projects).map(projectKey => {
                        let project = projects[projectKey];
                        return (
                            <ProjectCard
                                projectInfo={project}
                                showAllDetails={showAllDetails}
                                technologiesInfo = {technologiesInfo}
                            />
                        )
                    })
                }
            </div>

            {/* === MOBILE === */}
            <div className={classes.mobileProjectsContainer}>
                <MultipleChoiceButtonPrimary
                    options = {projectTypes}
                    changeOption = {changeProjectType}
                    extraClass = {classes.projectTypes}
                />

                <div className={
                    hideMobileProjectsMenu
                        ? classes.hideMobileProjectsMenu
                        : classes.mobileProjectsMenu
                }>
                    <MultipleChoiceButtonSecondary
                        options = {projectsToShow}
                        changeOption = {changeCurrentProject}
                        extraClass = {classes.projectTypes}
                    />
                </div>

                <div className={classes.projectInfoContainer}>
                    <ImageCarousel images={selectedProject.images} extraClasses={[classes.imageCarousel]} />

                    <div style={{"fontWeight":"bolder"}}>Technologies that I used:</div>

                    <div className={classes.technologiesUsedContainer}>
                        {selectedProject.technologies.map(technology => (
                            <div className={classes.technology}>
                                <div className={classes.imageContainer}>
                                    <img src={technologiesInfo[technology].icon} alt={""} />
                                </div>

                                <div>{technology}</div>
                            </div>
                        ))}
                    </div>

                    <p
                        className={classes.longText}
                        dangerouslySetInnerHTML={{__html: selectedProject.textLong}}
                    />
                    <ul>
                        {selectedProject.bullets.map(bullet => (
                            <li dangerouslySetInnerHTML={{__html: bullet}} />
                        ))}
                    </ul>

                    <div className={classes.blueButtonsContainer}>
                        {
                            selectedProject.gitHubLink !== undefined ?
                                <ThreeDimButton
                                    text="GitHub"
                                    onClickHandler={() => window.open(selectedProject.gitHubLink, '_blank')}
                                    extraClasses={[classes.gitHubButton]}
                                /> : null
                        }

                        {
                            selectedProject.demoLink !== undefined ?
                                <ThreeDimButton
                                    text="Demo"
                                    onClickHandler={() => window.open(selectedProject.demoLink, '_blank')}
                                    extraClasses={[classes.demoButton]}
                                /> : null
                        }
                    </div>

                    {
                        selectedProject.name === "The Card Game" ?
                            <div className={classes.learnMoreButtonContainer}>
                                <ThreeDimButton
                                    text="Read the thesis"
                                    onClickHandler={() => {
                                        const link = document.createElement('a');
                                        link.href = process.env.PUBLIC_URL + "/documents/bachelors_thesis.pdf";
                                        link.target = "_blank";
                                        link.click();
                                    }}
                                    color = "gray"
                                />
                            </div> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage;