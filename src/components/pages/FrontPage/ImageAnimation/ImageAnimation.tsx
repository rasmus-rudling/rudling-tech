import React from 'react';
import classes from './imageAnimation.module.scss';

import rasmusImg from '../../../../resources/images/rasmus.png';
import sunImg from '../../../../resources/images/sun.svg';
import cloudImg from '../../../../resources/images/cloud.svg';


import Wave from './Wave/Wave';


const ImageAnimation : React.FC = () => {
    return (
        <div className={classes.ImageAnimation}>
            <img src = {rasmusImg} className={classes.rasmusImg} />
            
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
    )
}

export default ImageAnimation;