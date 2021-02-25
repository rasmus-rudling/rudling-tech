import React from 'react';
import classes from './menuButton.module.scss';
import { useHistory } from "react-router-dom";

interface Props {
    pageAddress: string,
    text: string,
    inModalMenu?: Boolean
}

const MenuButton : React.FC<Props> = ({pageAddress, text, inModalMenu=false}) => {
    const history = useHistory();
    
    return (
        <button 
            className={!inModalMenu ? classes.MenuButton : classes.ModalMenuButton}
            onClick = {() => history.push(pageAddress)}    
        >
            {text}
        </button>
    )
}

export default MenuButton;