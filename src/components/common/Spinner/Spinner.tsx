import React from 'react';
import classes from './spinner.module.scss';

interface Props {
    scale: number
}

const Spinner: React.FC<Props> = ({scale}) => {
    return (
        <div
            className={classes.SpinnerContainer}
            style = {{
                "transform": `scale(${scale})`
            }}
        >
            <div className={classes.spinner}>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Spinner;