import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";
import classes from "./multipleChoiceButtonPrimary.module.scss";

interface optionsDict {
	[key: string]: any;
}

interface Props {
	options: Array<optionsDict>;
	changeOption: (newOption: string) => void;
	extraClass?: string;
}

const MultipleChoiceButtonPrimary: React.FC<Props> = ({
	options,
	changeOption,
	extraClass,
}) => {
	let language = useLanguage();

	const numberOfOptions = options.length;
	let numberOfOptionsClass;

	if (numberOfOptions === 2) {
		numberOfOptionsClass = classes.twoOptions;
	} else if (numberOfOptions === 3) {
		numberOfOptionsClass = classes.threeOptions;
	} else if (numberOfOptions === 4) {
		numberOfOptionsClass = classes.fourOptions;
	}
	if (numberOfOptions === 5) {
		numberOfOptionsClass = classes.fiveOptions;
	}

	return (
		<div
			className={[
				classes.MultipleChoiceButton,
				extraClass,
				numberOfOptionsClass,
			].join(" ")}
		>
			{options.map((option) => (
				<div
					key={option.type}
					onClick={() => changeOption(option.type.en)}
					className={
						option.isSelected ? classes.selectedOption : undefined
					}
				>
					{option.type[language].split(" ")[0]}
				</div>
			))}
		</div>
	);
};

export default MultipleChoiceButtonPrimary;
