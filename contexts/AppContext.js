import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create the context
const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState(null); // null = loading, 'splash', 'auth', 'main'

  useEffect(() => {
    const checkAppStatus = async () => {
      try {
        // Skipping splash screens for development - always go to auth flow
        // const hasSeenSplash = await AsyncStorage.getItem("hasSeenSplash");
        // const isAuthenticated = await AsyncStorage.getItem("isAuthenticated");

        // if (hasSeenSplash !== "true") {
        //   // User hasn't seen splash yet
        //   setAppState("splash");
        // } else
        // Skip splash screen and go directly to auth
        // const isAuthenticated = await AsyncStorage.getItem("isAuthenticated");

        // For now, always start with auth flow
        setAppState("auth");
      } catch (error) {
        console.error("Error reading app status from AsyncStorage:", error);
        // Default to showing splash screen if there's an error
        setAppState("splash");
      }
    };

    checkAppStatus();
  }, []);

  const navigateToAuth = async () => {
    try {
      // Mark that the user has seen the splash screen
      await AsyncStorage.setItem("hasSeenSplash", "true");
      // This function is called after authentication is complete
      await AsyncStorage.setItem("isAuthenticated", "true");
      setAppState("main"); // Show main app
    } catch (error) {
      console.error("Error saving app status to AsyncStorage:", error);
    }
  };

  const completeSplash = async () => {
    try {
      // Mark that the user has seen the splash screen but not authenticated yet
      await AsyncStorage.setItem("hasSeenSplash", "true");
      setAppState("auth"); // Show auth screens
    } catch (error) {
      console.error("Error saving splash status to AsyncStorage:", error);
    }
  };

  const value = {
    appState,
    navigateToAuth,
    completeSplash,
  };

  // Don't render anything until the app state is loaded
  if (appState === null) {
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
