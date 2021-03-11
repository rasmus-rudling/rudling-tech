import React, {useState} from 'react';
import classes from './portfolioPage.module.scss';

import chatImg1 from '../../../resources/images/projects_images/low/chat1.jpg';
import chatImg2 from '../../../resources/images/projects_images/low/chat2.jpg';
import chessImg from '../../../resources/images/projects_images/low/chess.jpg';
import learnAiImg from '../../../resources/images/projects_images/low/learn_ai1.jpg';
import medieteknikImg1 from '../../../resources/images/projects_images/low/medieteknik1.jpg';
import medieteknikImg2 from '../../../resources/images/projects_images/low/medieteknik2.jpg';
import medieteknikImg3 from '../../../resources/images/projects_images/low/medieteknik3.jpg';
import rlImg from '../../../resources/images/projects_images/low/rl1.jpg';
import swiftWriterImg from '../../../resources/images/projects_images/low/swiftWriter.jpg';
import rudlingTechImg from '../../../resources/images/projects_images/low/rudling_tech1.jpg';
import ProjectCard from "./ProjectCard/ProjectCard";

import MultipleChoiceButtonPrimary from "../../common/Buttons/MultipleChoiceButtonPrimary/MultipleChoiceButtonPrimary";
import MultipleChoiceButtonSecondary from "../../common/Buttons/MultipleChoiceButtonSecondary/MultipleChoiceButtonSecondary";


interface typesDict {
    [key: string]: any;
}

interface Props {

}

const projects = [
    {
        name: "The Card Game",
        text: "The chat was used to see how our morals change with anonymity.",
        mainLink: "https://rrudling.github.io/thecardgame/",
        demoLink: "https://rrudling.github.io/thecardgame/",
        gitHubLink: "https://github.com/rrudling/thecardgame",
        image: chatImg1,
        technologies: ["css", "html", "js", "react", "firebase"],
        type: "School"
    },
    {
        name: "Chess App",
        text: "This chess application was developed as a project in a Java course.",
        mainLink: "https://github.com/rrudling/java-chess",
        demoLink: undefined,
        gitHubLink: "https://github.com/rrudling/java-chess",
        image: chessImg,
        technologies: ["java"],
        type: "School"
    },
    {
        name: "Learn AI",
        text: "Interactive website to ease the learning of AI concepts for other students.",
        mainLink: "https://rudling.tech/hmm/forwardAlgorithm",
        demoLink: "https://rudling.tech/hmm/forwardAlgorithm",
        gitHubLink: "https://github.com/rrudling/Learn-AI",
        image: learnAiImg,
        technologies: ["sass", "html", "js", "react", "firebase"],
        type: "Personal"
    },
    {
        name: "Leasrn AI",
        text: "Interactive website to ease the learning of AI concepts for other students.",
        mainLink: "https://rudling.tech/hmm/forwardAlgorithm",
        demoLink: "https://rudling.tech/hmm/forwardAlgorithm",
        gitHubLink: "https://github.com/rrudling/Learn-AI",
        image: learnAiImg,
        technologies: ["sass", "html", "js", "react", "firebase"],
        type: "Personal"
    },
    {
        name: "Learasn AI",
        text: "Interactive website to ease the learning of AI concepts for other students.",
        mainLink: "https://rudling.tech/hmm/forwardAlgorithm",
        demoLink: "https://rudling.tech/hmm/forwardAlgorithm",
        gitHubLink: "https://github.com/rrudling/Learn-AI",
        image: learnAiImg,
        technologies: ["sass", "html", "js", "react", "firebase"],
        type: "Personal"
    },
    {
        name: "Chapter Website",
        text: "Worked mostly on the document page and on the event page.",
        mainLink: "https://www.medieteknik.com/documents",
        demoLink: "https://www.medieteknik.com/documents",
        gitHubLink: "https://github.com/medieteknik-kth/medieteknik.com",
        image: medieteknikImg1,
        technologies: ["sass", "html", "js", "react"],
        type: "Professional"
    },
    {
        name: "RL lab",
        text: "Use Python to further develop a lab exercise regarding reinforcement learning for master students.",
        mainLink: "https://kth.kattis.com/problems/kth.ai.rl1",
        demoLink: "https://kth.kattis.com/problems/kth.ai.rl1",
        gitHubLink: undefined,
        image: rlImg,
        technologies: ["python", "docker"],
        type: "Professional"
    },
    {
        name: "SwiftWriter",
        text: "An application made to helper people type faster.",
        mainLink: "https://swiftwriter.web.app/",
        demoLink: "https://swiftwriter.web.app/",
        gitHubLink: "https://github.com/rrudling/swift-writer",
        image: swiftWriterImg,
        technologies: ["sass", "html", "js", "react", "firebase"],
        type: "Personal"
    },
    {
        name: "Rudling Tech",
        text: "My personal website.",
        mainLink: "https://rudling.tech",
        demoLink: "https://rudling.tech",
        gitHubLink: "https://github.com/rrudling/rudling-tech",
        image: rudlingTechImg,
        technologies: ["sass", "html", "ts", "react", "firebase"],
        type: "Personal"
    }
]

const PortfolioPage: React.FC<Props> = () => {
    // TODO: Update project texts
    // TODO: Change how project cards look on mobile

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
    }

    const getNewProjectsToShow = (newCurrentProject : string, _selectedProjectType=selectedProjectType, setWithIdx=false) => {
        let tempProjectsToShow : Array<typesDict> = [],
            projectIdx = 0;

        projects.forEach(project => {
            if (project.type === _selectedProjectType) {
                let optionObject : typesDict = {};
                optionObject["type"] = project.name;
                if (setWithIdx) {
                    optionObject["isSelected"] = projectIdx === 0;
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
    const [projectsToShow, setProjectsToShow] = useState<Array<typesDict>>(getNewProjectsToShow("Learn AI"));
    const [hideMobileProjectsMenu, setHideMobileProjectsMenu] = useState<boolean>(false);

    window.addEventListener("resize", () => {
        setShowAllDetails(window.innerWidth < 535);
    })

    return (
        <div className={classes.PortfolioPage}>
            <p>
                On this page you will find a selection
                of projects that I have been working
                on during my years as a developer.
            </p>
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
                            showAllDetails = {showAllDetails}
                        />
                    ))
                }
            </div>

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

            </div>
        </div>
    )
}

export default PortfolioPage;