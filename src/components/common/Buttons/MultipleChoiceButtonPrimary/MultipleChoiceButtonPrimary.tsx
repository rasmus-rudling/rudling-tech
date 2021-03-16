import React from 'react';
import classes from './multipleChoiceButtonPrimary.module.scss';

interface optionsDict {
    [key: string]: any;
}

interface Props {
    options: Array<optionsDict>,
    changeOption: (newOption : string) => void,
    extraClass?: string
}

const MultipleChoiceButtonPrimary: React.FC<Props> = ({
    options,
    changeOption,
    extraClass
}) => {
    const numberOfOptions = options.length;
    let numberOfOptionsClass;

    if (numberOfOptions === 2) {
        numberOfOptionsClass = classes.twoOptions;
    } else if (numberOfOptions === 3) {
        numberOfOptionsClass = classes.threeOptions;
    } else if (numberOfOptions === 4) {
        numberOfOptionsClass = classes.fourOptions;
    } if (numberOfOptions === 5) {
        numberOfOptionsClass = classes.fiveOptions;
    }

    return (
        <div className={[classes.MultipleChoiceButton, extraClass, numberOfOptionsClass].join(" ")}>
            {
                options.map(option => (
                    <div
                        key={option.type}
                        onClick={() => changeOption(option.type)}
                        className = {option.isSelected ? classes.selectedOption : undefined}
                    >
                        {option.type}
                    </div>
                ))
            }
        </div>
    )
}

export default MultipleChoiceButtonPrimary;