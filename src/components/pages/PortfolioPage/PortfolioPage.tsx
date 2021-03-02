import React from 'react';
import classes from './portfolioPage.module.scss';

import chatImg1 from '../../../resources/images/projects_images/chat1.png';
import chatImg2 from '../../../resources/images/projects_images/chat2.png';
import chessImg from '../../../resources/images/projects_images/chess.jpg';
import learnAiImg from '../../../resources/images/projects_images/learn_ai1.png';
import medieteknikImg1 from '../../../resources/images/projects_images/medieteknik1.png';
import medieteknikImg2 from '../../../resources/images/projects_images/medieteknik2.png';
import medieteknikImg3 from '../../../resources/images/projects_images/medieteknik3.png';
import rlImg from '../../../resources/images/projects_images/rl1.png';
import swiftWriterImg from '../../../resources/images/projects_images/swiftWriter.png';
import rudlingTechImg from '../../../resources/images/projects_images/rudling_tech1.png';
import ProjectCard from "./ProjectCard/ProjectCard";

interface Props {

}

const PortfolioPage: React.FC<Props> = () => {
    const projects = [
        {
            name: "The Card Game",
            text: "",
            mainLink: "https://rrudling.github.io/thecardgame/",
            demoLink: "https://rrudling.github.io/thecardgame/",
            gitHubLink: "https://github.com/rrudling/thecardgame",
            image: chatImg1,
            technologies: ["css", "html", "js", "react", "firebase"]
        },
        {
            name: "Graphical Chess Game",
            text: "",
            mainLink: "https://github.com/rrudling/java-chess",
            demoLink: undefined,
            gitHubLink: "https://github.com/rrudling/java-chess",
            image: chessImg,
            technologies: ["java"]
        },
        {
            name: "Learn AI",
            text: "",
            mainLink: "https://rudling.tech/hmm/forwardAlgorithm",
            demoLink: "https://rudling.tech/hmm/forwardAlgorithm",
            gitHubLink: "https://github.com/rrudling/Learn-AI",
            image: learnAiImg,
            technologies: ["sass", "html", "js", "react", "firebase"]
        },
        {
            name: "Website for Media Technology Chapter @ KTH",
            text: "",
            mainLink: "https://www.medieteknik.com/documents",
            demoLink: "https://www.medieteknik.com",
            gitHubLink: "https://github.com/medieteknik-kth/medieteknik.com",
            image: medieteknikImg1,
            technologies: ["sass", "html", "js", "react"]
        },
        {
            name: "Reinforcement Learning lab",
            text: "",
            mainLink: "https://kth.kattis.com/problems/kth.ai.rl1",
            demoLink: "https://kth.kattis.com/problems/kth.ai.rl1",
            gitHubLink: undefined,
            image: rlImg,
            technologies: ["python"]
        },
        {
            name: "SwiftWriter",
            text: "",
            mainLink: "https://swiftwriter.web.app/",
            demoLink: "https://swiftwriter.web.app/",
            gitHubLink: "https://github.com/rrudling/swift-writer",
            image: swiftWriterImg,
            technologies: ["sass", "html", "js", "react", "firebase"]
        },
        {
            name: "Rudling.tech",
            text: "",
            mainLink: "https://rudling.tech",
            demoLink: "https://rudling.tech",
            gitHubLink: "https://github.com/rrudling/rudling-tech",
            image: rudlingTechImg,
            technologies: ["sass", "html", "ts", "react", "firebase"]
        }
    ]

    return (
        <div className={classes.PortfolioPage}>
            <div className={classes.projectsContainer}>
                {
                    projects.map(project => (
                        <ProjectCard
                            name = {project.name}
                            text = {project.text}
                            demoLink = {project.demoLink}
                            gitHubLink = {project.gitHubLink}
                            mainLink = {project.mainLink}
                            image = {project.image}
                            technologies = {project.technologies}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default PortfolioPage;