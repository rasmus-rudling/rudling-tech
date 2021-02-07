import React from 'react';
import classes from './mainMenu.module.scss';

import MenuButton from './MenuButton/MenuButton';

const MainMenu : React.FC = () => {
    
    return (
        <div className={classes.MainMenu}>
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
    )
}

export default MainMenu;