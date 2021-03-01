import React from 'react';
import classes from './iconButton.module.scss';

interface Props {
    iconHeight: string,
    onClickHandler: () => void,
    extraClass?: string,
    children: React.ReactNode
}

const IconButton : React.FC<Props> = ({
iconHeight,
onClickHandler,
extraClass,
children
}) => {
    const iconClasses = [classes.IconButton];

    if (extraClass !== undefined) {
        iconClasses.push(extraClass);
    }

    return (
        <button 
            className={iconClasses.join(" ")}
            style = {{
                "height": iconHeight,
                "width": iconHeight
            }}
            onClick={onClickHandler}
        >
            {children}
        </button>
    )
}

export default IconButton;