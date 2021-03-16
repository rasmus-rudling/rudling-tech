import React from 'react';
import './imageCarouselImported.scss';
import { ProjectImage } from "../../pages/PortfolioPage/portfolioUtilities";

import ImageGallery from 'react-image-gallery';

interface Props {
    images: Array<ProjectImage>,
    extraClasses?: Array<string>,
    thumbnailPosition?: "bottom" | "top" | "right" | "left"
}

const ImageCarousel: React.FC<Props> = ({
    images,
    extraClasses,
    thumbnailPosition="bottom"
}) => {
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
                thumbnailPosition = {thumbnailPosition}
                slideDuration = {1000}
                slideInterval = {5000}
            />
        </div>
    )
}

export default ImageCarousel;