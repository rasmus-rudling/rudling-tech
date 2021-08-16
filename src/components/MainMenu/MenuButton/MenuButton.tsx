import React from "react";
import classes from "./menuButton.module.scss";
import { useHistory } from "react-router-dom";
import { useLanguage } from "../../../contexts/LanguageContext";

interface Props {
	pageAddress: string;
	text: string;
	goToAddress: (pageAddress: string) => void;
	inModalMenu?: Boolean;
}

const MenuButton: React.FC<Props> = ({
	pageAddress,
	text,
	goToAddress,
	inModalMenu = false,
}) => {
	const language = useLanguage();

	return (
		<button
			className={
				!inModalMenu ? classes.MenuButton : classes.ModalMenuButton
			}
			onClick={() => goToAddress(pageAddress)}
		>
			{language === "sv" && text === "Home" ? "Hem" : text}
		</button>
	);
};

export default MenuButton;
