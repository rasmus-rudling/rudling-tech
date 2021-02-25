import React from 'react';

interface Props {
    iconColor: string,
    iconWidth: string
}

const CheckIcon : React.FC<Props> = ({iconColor, iconWidth}) => {
    return (
        <svg 
            version="1.1" 
            x="0px" 
            y="0px"
            viewBox="0 0 405.3 294.9" 
            style = {{
                "fill": iconColor,
                "width": iconWidth
            }}
        >
            <g>
                <path d="M393.4,69.2L179.6,283c-15.8,15.8-41.5,15.8-57.4,0L11.9,172.6c-15.8-15.8-15.8-41.5,0-57.4c15.8-15.8,41.5-15.8,57.4,0
                    l81.7,81.7L336,11.9c15.8-15.8,41.5-15.8,57.4,0C409.2,27.7,409.2,53.4,393.4,69.2z"/>
            </g>
        </svg>
    )
}

export default CheckIcon;