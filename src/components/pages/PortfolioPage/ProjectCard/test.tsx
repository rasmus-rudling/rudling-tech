import React, { useState } from 'react';

interface Props {
    name: string,
    age: number | string,
    image?: string
}

const TestComponent : React.FC<Props> = ({name, age, image}) => {
    const [ettState, setEttState] = useState<string>(false);

    return (
        <div>

        </div>
    )
}

export default TestComponent;


<div>
    <TestComponent 
        name = "Rasmus"
        age = "23"
        nickname = "Razz"
    />
</div>