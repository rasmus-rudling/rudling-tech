import React from 'react';

interface Props {
    iconColor: string,
    iconWidth: string
}

const MailIcon : React.FC<Props> = ({iconColor, iconWidth}) => {
    return (
        <svg 
            version="1.1" 
            x="0px" 
            y="0px"
            viewBox="0 0 512 352" 
            style = {{
                "fill": iconColor,
                "width": iconWidth
            }}
        >
            <g>
	<g>
		<g>
			<polygon points="339.4,178.6 512,287.7 512,64.9 			"/>
		</g>
	</g>
	<g>
		<g>
			<polygon points="0,64.9 0,287.7 172.6,178.6 			"/>
		</g>
	</g>
	<g>
		<g>
			<path d="M480,0H32C16,0,3.4,11.9,1,27.2l255,168l255-168C508.6,11.9,496,0,480,0z"/>
		</g>
	</g>
	<g>
		<g>
			<path d="M310.1,198l-45.3,29.8c-2.7,1.8-5.7,2.6-8.8,2.6s-6.1-0.9-8.8-2.6l-45.3-29.9L1,325c2.5,15.2,15.1,27,31,27
				h448c15.9,0,28.5-11.8,31-27L310.1,198z"/>
		</g>
	</g>
</g>
        </svg>
    )
}

export default MailIcon;