import React from 'react';
import classes from './frontPage.module.scss';

import ImageAnimation from './ImageAnimation/ImageAnimation';

const FrontPage : React.FC = () => {
    return (
        <div className={classes.FrontPage}>
            <ImageAnimation />
        </div>
    )
}

export default FrontPage;