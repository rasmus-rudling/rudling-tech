import React from 'react';
import classes from './hamburgerButton.module.scss';

interface Props {
    showingModal: Boolean,
    onClick: () => void
}

const HamburgerButton : React.FC<Props> = ({showingModal, onClick}) => {
    return (
        <div 
            className={classes.hamburgerIconContainer}
            onClick = {onClick}
        >
            <div 
                className = {
                    !showingModal
                        ? classes.normalHamburgerLine1
                        : classes.xHamburgerLine1
                    } 
            />

            <div 
                className = {
                    !showingModal
                        ? classes.normalHamburgerLine2
                        : classes.xHamburgerLine2
                    } 
            />
            
            <div 
                className = {
                    !showingModal 
                        ? classes.normalHamburgerLine3
                        : classes.xHamburgerLine3
                    } 
            />
        </div>
    )
}

export default HamburgerButton;