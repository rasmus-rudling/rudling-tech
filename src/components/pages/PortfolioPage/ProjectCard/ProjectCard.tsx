import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useIsTouchScreen } from "../../../../contexts/IsTouchScreenContext";

import classes from './projectCard.module.scss';

import LinkIcon from '../../../common/icons/VisitIcon';

import firebaseIcon from '../../../../resources/icons/firebase.svg';
import cssIcon from '../../../../resources/icons/css3.svg';
import htmlIcon from '../../../../resources/icons/html5.svg';
import javascriptIcon from '../../../../resources/icons/javascript.svg';
import typescriptIcon from '../../../../resources/icons/typescript.svg';
import sassIcon from '../../../../resources/icons/sass.svg';
import reactIcon from '../../../../resources/icons/react.svg';
import javaIcon from '../../../../resources/icons/java.svg';
import pythonIcon from '../../../../resources/icons/python.svg';
import dockerIcon from '../../../../resources/icons/docker.svg';
import ThreeDimButton from "../../../common/Buttons/ThreeDimButton/ThreeDimButton";


interface Props {
    name: string,
    text: string,
    mainLink: string,
    demoLink?: string,
    gitHubLink?: string,
    image: string,
    technologies: Array<string>,
    showAllDetails: boolean
}

interface ObjectLiteral {
    [key: string]: any;
}

const ProjectCard: React.FC<Props> = ({
    name,
    text,
    mainLink,
    demoLink,
    gitHubLink,
    image,
    technologies,
    showAllDetails
}) => {

    // TODO: Show project details if user is on touch screen, currently it's only small screens that work
    const history = useHistory();
    const [showProjectDetails, setShowProjectDetails] = useState<boolean>(false);
    const [initialHide, setInitialHide] = useState<boolean>(true);

    const deviceIsTouchScreen = useIsTouchScreen();

    const technologiesInfo : ObjectLiteral = {
        "firebase": {
            "icon": firebaseIcon,
            "tooltipText": "Learn more about Firebase",
            "tooltipLink": "https://en.wikipedia.org/wiki/Firebase"
        },
        "css": {
            "icon": cssIcon,
            "tooltipText": "Learn more about CSS",
            "tooltipLink": "https://en.wikipedia.org/wiki/Cascading_Style_Sheets"
        },
        "html": {
            "icon": htmlIcon,
            "tooltipText": "Learn more about HTML",
            "tooltipLink": "https://en.wikipedia.org/wiki/HTML"
        },
        "js": {
            "icon": javascriptIcon,
            "tooltipText": "Learn more about Javascript",
            "tooltipLink": "https://en.wikipedia.org/wiki/Javascript"
            },
        "ts": {
            "icon": typescriptIcon,
            "tooltipText": "Learn more about Typescript",
            "tooltipLink": "https://en.wikipedia.org/wiki/TypeScript"
        },
        "sass": {
            "icon": sassIcon,
            "tooltipText": "Learn more about Sass",
            "tooltipLink": "https://en.wikipedia.org/wiki/Sass_(stylesheet_language)"
        },
        "react": {
            "icon": reactIcon,
            "tooltipText": "Learn more about React",
            "tooltipLink": "https://en.wikipedia.org/wiki/React_(JavaScript_library)"
        },
        "java": {
            "icon": javaIcon,
            "tooltipText": "Learn more about Java",
            "tooltipLink": "https://en.wikipedia.org/wiki/Java_(programming_language)"
        },
        "python": {
            "icon": pythonIcon,
            "tooltipText": "Learn more about Python",
            "tooltipLink": "https://en.wikipedia.org/wiki/Python_(programming_language)"
        },
        "docker": {
            "icon": dockerIcon,
            "tooltipText": "Learn more about Docker",
            "tooltipLink": "https://en.wikipedia.org/wiki/Docker_(software)"
        }
    }

    let badgeClasses = [classes.technologyBadge];

    if (initialHide && !showAllDetails) {
        badgeClasses.push(classes.hideFirst);
    }

    if (showProjectDetails || showAllDetails) {
        badgeClasses.push(classes.showBadge);
    } else {
        badgeClasses.push(classes.hideBadge);
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
            <div
                className={showProjectDetails || showAllDetails
                    ? [classes.ProjectCard, classes.activateBlur].join(" ")
                    : classes.ProjectCard
                }
                style = {{
                    "backgroundImage": `url(${image})`
                }}
            >
                <div
                    className = {showProjectDetails || showAllDetails
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
                    className = {showProjectDetails || showAllDetails
                        ? classes.name
                        : [classes.name, classes.hideName].join(" ")
                    }
                >{name}</div>

                <div
                    className = {showProjectDetails || showAllDetails
                        ? classes.text
                        : [classes.text, classes.hideText].join(" ")
                    }
                >{text}</div>
            </div>


            <div
                className = {showProjectDetails || showAllDetails
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