// src/contexts/LanguageContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context for the language
const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('tamil'); // Default language: tamil

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'tamil' ? 'english' : 'tamil');
  };

  // Value object containing both state and functions
  const value = {
    language,
    toggleLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};