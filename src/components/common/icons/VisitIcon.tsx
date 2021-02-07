import React from 'react';

interface Props {
    iconColor: string,
    iconWidth: string
}

const VisitIcon : React.FC<Props> = ({iconColor, iconWidth}) => {
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
            <g>
                <path d="M488.7,0H302.5c-12.9,0-23.3,10.4-23.3,23.3s10.4,23.3,23.3,23.3h130L193,286.1c-9.1,9.1-9.1,23.8,0,32.9
                    c4.5,4.5,10.5,6.8,16.5,6.8c6,0,11.9-2.3,16.5-6.8L465.5,79.5v130c0,12.9,10.4,23.3,23.3,23.3s23.3-10.4,23.3-23.3V23.3
                    C512,10.4,501.6,0,488.7,0z"/>
            </g>
            <g>
                <path d="M395.6,232.7c-12.9,0-23.3,10.4-23.3,23.3v209.5H46.5V139.6H256c12.9,0,23.3-10.4,23.3-23.3S268.9,93.1,256,93.1H23.3
                    C10.4,93.1,0,103.5,0,116.4v372.4C0,501.6,10.4,512,23.3,512h372.4c12.9,0,23.3-10.4,23.3-23.3V256
                    C418.9,243.1,408.5,232.7,395.6,232.7z"/>
	        </g>
        </svg>
    )
}

export default VisitIcon;