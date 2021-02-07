import React from 'react';

interface Props {
    iconColor: string,
    iconWidth: string
}

const LinkedInIcon : React.FC<Props> = ({iconColor, iconWidth}) => {
    return (
        <svg 
            version="1.1" 
            x="0px" 
            y="0px"
            viewBox="0 0 512 512" 
            style = {{
                "fill": iconColor,
                "width": iconWidth
            }}
        >
            <path  d="M511.9,512h0.1V324.2c0-91.9-19.8-162.6-127.2-162.6c-51.6,0-86.3,28.3-100.4,55.2h-1.5v-46.6H181.1V512h106
	V342.7c0-44.6,8.4-87.7,63.6-87.7c54.4,0,55.2,50.9,55.2,90.5V512H511.9z"/>
            <path d="M8.4,170.2h106.2V512H8.4V170.2z"/>
            <path d="M61.5,0C27.6,0,0,27.5,0,61.4c0,0,0,0.1,0,0.1c0,34,27.5,62.1,61.5,62.1S123,95.4,123,61.5
	C123,27.6,95.4,0,61.5,0z"/>
        </svg>
    )
}

export default LinkedInIcon;