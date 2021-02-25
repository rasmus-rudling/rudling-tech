import React, { useState } from 'react';
import classes from './mainMenu.module.scss';

import MenuButton from './MenuButton/MenuButton';
import HamburgerButton from '../common/Buttons/HamburgerButton/HamburgerButton';

interface MenuButtonObject {
    pageAddress: string,
    text: string
}

interface Props {
    menuButtons: Array<MenuButtonObject>
}

const MainMenu : React.FC<Props> = ({menuButtons}) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className={showModal ? classes.MainMenu : [classes.MainMenu, classes.MainMenuBoxShadow].join(" ")}>
                <div className={classes.buttonsContainer}>
                    {
                        menuButtons.map(menuButton => (
                            <MenuButton 
                                key = {menuButton.pageAddress}
                                pageAddress = {menuButton.pageAddress}
                                text = {menuButton.text}
                            />
                        ))
                    }
                </div>

                <HamburgerButton 
                    showingModal = {showModal}
                    onClick = {() => setShowModal(!showModal)}
                />
            </div>
            <div className={showModal ? classes.showMenuModal : classes.hideMenuModal}>
                {
                    menuButtons.map(menuButton => (
                        <MenuButton 
                            key = {menuButton.pageAddress}
                            pageAddress = {menuButton.pageAddress}
                            text = {menuButton.text}
                            inModalMenu = {true}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default MainMenu;