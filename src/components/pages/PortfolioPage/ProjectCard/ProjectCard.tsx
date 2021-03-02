import React from 'react';
import classes from './projectCard.module.scss';

interface Props {
    name: string,
    text: string,
    mainLink: string,
    demoLink?: string,
    gitHubLink?: string,
    image: string,
    technologies: Array<string>
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
    return (
        <div
            className={classes.ProjectCard}
            style = {{
                "backgroundImage": `url(${image})`
            }}
        >

        </div>
    )
}

export default ProjectCard;