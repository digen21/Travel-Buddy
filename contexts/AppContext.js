import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create the context
const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [showAuthScreens, setShowAuthScreens] = useState(null); // Set initial state to null to indicate loading

  // checking AsyncStorage for splash screen status on mount
  useEffect(() => {
    const checkSplashStatus = async () => {
      try {
        const hasSeenSplash = await AsyncStorage.getItem("hasSeenSplash");
        // If user has seen splash before, show auth screens; otherwise, show splash
        setShowAuthScreens(hasSeenSplash === "true");
      } catch (error) {
        console.error("Error reading splash status from AsyncStorage:", error);
        // Default to showing splash screen if there's an error
        setShowAuthScreens(false);
      }
    };

    checkSplashStatus();
  }, []);

  const navigateToAuth = async () => {
    try {
      // Mark that the user has seen the splash screen
      await AsyncStorage.setItem("hasSeenSplash", "true");
      setShowAuthScreens(true);
    } catch (error) {
      console.error("Error saving splash status to AsyncStorage:", error);
    }
  };

  const value = {
    showAuthScreens,
    navigateToAuth,
  };

  // Don't render anything until the splash status is loaded
  if (showAuthScreens === null) {
    return null; // Or return a loading component if you prefer
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
