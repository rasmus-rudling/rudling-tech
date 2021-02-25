import React, { useState } from 'react';
import classes from './mainMenu.module.scss';

import MenuButton from './MenuButton/MenuButton';

const MainMenu : React.FC = () => {
    const [hamburgerState, setHamburgerState] = useState("normal");

    return (
        <div className={classes.MainMenu}>
            <div className={classes.buttonsContainer}>
                <MenuButton 
                    pageAddress = "tech-blog"
                    text = "Tech blog"
                />

                <MenuButton 
                    pageAddress = "tutorials"
                    text = "Tutorials"
                />

                <MenuButton 
                    pageAddress = "portfolio"
                    text = "Portfolio"
                />
            </div>


            {/* TODO: Change menu based on window size */}
            <div 
                className={classes.hamburgerIconContainer}
                onClick = {() => {
                    if (hamburgerState === "normal") {
                        setHamburgerState("x");
                    } else {
                        setHamburgerState("normal");
                    }
                }}
            >
                <div 
                    className = {
                        hamburgerState === "normal" 
                            ? classes.normalHamburgerLine1
                            : classes.xHamburgerLine1
                        } 
                />

                <div 
                    className = {
                        hamburgerState === "normal" 
                            ? classes.normalHamburgerLine2
                            : classes.xHamburgerLine2
                        } 
                />
                
                <div 
                    className = {
                        hamburgerState === "normal" 
                            ? classes.normalHamburgerLine3
                            : classes.xHamburgerLine3
                        } 
                />
            </div>
        </div>
    )
}

export default MainMenu;