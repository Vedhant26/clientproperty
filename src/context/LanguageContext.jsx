import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Always start with no language selected
  const [language, setLanguage] = useState(null);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = (key) => {
    if (!language) return key; // Safety fallback
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
