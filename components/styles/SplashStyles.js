import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const SplashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.splashBackground,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  appName: {
    fontFamily: "PlayfairDisplay",
    fontSize: 30,
    fontWeight: "700",
    color: COLORS.splashAppName,
    textAlign: "center",
  },
  divider: {
    width: "20%",
    height: 1,
    backgroundColor: COLORS.splashAccent,
    marginVertical: 15,
  },
  tagline: {
    fontFamily: "Inter",
    fontSize: 14,
    color: COLORS.splashTagline,
    textAlign: "center",
  },
  illustrationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  illustration: {
    width: "80%",
    height: "100%",
    borderRadius: 10,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default SplashStyles;
