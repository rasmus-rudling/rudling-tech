import React from 'react';
import classes from './threeDimButton.module.scss';

interface Props {
    text: string,
    onClickHandler: () => void,
    extraClasses: Array<string>,
    color?: string
}

const ThreeDimButton: React.FC<Props> = ({
    text,
    onClickHandler,
    extraClasses,
    color="blue"
}) => {
    let colorClass;

    if (color === "gray") {
        colorClass = classes.grayActionButton
    } else {
        colorClass = classes.blueActionButton;
    }

    return (
        <div
            className={[
                classes.ThreeDimButton,
                classes.actionButton,
                classes.shadow,
                classes.animate,
                colorClass,
                ...extraClasses
            ].join(" ")}
            onClick={onClickHandler}
        >
            {text}
        </div>
    )
}

export default ThreeDimButton;