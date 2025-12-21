import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { useAppContext } from "../contexts/AppContext";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import SplashStyles from "../components/styles/SplashStyles";
import { COLORS } from "../constants/colors";

const Splash3 = () => {
  const { navigateToAuth } = useAppContext();

  const handleGetStarted = () => {
    navigateToAuth();
  };

  const handleLogin = () => {
    navigateToAuth();
  };

  return (
    <View style={SplashStyles.container}>
      {/* App Name */}
      <Text style={SplashStyles.appName}>India Unveiled</Text>

      {/* Horizontal Gold Divider */}
      <View style={SplashStyles.divider} />

      {/* Optional Tagline */}
      <Text style={SplashStyles.tagline}>
        Experience the richness of culture
      </Text>

      {/* Heritage Illustration using provided image */}
      <View style={SplashStyles.illustrationContainer}>
        <Image
          source={require("../assets/images/Splash-3.png")}
          style={SplashStyles.illustration}
          contentFit="contain"
          cachePolicy="memory-disk"
        />
      </View>

      {/* Buttons below the illustration */}
      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Get Started"
          onPress={handleGetStarted}
          style={styles.button}
        />
        <SecondaryButton
          title="Login"
          onPress={handleLogin}
          style={[styles.button, styles.secondaryButton]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 24,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "flex-end", // Align to the bottom
  },
  button: {
    width: "100%",
    marginBottom: 16,
  },
  secondaryButton: {
    backgroundColor: COLORS.surface,
  },
});

export default Splash3;
