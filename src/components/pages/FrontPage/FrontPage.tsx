import React, { useRef } from 'react';
import classes from './frontPage.module.scss';
import {Link} from "react-router-dom";

import ImageAnimation from './ImageAnimation/ImageAnimation';

import SocialLink from '../../common/SocialLink/SocialLink';


const FrontPage : React.FC = () => {
    const mailAddressRef = useRef(null);

    return (
        <div className={classes.FrontPage}>
            <ImageAnimation />
            
            <div className={classes.socialContainer}>
                <div className={classes.startText}>
                    <span>Hi and welcome!</span>
                    <br />
                    My name is Rasmus Rudling and I'm in the penultimate
                    year of my degree in Master of Science in Engineering at
                    KTH Royal Institute of Technology.
                    I'm currently studying a <a 
                        target="_blank"
                        href="https://www.kth.se/en/studies/master/computer-science" 
                        className="linkStyle"
                    >
                        master in Computer Science
                    </a> where I've specialized to learn about <a 
                        target="_blank"
                        href="https://www.kth.se/student/kurser/program/TCSCM/20202/inriktningar?l=en" 
                        className="linkStyle"
                    >
                        cognitive systems
                    </a>. 
                    
                    On this website
                    you'll find blog posts and tutorials about concepts
                    I'm interested in. You can also find my previous work
                    in my portfolio. I hope you enjoy the visit!
                </div>


                <div className={classes.socialLinks}>
                    <SocialLink 
                        socialIcon = "github"
                        text="github.com/rrudling"
                        linkAction = "visit"
                        onClickHandler = {() => {
                            window.open('https://www.github.com/rrudling', '_blank');
                        }}
                    />

                    <SocialLink 
                        socialIcon = "linkedin"
                        text="linkedin.com/in/rrudling"
                        extraStyle = {{
                            "marginTop": "20px",
                        }}
                        linkAction = "visit"
                        onClickHandler = {() => {
                            window.open('https://www.linkedin.com/in/rrudling', '_blank');
                        }}
                    />

                    <SocialLink 
                        socialIcon = "mail"
                        text="rasmusrudling@gmail.com"
                        extraStyle = {{
                            "marginTop": "20px",
                        }}
                        linkAction = "copy"
                    />

                    {/* TODO: Add resume as Social Link */}
                </div>
                
            </div>
            
        </div>
    )
}

export default FrontPage;