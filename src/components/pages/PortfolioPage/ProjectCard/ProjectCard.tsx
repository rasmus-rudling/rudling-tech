import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useIsTouchScreen } from "../../../../contexts/IsTouchScreenContext";

import classes from './projectCard.module.scss';

import LinkIcon from '../../../common/icons/VisitIcon';
import ThreeDimButton from "../../../common/Buttons/ThreeDimButton/ThreeDimButton";
import {useSelectedProjectUpdate} from "../../../../contexts/SelectedProjectContext";

import {Project} from "../portfolioUtilities";

interface Technology {
    "icon": string,
    "tooltipText": string,
    "tooltipLink": string
}

interface TechnologiesInfo {
    [key: string]: Technology
}

interface Props {
    projectInfo: Project,
    showAllDetails: boolean,
    technologiesInfo: TechnologiesInfo
}

const ProjectCard: React.FC<Props> = ({
    projectInfo,
    showAllDetails,
    technologiesInfo
}) => {
    const updateSelectedProject = useSelectedProjectUpdate();
    const deviceIsTouchScreen = useIsTouchScreen();
    const history = useHistory();

    const [showProjectDetails, setShowProjectDetails] = useState<boolean>(false);
    const [initialHide, setInitialHide] = useState<boolean>(true);
    const [showBg, setShowBg] = useState<boolean>(false);

    let badgeClasses = [classes.technologyBadge],
        projectCardClasses;

    if (initialHide && !showAllDetails) {
        badgeClasses.push(classes.hideFirst);
    }

    if (showProjectDetails || showAllDetails || deviceIsTouchScreen) {
        badgeClasses.push(classes.showBadge);
    } else {
        badgeClasses.push(classes.hideBadge);
    }

    if (showProjectDetails || showAllDetails || deviceIsTouchScreen) {
        projectCardClasses = [classes.ProjectCard, classes.activateBlur];
    } else {
        projectCardClasses =  [classes.ProjectCard];
    }

    if (!showBg) {
        projectCardClasses.push(classes.hideBg);
    }

    return (
        <div
            className={classes.projectCardContainer}
            onMouseEnter = {() => {
                setShowProjectDetails(true);
                setInitialHide(false);
            }}
            onMouseLeave = {() => {
                setShowProjectDetails(false);
                setInitialHide(false);
            }}
        >

            <img alt="" src={projectInfo.images[0].original} style={{"display":"none"}} onLoad={() => {setShowBg(true)}} />

            <div
                className={projectCardClasses.join(" ")}
                style = {{
                    "backgroundImage": `url(${projectInfo.images[0].original})`
                }}
            >
                <div
                    className = {showProjectDetails || showAllDetails || deviceIsTouchScreen
                        ? classes.detailsContainer
                        : [classes.detailsContainer, classes.hideDetails].join(" ")
                    }
                />
            </div>

            <div className={classes.technologiesContainer}>
                {
                    projectInfo.technologies.map(technology => (
                        <div
                            className={badgeClasses.join(" ")}
                            onClick = {() => {
                                window.open(technologiesInfo[technology].tooltipLink, '_blank');
                            }}
                        >
                            <img src={technologiesInfo[technology].icon} alt="" />
                            <span className={classes.tooltiptext}>{technologiesInfo[technology].tooltipText}</span>
                        </div>
                    ))
                }
            </div>

            <div
                className={classes.mainLinkButton}
                onClick = {() => {
                    window.open(projectInfo.mainLink, '_blank');
                }}
            >
                <LinkIcon
                    iconColor= "#fff"
                    iconWidth= "30px"
                />
            </div>

            <div className={classes.textsContainer}>
                <div
                    className = {showProjectDetails || showAllDetails || deviceIsTouchScreen
                        ? classes.name
                        : [classes.name, classes.hideName].join(" ")
                    }
                >{projectInfo.name}</div>

                <div
                    className = {showProjectDetails || showAllDetails || deviceIsTouchScreen
                        ? classes.text
                        : [classes.text, classes.hideText].join(" ")
                    }
                >{projectInfo.text}</div>
            </div>

            <div
                className = {showProjectDetails || showAllDetails || deviceIsTouchScreen
                    ? classes.projectType
                    : [classes.projectType, classes.hideProjectType].join(" ")
                }
            >
                {projectInfo.type} project
            </div>

            <div
                className = {showProjectDetails || showAllDetails || deviceIsTouchScreen
                    ? classes.linkButtonsContainer
                    : [classes.linkButtonsContainer, classes.hideLinkButtons].join(" ")
                }
            >
                {
                    projectInfo.demoLink !== undefined ?
                        <ThreeDimButton
                            text="Demo"
                            onClickHandler={() => window.open(projectInfo.demoLink, '_blank')}
                            extraClasses={[classes.demoButton]}
                        /> : null
                }

                {
                    projectInfo.gitHubLink !== undefined ?
                        <ThreeDimButton
                            text="GitHub"
                            onClickHandler={() => window.open(projectInfo.gitHubLink, '_blank')}
                            extraClasses={[classes.gitHubButton]}
                        /> : null
                }

                <ThreeDimButton
                    text="Learn more"
                    onClickHandler={() => {
                        updateSelectedProject(projectInfo);
                        history.push(`/portfolio/details/${projectInfo.name.split(' ').join('_')}`)
                    }}
                    extraClasses={[classes.learnMoreButton]}
                    color = "gray"
                />
            </div>
        </div>
    )
}

export default ProjectCard;