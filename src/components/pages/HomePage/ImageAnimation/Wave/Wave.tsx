import React from 'react';
import classes from './wave.module.scss';

interface Props {
    color: string
    waveClass?: string
}

const Wave : React.FC<Props> = ({color, waveClass}) => {
    return (
        <svg 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            x="0px" 
            y="0px" 
            viewBox="0 0 2560 343.5" 
            className = {waveClass}
            style = {{
                "height": "100px"
            }}
        >
            <defs>
            </defs>
            <path d="M1920,75.5c-347.1-170.3-640,0.7-640,0.7s-292.9,169.7-640-0.7S0,76.2,0,76.2v120.3v147h1280h1280v-147V76.2 C2560,76.2,2267.1,245.9,1920,75.5z"/>
        </svg>
    )
}

export default Wave;