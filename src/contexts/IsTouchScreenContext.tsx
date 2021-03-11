import React, { useContext, createContext } from 'react';

const IsTouchScreenContext = createContext(false);

export const useIsTouchScreen = () => {
    return useContext(IsTouchScreenContext);
}

interface Props {
    children: React.ReactNode
}

const LanguageProvider : React.FC<Props> = ({children}) => {
    const isTouchScreen = 'ontouchstart' in window;

    return (
        <IsTouchScreenContext.Provider value={isTouchScreen}>
            {children}
        </IsTouchScreenContext.Provider>
    )
}

export default LanguageProvider;