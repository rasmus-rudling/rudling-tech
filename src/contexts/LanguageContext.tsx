import React, { useState, useContext } from "react";

const LanguageContext = React.createContext<"en" | "sv">("en");
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
	let defaultLang: "sv" | "en" = "en";
	let initLang;

	let languageWasStoredInSessionStorage =
		sessionStorage.getItem("language") !== null;

	if (!languageWasStoredInSessionStorage) {
		sessionStorage.setItem("language", defaultLang);
	}

	initLang = sessionStorage.getItem("language");

	let enAsInitLang = initLang === "en";

	let initLanguage: "sv" | "en" = enAsInitLang ? "en" : "sv";

	const [language, setLanguage] = useState<"en" | "sv">(initLanguage);

	console.log(initLanguage);

	const changeLanguage = () => {
		let newLang: "sv" | "en" = language === "en" ? "sv" : "en";
		setLanguage(newLang);
		sessionStorage.setItem("language", newLang);
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
