import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";
import classes from "./multipleChoiceButtonSecondary.module.scss";

interface optionsDict {
	[key: string]: any;
}

interface Props {
	options: Array<optionsDict>;
	changeOption: (newOption: string) => void;
	extraClass?: string;
}

const MultipleChoiceButtonSecondary: React.FC<Props> = ({
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
	} else if (numberOfOptions >= 4) {
		numberOfOptionsClass = classes.fourPlusOptions;
	}

	return (
		<div
			className={[
				classes.MultipleChoiceButton,
				extraClass,
				numberOfOptionsClass,
			].join(" ")}
		>
			{options.map((option) => {
				return (
					<div
						onClick={() => changeOption(option.type.en)}
						className={
							option.isSelected
								? classes.selectedOption
								: undefined
						}
					>
						<mark>{option.type[language]}</mark>
					</div>
				);
			})}
		</div>
	);
};

export default MultipleChoiceButtonSecondary;
