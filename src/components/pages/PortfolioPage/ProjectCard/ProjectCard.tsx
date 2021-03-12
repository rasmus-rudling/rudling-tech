import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useIsTouchScreen } from "../../../../contexts/IsTouchScreenContext";

import classes from './projectCard.module.scss';

import LinkIcon from '../../../common/icons/VisitIcon';
import ThreeDimButton from "../../../common/Buttons/ThreeDimButton/ThreeDimButton";

interface Technology {
    "icon": string,
    "tooltipText": string,
    "tooltipLink": string
}

interface TechnologiesInfo {
    [key: string]: Technology
}

interface Props {
    name: string,
    text: string,
    mainLink: string,
    demoLink?: string,
    gitHubLink?: string,
    images: Array<string>,
    technologies: Array<string>,
    showAllDetails: boolean,
    technologiesInfo: TechnologiesInfo
}

const ProjectCard: React.FC<Props> = ({
    name,
    text,
    mainLink,
    demoLink,
    gitHubLink,
    images,
    technologies,
    showAllDetails,
    technologiesInfo
}) => {

    const history = useHistory();
    const [showProjectDetails, setShowProjectDetails] = useState<boolean>(false);
    const [initialHide, setInitialHide] = useState<boolean>(true);
    const [showBg, setShowBg] = useState<boolean>(false);

    const deviceIsTouchScreen = useIsTouchScreen();



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
            <img alt="" src={images[0]} style={{"display":"none"}} onLoad={() => {setShowBg(true)}} />

            <div
                className={projectCardClasses.join(" ")}
                style = {{
                    "backgroundImage": `url(${images[0]})`
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
                    technologies.map(technology => (
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
                    window.open(mainLink, '_blank');
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
                >{name}</div>

                <div
                    className = {showProjectDetails || showAllDetails || deviceIsTouchScreen
                        ? classes.text
                        : [classes.text, classes.hideText].join(" ")
                    }
                >{text}</div>
            </div>


            <div
                className = {showProjectDetails || showAllDetails || deviceIsTouchScreen
                    ? classes.linkButtonsContainer
                    : [classes.linkButtonsContainer, classes.hideLinkButtons].join(" ")
                }
            >
                {
                    demoLink !== undefined ?
                        <ThreeDimButton
                            text="Demo"
                            onClickHandler={() => window.open(demoLink, '_blank')}
                            extraClasses={[classes.demoButton]}
                        /> : null
                }

                {
                    gitHubLink !== undefined ?
                        <ThreeDimButton
                            text="GitHub"
                            onClickHandler={() => window.open(gitHubLink, '_blank')}
                            extraClasses={[classes.gitHubButton]}
                        /> : null
                }

                <ThreeDimButton
                    text="Learn more"
                    onClickHandler={() => history.push("/")}
                    extraClasses={[classes.learnMoreButton]}
                    color = "gray"
                />
            </div>
        </div>
    )
}

export default ProjectCard;