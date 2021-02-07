import React from 'react';

interface Props {
    iconColor: string,
    iconWidth: string
}

const CopyIcon : React.FC<Props> = ({iconColor, iconWidth}) => {
    return (
        <svg 
            version="1.1" 
            x="0px" 
            y="0px"
            viewBox="0 0 405.3 469.3" 
            style = {{
                "fill": iconColor,
                "width": iconWidth
            }}
        >
            <g>
                <g>
                    <g>
                        <path d="M298.7,0h-256C19.1,0,0,19.1,0,42.7v298.7h42.7V42.7h256V0z"/>
                        <path d="M362.7,85.3H128c-23.6,0-42.7,19.1-42.7,42.7v298.7c0,23.6,19.1,42.7,42.7,42.7h234.7c23.6,0,42.7-19.1,42.7-42.7V128
                            C405.3,104.4,386.2,85.3,362.7,85.3z M362.7,426.7H128V128h234.7V426.7z"/>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default CopyIcon;