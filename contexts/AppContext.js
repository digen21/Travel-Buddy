import React, { createContext, useContext, useState } from 'react';

// Create the context
const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [showAuthScreens, setShowAuthScreens] = useState(false);

  const navigateToAuth = () => {
    setShowAuthScreens(true);
  };

  const value = {
    showAuthScreens,
    navigateToAuth,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};