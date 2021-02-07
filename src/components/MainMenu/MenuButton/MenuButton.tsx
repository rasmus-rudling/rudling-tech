import React from 'react';
import classes from './menuButton.module.scss';
import { useHistory } from "react-router-dom";

interface Props {
    pageAddress: string,
    text: string
}

const MenuButton : React.FC<Props> = ({pageAddress, text}) => {
    const history = useHistory();
    
    return (
        <button 
            className={classes.MenuButton}
            onClick = {() => history.push(pageAddress)}    
        >
            {text}
        </button>
    )
}

export default MenuButton;