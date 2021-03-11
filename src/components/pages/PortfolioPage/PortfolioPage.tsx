import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
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

import firebaseIcon from '../../../resources/icons/firebase.svg';
import cssIcon from '../../../resources/icons/css3.svg';
import htmlIcon from '../../../resources/icons/html5.svg';
import javascriptIcon from '../../../resources/icons/javascript.svg';
import typescriptIcon from '../../../resources/icons/typescript.svg';
import sassIcon from '../../../resources/icons/sass.svg';
import reactIcon from '../../../resources/icons/react.svg';
import javaIcon from '../../../resources/icons/java.svg';
import pythonIcon from '../../../resources/icons/python.svg';
import dockerIcon from '../../../resources/icons/docker.svg';

import ThreeDimButton from "../../common/Buttons/ThreeDimButton/ThreeDimButton";

import ProjectCard from "./ProjectCard/ProjectCard";


import MultipleChoiceButtonPrimary from "../../common/Buttons/MultipleChoiceButtonPrimary/MultipleChoiceButtonPrimary";
import MultipleChoiceButtonSecondary from "../../common/Buttons/MultipleChoiceButtonSecondary/MultipleChoiceButtonSecondary";


interface typesDict {
    [key: string]: any;
}

interface Project {
    name: string,
    text: string,
    textLong: string,
    bullets: Array<string>,
    mainLink: string,
    demoLink: string | undefined,
    gitHubLink: string | undefined,
    image: string,
    technologies: Array<string>,
    type: string
}

interface Projects {
    [key: string]: Project
}

interface Technology {
    "icon": string,
    "tooltipText": string,
    "tooltipLink": string
}

interface TechnologiesInfo {
    [key: string]: Technology
}

const technologiesInfo : TechnologiesInfo = {
    "Firebase": {
        "icon": firebaseIcon,
        "tooltipText": "Learn more about Firebase",
        "tooltipLink": "https://en.wikipedia.org/wiki/Firebase"
    },
    "CSS": {
        "icon": cssIcon,
        "tooltipText": "Learn more about CSS",
        "tooltipLink": "https://en.wikipedia.org/wiki/Cascading_Style_Sheets"
    },
    "HTML": {
        "icon": htmlIcon,
        "tooltipText": "Learn more about HTML",
        "tooltipLink": "https://en.wikipedia.org/wiki/HTML"
    },
    "JavaScript": {
        "icon": javascriptIcon,
        "tooltipText": "Learn more about Javascript",
        "tooltipLink": "https://en.wikipedia.org/wiki/Javascript"
    },
    "TypeScript": {
        "icon": typescriptIcon,
        "tooltipText": "Learn more about Typescript",
        "tooltipLink": "https://en.wikipedia.org/wiki/TypeScript"
    },
    "Sass": {
        "icon": sassIcon,
        "tooltipText": "Learn more about Sass",
        "tooltipLink": "https://en.wikipedia.org/wiki/Sass_(stylesheet_language)"
    },
    "ReactJS": {
        "icon": reactIcon,
        "tooltipText": "Learn more about React",
        "tooltipLink": "https://en.wikipedia.org/wiki/React_(JavaScript_library)"
    },
    "Java": {
        "icon": javaIcon,
        "tooltipText": "Learn more about Java",
        "tooltipLink": "https://en.wikipedia.org/wiki/Java_(programming_language)"
    },
    "Python": {
        "icon": pythonIcon,
        "tooltipText": "Learn more about Python",
        "tooltipLink": "https://en.wikipedia.org/wiki/Python_(programming_language)"
    },
    "Docker": {
        "icon": dockerIcon,
        "tooltipText": "Learn more about Docker",
        "tooltipLink": "https://en.wikipedia.org/wiki/Docker_(software)"
    }
}

const projects : Projects = {
    "The Card Game": {
        name: "The Card Game",
        text: "The chat was used to see how our morals change with anonymity.",
        textLong: "",
        bullets: ["Fact #1", "Fact #2", "Fact #3"],
        mainLink: "https://rrudling.github.io/thecardgame/",
        demoLink: "https://rrudling.github.io/thecardgame/",
        gitHubLink: "https://github.com/rrudling/thecardgame",
        image: chatImg1,
        technologies: ["CSS", "HTML", "JavaScript", "ReactJS", "Firebase"],
        type: "School"
    },
    "Chess App": {
        name: "Chess App",
        text: "This chess application was developed as a project in a Java course.",
        textLong: "",
        bullets: ["Fact #1", "Fact #2", "Fact #3"],
        mainLink: "https://github.com/rrudling/java-chess",
        demoLink: undefined,
        gitHubLink: "https://github.com/rrudling/java-chess",
        image: chessImg,
        technologies: ["Java"],
        type: "School"
    },
    "Learn AI": {
        name: "Learn AI",
        text: "Interactive website to ease the learning of AI concepts for other students.",
        textLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis ac lacus sodales sagittis. In semper nulla dapibus, venenatis eros sed, pellentesque augue. Nam sagittis nisi id nisl blandit, egestas sagittis leo pellentesque. Aenean ac lorem quis neque sagittis faucibus sed eget risus. Aenean nec turpis massa. Sed in arcu enim. Aenean sollicitudin rhoncus sem, ultrices eleifend mi molestie ut. ",
        bullets: ["Fact #1", "Fact #2", "Fact #3"],
        mainLink: "https://rudling.tech/hmm/forwardAlgorithm",
        demoLink: "https://rudling.tech/hmm/forwardAlgorithm",
        gitHubLink: "https://github.com/rrudling/Learn-AI",
        image: learnAiImg,
        technologies: ["Sass", "HTML", "JavaScript", "ReactJS", "Firebase"],
        type: "Personal"
    },
    "Chapter Website": {
        name: "Chapter Website",
        text: "Worked mostly on the document page and on the event page.",
        textLong: "",
        bullets: ["Fact #1", "Fact #2", "Fact #3"],
        mainLink: "https://www.medieteknik.com/documents",
        demoLink: "https://www.medieteknik.com/documents",
        gitHubLink: "https://github.com/medieteknik-kth/medieteknik.com",
        image: medieteknikImg1,
        technologies: ["Sass", "HTML", "JavaScript", "ReactJS"],
        type: "Professional"
    },
    "RL lab": {
        name: "RL lab",
        text: "Use Python to further develop a lab exercise regarding reinforcement learning for master students.",
        textLong: "",
        bullets: ["Fact #1", "Fact #2", "Fact #3"],
        mainLink: "https://kth.kattis.com/problems/kth.ai.rl1",
        demoLink: "https://kth.kattis.com/problems/kth.ai.rl1",
        gitHubLink: undefined,
        image: rlImg,
        technologies: ["Python", "Docker"],
        type: "Professional"
    },
    "SwiftWriter": {
        name: "SwiftWriter",
        text: "An application made to helper people type faster.",
        textLong: "",
        bullets: ["Fact #1", "Fact #2", "Fact #3"],
        mainLink: "https://swiftwriter.web.app/",
        demoLink: "https://swiftwriter.web.app/",
        gitHubLink: "https://github.com/rrudling/swift-writer",
        image: swiftWriterImg,
        technologies: ["Sass", "HTML", "JavaScript", "ReactJS", "Firebase"],
        type: "Personal"
    },
    "Rudling Tech": {
        name: "Rudling Tech",
        text: "My personal website.",
        textLong: "",
        bullets: ["Fact #1", "Fact #2", "Fact #3"],
        mainLink: "https://rudling.tech",
        demoLink: "https://rudling.tech",
        gitHubLink: "https://github.com/rrudling/rudling-tech",
        image: rudlingTechImg,
        technologies: ["Sass", "HTML", "TypeScript", "ReactJS", "Firebase"],
        type: "Personal"
    }
}

const PortfolioPage: React.FC = () => {
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

    const history = useHistory();

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
                    Object.keys(projects).map(projectKey => {
                        let project = projects[projectKey];
                        return (
                            <ProjectCard
                                name={project.name}
                                text={project.text}
                                demoLink={project.demoLink}
                                gitHubLink={project.gitHubLink}
                                mainLink={project.mainLink}
                                image={project.image}
                                technologies={project.technologies}
                                showAllDetails={showAllDetails}
                                technologiesInfo = {technologiesInfo}
                            />
                        )
                    })
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

                <div className={classes.projectInfoContainer}>
                    <p>{selectedProject.textLong}</p>
                    <ul>
                        {selectedProject.bullets.map(bullet => (
                            <li>{bullet}</li>
                        ))}
                    </ul>

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

                    <div className={classes.projectImageContainer}>
                        <img src={selectedProject.image}/>
                    </div>

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

                    <div className={classes.learnMoreButtonContainer}>
                        <ThreeDimButton
                            text="Learn more"
                            onClickHandler={() => history.push("/")}
                            color = "gray"
                        />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default PortfolioPage;