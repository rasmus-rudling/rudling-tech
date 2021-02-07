import React, { useRef } from 'react';
import classes from './frontPage.module.scss';

import ImageAnimation from './ImageAnimation/ImageAnimation';

import SocialLink from '../../common/SocialLink/SocialLink';


const FrontPage : React.FC = () => {
    const mailAddressRef = useRef(null);

    return (
        <div className={classes.FrontPage}>
            <div className={classes.textAndImageContainer}>
                <ImageAnimation />
            </div>
            
            <div className={classes.socialContainer}>
                <div className={classes.startText}>
                    <span>Hi and welcome!</span>
                    <br />
                    My name is Rasmus Rudling. On this website
                    you'll find blog posts and tutorials about concepts
                    I'm interested in. You can also find my previous work
                    in my portfolio. I hope you enjoy the visit!
                </div>


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
            </div>
            
        </div>
    )
}

export default FrontPage;