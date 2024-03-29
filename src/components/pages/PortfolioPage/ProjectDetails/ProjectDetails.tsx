import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./projectDetails.module.scss";
import portfolioPageClasses from "../portfolioPage.module.scss";
import { useSelectedProject } from "../../../../contexts/SelectedProjectContext";

import BackButton from "../../../../resources/icons/leftArrow.svg";
import ImageCarousel from "../../../common/ImageCarousel/ImageCarousel";
import { technologiesInfo } from "../portfolioUtilities";
import ThreeDimButton from "../../../common/Buttons/ThreeDimButton/ThreeDimButton";
import { useLanguage } from "../../../../contexts/LanguageContext";

const ProjectDetails: React.FC = () => {
	const selectedProject = useSelectedProject();
	const history = useHistory();
	const language = useLanguage();

	const imageCarousel = (
		<>
			<div className={classes.bigScreenImageCarousel}>
				<ImageCarousel
					images={selectedProject.images}
					thumbnailPosition="right"
				/>
			</div>

			<div className={classes.smallScreenImageCarousel}>
				<ImageCarousel images={selectedProject.images} />
			</div>
		</>
	);

	return (
		<div className={classes.ProjectDetails}>
			<div
				className={classes.backButtonContainer}
				onClick={() => history.replace("/portfolio")}
			>
				<img src={BackButton} />
			</div>

			<div className={classes.header}>
				<h1>{selectedProject.name[language]}</h1>
			</div>

			<div className={classes.imageAndTechContainer}>
				<div className={classes.imageCarouselContainer}>
					{selectedProject.images.length === 1 ? (
						<img src={selectedProject.images[0].original} />
					) : (
						imageCarousel
					)}
				</div>

				<div className={classes.technologiesUsed}>
					{language === "en"
						? "Technologies that I used:"
						: "Teknologier som jag använt:"}
					<div
						className={
							portfolioPageClasses.technologiesUsedContainer
						}
					>
						{selectedProject.technologies.map((technology) => (
							<div className={portfolioPageClasses.technology}>
								<div
									className={
										portfolioPageClasses.imageContainer
									}
								>
									<img
										src={technologiesInfo[technology].icon}
										alt={""}
									/>
								</div>

								<div>{technology}</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className={classes.textAndButtonsContainer}>
				<div className={classes.textContainer}>
					<p
						dangerouslySetInnerHTML={{
							__html: selectedProject.textLong[language],
						}}
					/>

					<ul>
						{selectedProject.bullets.map((bullet) => (
							<li
								dangerouslySetInnerHTML={{
									__html: bullet[language],
								}}
							/>
						))}
					</ul>
				</div>

				<div className={classes.buttonsContainer}>
					{selectedProject.gitHubLink !== undefined ? (
						<ThreeDimButton
							text="GitHub"
							onClickHandler={() =>
								window.open(
									selectedProject.gitHubLink,
									"_blank"
								)
							}
							extraClasses={[portfolioPageClasses.gitHubButton]}
						/>
					) : null}

					{selectedProject.demoLink !== undefined ? (
						<ThreeDimButton
							text="Demo"
							onClickHandler={() =>
								window.open(selectedProject.demoLink, "_blank")
							}
							extraClasses={[portfolioPageClasses.demoButton]}
						/>
					) : null}
					{selectedProject.name.en === "The Card Game" ? (
						<ThreeDimButton
							text="Read the thesis"
							onClickHandler={() => {
								const link = document.createElement("a");
								link.href =
									process.env.PUBLIC_URL +
									"/documents/bachelors_thesis.pdf";
								link.target = "_blank";
								link.click();
							}}
							color="gray"
						/>
					) : null}

					{selectedProject.name.en === "Image Colorizer with DL" ? (
						<>
							<ThreeDimButton
								text={
									language === "en"
										? "Read our thesis"
										: "Läs vår uppsats"
								}
								onClickHandler={() => {
									const link = document.createElement("a");
									link.href =
										process.env.PUBLIC_URL +
										"/documents/colorizing_grayscale_images.pdf";
									link.target = "_blank";
									link.click();
								}}
								color="gray"
							/>
							<ThreeDimButton
								text={
									language === "en"
										? "Read the original paper"
										: "Läs orginalet"
								}
								onClickHandler={() => {
									const link = document.createElement("a");
									link.href =
										process.env.PUBLIC_URL +
										"/documents/colorful_image_colorization.pdf";
									link.target = "_blank";
									link.click();
								}}
								color="gray"
							/>
						</>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
