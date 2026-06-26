import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => {
    const saved = localStorage.getItem('novarae_locale');
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('novarae_locale', locale);
    
    // Update HTML attributes dynamically
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    
    // Toggle body font classes if needed
    if (locale === 'ar') {
      document.body.style.fontFamily = "'Cairo', sans-serif";
    } else {
      document.body.style.fontFamily = "'Outfit', sans-serif";
    }
  }, [locale]);

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  // Helper to translate nested keys like "hero.title"
  const t = (keyPath) => {
    const keys = keyPath.split('.');
    let result = translations[locale];
    
    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        // Fallback to English if Arabic translation is missing
        let enResult = translations['en'];
        for (const enKey of keys) {
          if (enResult && enResult[enKey] !== undefined) {
            enResult = enResult[enKey];
          } else {
            enResult = null;
            break;
          }
        }
        return enResult || keyPath;
      }
    }
    
    return result;
  };

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
