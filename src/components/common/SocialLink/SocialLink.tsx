import React, { useState } from 'react';
import classes from './socialLink.module.scss';

import GithubIcon from '../../common/icons/GithubIcon';
import MailIcon from '../../common/icons/MailIcon';
import LinkedInIcon from '../../common/icons/LinkedInIcon';
import VisitIcon from '../icons/VisitIcon';
import CopyIcon from '../icons/CopyIcon';
import ResumeIcon from '../icons/ResumeIcon';
import DownloadFileIcon from '../icons/DownloadFileIcon';

import IconButton from '../Buttons/IconButton/IconButton';
import CheckIcon from '../icons/CheckIcon';
import CopyButton from "../Buttons/CopyButton/CopyButton";

interface Props {
    socialIcon: string,
    text: string,
    linkAction: string,
    onClickHandler?: () => void,
    extraStyle?: React.CSSProperties,
    secondIcon?: string
}

const selectElementText = (el : any) => {
    let range = document.createRange(); // create new range object
    range.selectNodeContents(el); // set range to encompass desired element text
    let selection = window.getSelection(); // get Selection object from currently user selected text

    if (selection !== null) {
        selection.removeAllRanges(); // unselect any user selected text (if any)
        selection.addRange(range); // add range to Selection object to select it
    }
}

const copySelectionText = () => {
    let copysuccess // var to check whether execCommand successfully executed
    try {
        copysuccess = document.execCommand("copy") // run command to copy selected text to clipboard
    } catch(e){
        copysuccess = false
    }
    return copysuccess
}


const SocialLink : React.FC<Props> = ({
    socialIcon, 
    text, 
    extraStyle, 
    linkAction, 
    onClickHandler, 
    secondIcon
}) => {
    const [iconExtraClass, setIconExtraClass] = useState<undefined | string>(undefined);
    
    let _socialIcon, 
        actionIcon,
        secondActionIcon,
        _onClickHandler, 
        socialIconWidth = "25px";
    
    if (socialIcon === "github") {
        _socialIcon = <GithubIcon iconColor="#fff" iconWidth={socialIconWidth} />
    } else if (socialIcon === "linkedin") {
        _socialIcon = <LinkedInIcon iconColor="#fff" iconWidth={socialIconWidth} />
    } else if (socialIcon === "mail") {
        _socialIcon = <MailIcon iconColor="#fff" iconWidth={socialIconWidth} />
    } else if (socialIcon === "resume") {
        _socialIcon = <ResumeIcon iconColor="#fff" iconWidth={socialIconWidth} />
    }

    if (linkAction === "visit") {
        actionIcon = (
            <VisitIcon 
                iconColor="#fff"
                iconWidth="15px"
            />
        );
    } else if (linkAction === "copy") {
        actionIcon = (
            <CopyIcon 
                iconColor="#fff"
                iconWidth="15px"
            />
        );
    } else if (linkAction === "download") {
        actionIcon = (
            <DownloadFileIcon 
                iconColor="#fff"
                iconWidth="15px"
            />
        );
    }

    if (secondIcon === "check") {
        secondActionIcon = (
            <CheckIcon 
                iconColor="#fff"
                iconWidth="15px"
            />
        );
    }

    if (onClickHandler === undefined) {
        _onClickHandler = () => {
            let textElement = document.getElementById(text) as HTMLElement;
            selectElementText(textElement);
            copySelectionText();
            setIconExtraClass(classes.iconClass);

            setTimeout(() => {
                let selection = window.getSelection();
                if (selection !== null) {
                    selection.removeAllRanges();
                }
                setIconExtraClass(undefined);
            }, 5000)

        }
    } else {
        _onClickHandler = onClickHandler;
    }

    return (
        <div 
            className={classes.SocialLink}
            style = {extraStyle}
        >
            <div 
                className={classes.iconContainer}
            >
                {_socialIcon}
            </div>
            <div className={classes.textContainer}>
                <div id={text}>{text}</div>
                {linkAction === "copy" ?
                    <CopyButton
                        onClickHandler = {_onClickHandler}
                        markCopySuccess = {iconExtraClass !== undefined}
                    /> :

                    <IconButton
                        iconHeight = "30px"
                        onClickHandler = {_onClickHandler}
                        extraClass = {iconExtraClass}
                    >
                        {actionIcon}
                    </IconButton>
                }
            </div>
        </div>
    )
}

export default SocialLink;