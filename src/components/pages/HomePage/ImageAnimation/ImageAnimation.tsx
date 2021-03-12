import React, {useState} from 'react';
import classes from './imageAnimation.module.scss';

import rasmusImg from '../../../../resources/images/rasmus.png';
import rasmusLow1Img from '../../../../resources/images/rasmusLow1.png';
// import rasmusLow1Img from '../../../../resources/images/rasmusLow1Black.png';
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
                <div className={classes.overflowHider}>
                    <svg viewBox="0 0 100 34" width="800px">
                        <defs>
                            <mask id="mask" x="0" y="0" width="80" height="30">
                                <rect x="5" y="5" width="300" height="40" fill="#fff"/>
                                <circle cx="51" cy="19" r="12"/>
                            </mask>
                        </defs>
                        <rect x="0" y="0" width="200" height="50" mask="url(#mask)" fill="#f0f0f0"/>
                        {/*<rect x="0" y="0" width="200" height="50" mask="url(#mask)" fill="red"/>*/}
                    </svg>
                </div>

                <div className={classes.transparentCircle}/>

                <div className={showWaves ? classes.wavesContainer : [classes.wavesContainer, classes.hideWaves].join(" ")}>
                    <Wave
                        color = "#fff"
                        waveClass = {classes.wave2}
                    />

                    <Wave
                        color = "#fff"
                        waveClass = {classes.wave3}
                    />

                    <Wave
                        color = "#fff"
                        waveClass = {classes.wave1}
                    />
                </div>



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
            </div>
        </>
    )
}

export default ImageAnimation;