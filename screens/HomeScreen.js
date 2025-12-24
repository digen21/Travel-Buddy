import { StyleSheet, Text, View } from "react-native";
import Background from "../components/Background";
import { P } from "../components/Typography";
import { COLORS } from "../constants/colors";

const HomeScreen = () => {
  return (
    <Background style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Home Screen</Text>
        <P style={styles.subtitle}>Welcome to the home screen!</P>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontFamily: "PlayfairDisplayBold",
    color: COLORS.textPrimary,
    marginBottom: 16,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: "center",
    marginBottom: 32,
  },
  button: {
    backgroundColor: COLORS.buttonGradientStart,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: COLORS.buttonText,
    fontSize: 16,
    fontFamily: "Inter",
    fontWeight: "600",
  },
});

export default HomeScreen;
