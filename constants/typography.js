import { COLORS } from "./colors";

// Typography constants for the app
export const TYPOGRAPHY = {
  // App name (based on splash screen spec)
  appName: {
    fontFamily: "PlayfairDisplay", // Will be loaded via expo-font
    fontSize: 30,
    fontWeight: "600", // Bold weight
    color: COLORS.splashAppName,
    lineHeight: 36, // Good for readability
  },

  // Tagline (based on splash screen spec)
  tagline: {
    fontFamily: "Inter", // Will be loaded via expo-font
    fontSize: 14, // Between 13-14px as specified
    color: COLORS.splashTagline,
    lineHeight: 20,
  },

  // Headings
  h1: {
    fontFamily: "PlayfairDisplay",
    fontSize: 32,
    fontWeight: "600",
    color: COLORS.textPrimary,
    lineHeight: 40,
  },
  h2: {
    fontFamily: "PlayfairDisplay",
    fontSize: 28,
    fontWeight: "600",
    color: COLORS.textPrimary,
    lineHeight: 36,
  },
  h3: {
    fontFamily: "PlayfairDisplay",
    fontSize: 24,
    fontWeight: "600",
    color: COLORS.textPrimary,
    lineHeight: 32,
  },
  h4: {
    fontFamily: "PlayfairDisplay",
    fontSize: 20,
    fontWeight: "600",
    color: COLORS.textPrimary,
    lineHeight: 28,
  },
  h5: {
    fontFamily: "PlayfairDisplay",
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.textPrimary,
    lineHeight: 26,
  },
  h6: {
    fontFamily: "PlayfairDisplay",
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.textPrimary,
    lineHeight: 24,
  },

  // Body text variations
  body: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "400",
    color: COLORS.textPrimary,
    lineHeight: 24,
  },
  bodyLarge: {
    fontFamily: "Inter",
    fontSize: 18,
    fontWeight: "400",
    color: COLORS.textPrimary,
    lineHeight: 26,
  },
  bodySmall: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "400",
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
  caption: {
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "400",
    color: COLORS.textSecondary,
    lineHeight: 16,
  },
  overline: {
    fontFamily: "Inter",
    fontSize: 10,
    fontWeight: "500",
    color: COLORS.textSecondary,
    lineHeight: 14,
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },

  // Button text styles
  button: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.textInverse, // Usually white on colored backgrounds
    lineHeight: 24,
  },
  buttonTextLarge: {
    fontFamily: "Inter",
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.textInverse,
    lineHeight: 28,
  },
  buttonTextSmall: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.textInverse,
    lineHeight: 20,
  },
};

// Helper function to get text style with additional overrides
export const getTextStyle = (styleName, additionalStyles = {}) => {
  return {
    ...TYPOGRAPHY[styleName],
    ...additionalStyles,
  };
};
