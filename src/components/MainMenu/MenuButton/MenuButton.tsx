import React from 'react';
import classes from './menuButton.module.scss';
import { useHistory } from "react-router-dom";

interface Props {
    pageAddress: string,
    text: string,
    goToAddress: (pageAddress: string) => void,
    inModalMenu?: Boolean
}

const MenuButton : React.FC<Props> = ({
pageAddress,
text,
goToAddress,
inModalMenu=false}) => {
    return (
        <button 
            className={!inModalMenu ? classes.MenuButton : classes.ModalMenuButton}
            onClick = {() => goToAddress(pageAddress)}
        >
            {text}
        </button>
    )
}

export default MenuButton;