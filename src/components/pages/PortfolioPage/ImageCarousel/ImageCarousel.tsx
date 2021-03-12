import React from 'react';
import './imageCarouselImported.scss';
import classes from './imageCarousel.module.scss';
import { ProjectImage } from "../portfolioUtilities";

import ImageGallery from 'react-image-gallery';

interface Props {
    images: Array<ProjectImage>,
    extraClasses?: Array<string>
}

const ImageCarousel: React.FC<Props> = ({images, extraClasses}) => {
    let carouselClasses : Array<string>;

    if (extraClasses === undefined) {
        carouselClasses = [];
    } else {
        carouselClasses = extraClasses;
    }
    return (
        <div className={carouselClasses.join(" ")}>
            <ImageGallery
                items={images}
                autoPlay = {true}
                showPlayButton = {images.length > 1}
                showThumbnails = {images.length > 1}
                slideDuration = {1000}
                slideInterval = {5000}
                additionalClass = {classes.customGallery}
            />
        </div>
    )
}

export default ImageCarousel;