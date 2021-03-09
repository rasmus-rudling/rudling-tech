import React, {useState} from 'react';
import classes from './imageAnimation.module.scss';

import rasmusImg from '../../../../resources/images/rasmus.png';
import rasmusLow1Img from '../../../../resources/images/rasmusLow1.png';
import sunImg from '../../../../resources/images/sun.svg';
import cloudImg from '../../../../resources/images/cloud.svg';
import asdas from '../../../../resources/gifs/spinner.gif';
import Spinner from '../../../common/Spinner/Spinner';

import codeBgImg from '../../../../resources/images/codeBgLow1.jpg';

import Wave from './Wave/Wave';


const ImageAnimation : React.FC = () => {
    const [showWaves, setShowWaves] = useState<boolean>(false);
    const [showRasmus, setShowRasmus] = useState<boolean>(false);
    const [showCodeBg, setShowCodeBg] = useState<boolean>(false);

    return (
        <>
            <img alt="" src={codeBgImg} style={{"display":"none"}} onLoad={() => {setShowCodeBg(true)}} />
            <div
                className={showCodeBg ? classes.ImageAnimation : [classes.ImageAnimation, classes.hideCodeBg].join(" ")}
            >
                <img
                    src = {rasmusLow1Img}
                    className={showRasmus ? classes.rasmusImg : [classes.rasmusImg, classes.hideWaves].join(" ")}
                    onLoad={() => {
                        setShowRasmus(true);

                        setTimeout(() => {
                            setShowWaves(true);
                        }, 200);

                    }}
                    alt={"Img of Rasmus"}
                />

                {/* <img src={sunImg} className={classes.sunImg} />

            <img
                src={cloudImg}
                className={classes.cloudStyle1}
            />

            <img
                src={cloudImg}
                className={classes.cloudStyle2}
            />

            <img
                src={cloudImg}
                className={classes.cloudStyle3}
            /> */}

                <div className={showWaves ? classes.wavesContainer : [classes.wavesContainer, classes.hideWaves].join(" ")}>
                    <Wave
                        color = "#fff"
                        waveClass = {classes.wave1}
                    />

                    <Wave
                        color = "#fff"
                        waveClass = {classes.wave2}
                    />

                    <Wave
                        color = "#fff"
                        waveClass = {classes.wave3}
                    />
                </div>

            </div>
        </>
    )
}

export default ImageAnimation;