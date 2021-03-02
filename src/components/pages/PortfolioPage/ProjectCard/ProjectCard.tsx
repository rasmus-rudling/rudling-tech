import React, { useState } from 'react';
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

interface Props {
    name: string,
    text: string,
    mainLink: string,
    demoLink?: string,
    gitHubLink?: string,
    image: string,
    technologies: Array<string>
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
    technologies
}) => {
    const [showProjectDetails, setShowProjectDetails] = useState<boolean>(false);

    const technologiesIcons : ObjectLiteral = {
        "firebase": firebaseIcon,
        "css": cssIcon,
        "html": htmlIcon,
        "js": javascriptIcon,
        "ts": typescriptIcon,
        "sass": sassIcon,
        "react": reactIcon,
        "java": javaIcon,
        "python": pythonIcon
    }

    // @ts-ignore
    return (
        <div
            className={classes.projectCardContainer}
            onMouseEnter = {() => setShowProjectDetails(true)}
            onMouseLeave = {() => setShowProjectDetails(false)}
        >
            <div
                className={showProjectDetails
                    ? [classes.ProjectCard, classes.activateBlur].join(" ")
                    : classes.ProjectCard
                }
                style = {{
                    "backgroundImage": `url(${image})`
                }}
            >
                <div
                    className = {showProjectDetails
                        ? classes.detailsContainer
                        : [classes.detailsContainer, classes.hideDetails].join(" ")
                    }
                />
            </div>



            <div className={showProjectDetails
                ? classes.technologiesContainer
                : [classes.technologiesContainer, classes.hideBadges].join(" ")
            }>
                {
                    technologies.map(technology => (
                        <div
                            className = {classes.technologyBadge}
                        >
                            <img src={technologiesIcons[technology]} alt="" />
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
        </div>
    )
}

export default ProjectCard;