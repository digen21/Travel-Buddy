import { useFonts } from "expo-font";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { COLORS } from "../constants";

// Wrapper component that handles font loading and passes it to the splash screen component
const FontLoaderWrapper = ({ children }) => {
  // Load custom fonts once in the wrapper
  const [fontsLoaded] = useFonts({
    PlayfairDisplay: require("../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
    PlayfairDisplayItalic: require("../assets/fonts/PlayfairDisplay-Italic.ttf"),
    Inter: require("../assets/fonts/Inter-VariableFont_wght.ttf"),
    InterItalic: require("../assets/fonts/Inter-Italic.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.splashAccentFF} />
      </View>
    );
  }

  return <>{children}</>;
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
