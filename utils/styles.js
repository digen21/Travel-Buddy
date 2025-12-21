import { StyleSheet } from "react-native";
import { COLORS, TYPOGRAPHY } from "../constants";

// Common styles that can be reused across the app
export const GLOBAL_STYLES = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  paddedContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },

  // Text styles aligned with typography system
  appNameText: {
    fontFamily: "PlayfairDisplay",
    fontSize: TYPOGRAPHY.appName.fontSize,
    fontWeight: TYPOGRAPHY.appName.fontWeight,
    color: TYPOGRAPHY.appName.color,
    lineHeight: TYPOGRAPHY.appName.lineHeight,
  },
  taglineText: {
    fontFamily: "Inter",
    fontSize: TYPOGRAPHY.tagline.fontSize,
    color: TYPOGRAPHY.tagline.color,
    lineHeight: TYPOGRAPHY.tagline.lineHeight,
    marginTop: 4,
  },
  heading1: {
    fontFamily: "PlayfairDisplay",
    fontSize: TYPOGRAPHY.h1.fontSize,
    fontWeight: TYPOGRAPHY.h1.fontWeight,
    color: TYPOGRAPHY.h1.color,
    lineHeight: TYPOGRAPHY.h1.lineHeight,
  },
  heading2: {
    fontFamily: "PlayfairDisplay",
    fontSize: TYPOGRAPHY.h2.fontSize,
    fontWeight: TYPOGRAPHY.h2.fontWeight,
    color: TYPOGRAPHY.h2.color,
    lineHeight: TYPOGRAPHY.h2.lineHeight,
  },
  bodyText: {
    fontFamily: "Inter",
    fontSize: TYPOGRAPHY.body.fontSize,
    fontWeight: TYPOGRAPHY.body.fontWeight,
    color: TYPOGRAPHY.body.color,
    lineHeight: TYPOGRAPHY.body.lineHeight,
  },

  // Button styles
  button: {
    backgroundColor: COLORS.accent,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "Inter",
    fontSize: TYPOGRAPHY.button.fontSize,
    fontWeight: TYPOGRAPHY.button.fontWeight,
    color: TYPOGRAPHY.button.color,
  },

  // Divider styles
  divider: {
    height: 1,
    backgroundColor: COLORS.divider,
    marginVertical: 16,
  },

  // Card styles
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: COLORS.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

// Helper function to merge global styles with custom styles
export const mergeStyles = (globalStyleKey, customStyles = {}) => {
  return [GLOBAL_STYLES[globalStyleKey], customStyles];
};
