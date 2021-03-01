import React from 'react';
import classes from './copyButton.module.scss';

import CopyIcon from '../../icons/CopyIcon';
import CheckIcon from '../../icons/CheckIcon';


interface Props {
    onClickHandler: () => void,
    markCopySuccess: Boolean
}

const CopyButton: React.FC<Props> = ({onClickHandler, markCopySuccess}) => {
    return (
        <button
            className={markCopySuccess ? [classes.CopyButton, classes.copyButtonSuccess].join(" ") : classes.CopyButton}
                onClick={onClickHandler}
        >
            <div className={markCopySuccess ? [classes.copyIcon, classes.copyIconLeft].join(" ") : classes.copyIcon}>
                <CopyIcon iconColor="#fff" iconWidth="15px" />
            </div>

            <div className={!markCopySuccess ? [classes.checkIcon, classes.checkIconRight].join(" ") : classes.checkIcon}>
                <CheckIcon iconColor="#fff" iconWidth="15px" />
            </div>
        </button>
    )
}

export default CopyButton;