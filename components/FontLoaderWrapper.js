import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { COLORS } from "../constants/colors";
import SystemUIManager from "./SystemUIManager";

// Wrapper component that handles font loading and passes it to the child components
const FontLoaderWrapper = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          PlayfairDisplay: require("../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
          PlayfairDisplayItalic: require("../assets/fonts/PlayfairDisplay-Italic.ttf"),
          PlayfairDisplayBold: require("../assets/fonts/playfair-display-bold.ttf"),
          Inter: require("../assets/fonts/Inter-VariableFont_wght.ttf"),
          InterItalic: require("../assets/fonts/Inter-Italic.ttf"),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts:", error);
      }
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <>
        <SystemUIManager backgroundColor={COLORS.splashBackground} />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.splashAccent} />
        </View>
      </>
    );
  }

  return (
    <>
      <SystemUIManager backgroundColor={COLORS.background} />
      {children}
    </>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.splashBackground, // Cream background
  },
});

export default FontLoaderWrapper;
