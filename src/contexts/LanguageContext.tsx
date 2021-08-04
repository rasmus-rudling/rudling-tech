import React, { useState, useContext } from "react";

const LanguageContext = React.createContext<string>("en");
const LanguageUpdateContext = React.createContext<Function>(() => null);

export const useLanguage = () => {
    return useContext(LanguageContext);
};

export const useLanguageUpdate = () => {
    return useContext(LanguageUpdateContext);
};

interface Props {
    children: React.ReactNode;
}

const LanguageProvider: React.FC<Props> = ({ children }) => {
    let initLang;

    if (sessionStorage.getItem("language") === null) {
        sessionStorage.setItem("language", "en");
        initLang = "en";
    } else {
        initLang = sessionStorage.getItem("language");
    }

    if (!initLang) {
        initLang = "en";
    }

    const [language, setLanguage] = useState<string>(initLang);

    const changeLanguage = (newLanguage: string) => {
        setLanguage(newLanguage);
        sessionStorage.setItem("language", newLanguage);
    };

    return (
        <LanguageContext.Provider value={language}>
            <LanguageUpdateContext.Provider value={changeLanguage}>
                {children}
            </LanguageUpdateContext.Provider>
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;
