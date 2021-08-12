import React, { useState } from "react";
import classes from "./mainMenu.module.scss";

import MenuButton from "./MenuButton/MenuButton";
import HamburgerButton from "../common/Buttons/HamburgerButton/HamburgerButton";
import { useHistory } from "react-router-dom";
import { useLanguage, useLanguageUpdate } from "../../contexts/LanguageContext";

interface MenuButtonObject {
	pageAddress: string;
	text: string;
}

interface Props {
	menuButtons: Array<MenuButtonObject>;
}

const MainMenu: React.FC<Props> = ({ menuButtons }) => {
	const history = useHistory();
	const language = useLanguage();
	const updateLanguage = useLanguageUpdate();

	const [showModal, setShowModal] = useState(false);

	const menuButtonClickHandler = (pageAddress: string) => {
		setShowModal(false);
		history.replace(pageAddress);
	};

	return (
		<>
			<div
				className={
					showModal
						? classes.MainMenu
						: [classes.MainMenu, classes.MainMenuBoxShadow].join(
								" "
						  )
				}
			>
				<button
					className={classes.languageBtn}
					onClick={() => updateLanguage()}
				>
					{language}
				</button>

				<div className={classes.buttonsContainer}>
					{menuButtons.map((menuButton) => (
						<MenuButton
							key={menuButton.pageAddress}
							pageAddress={menuButton.pageAddress}
							text={menuButton.text}
							goToAddress={menuButtonClickHandler}
						/>
					))}
				</div>

				<HamburgerButton
					showingModal={showModal}
					onClick={() => setShowModal(!showModal)}
				/>
			</div>

			<div
				className={
					showModal ? classes.showMenuModal : classes.hideMenuModal
				}
			>
				{menuButtons.map((menuButton) => (
					<MenuButton
						key={menuButton.pageAddress}
						pageAddress={menuButton.pageAddress}
						text={menuButton.text}
						inModalMenu={true}
						goToAddress={menuButtonClickHandler}
					/>
				))}
			</div>

			<div
				className={
					showModal
						? classes.modalBackground
						: [
								classes.modalBackground,
								classes.hideModalBackground,
						  ].join(" ")
				}
				onClick={() => setShowModal(false)}
			/>
		</>
	);
};

export default MainMenu;
