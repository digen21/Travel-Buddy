import React from "react";
import { Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

// H1 (Screen Title) - Playfair Display, 26-28px, Weight: 700, Color: #1A1A1A
export const H1 = ({ children, style, ...props }) => (
  <Text style={[styles.h1, style]} {...props}>
    {children}
  </Text>
);

// H2 (Section Title) - Playfair Display, 20-22px, Weight: 600, Color: #1A1A1A
export const H2 = ({ children, style, ...props }) => (
  <Text style={[styles.h2, style]} {...props}>
    {children}
  </Text>
);

// H3 (Subsection) - Playfair Display, 18px, Weight: 600, Color: #2A2A2A
export const H3 = ({ children, style, ...props }) => (
  <Text style={[styles.h3, style]} {...props}>
    {children}
  </Text>
);

// P (Paragraph) - Inter, 14-15px, Weight: 400, Color: #4A4A4A
export const P = ({ children, style, ...props }) => (
  <Text style={[styles.p, style]} {...props}>
    {children}
  </Text>
);

// Caption / Helper Text - Inter, 12-13px, Weight: 400, Color: #7A7A7A
export const Caption = ({ children, style, ...props }) => (
  <Text style={[styles.caption, style]} {...props}>
    {children}
  </Text>
);

// Link Text - Inter, 14px, Weight: 500, Color: #DAA520
export const LinkText = ({ children, style, ...props }) => (
  <Text style={[styles.link, style]} {...props}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  h1: {
    fontFamily: "PlayfairDisplay",
    fontSize: 28, // Using 28px as upper bound
    color: COLORS.textPrimary,
    lineHeight: Math.floor(28 * 1.2), // Approximately 1.2 line height ratio
  },
  h2: {
    fontFamily: "PlayfairDisplay",
    fontSize: 22, // Using 22px as upper bound
    color: COLORS.textPrimary,
  },
  h3: {
    fontFamily: "PlayfairDisplay",
    fontSize: 18,
    color: "#2A2A2A", // Specific color for H3 as per spec
  },
  p: {
    fontFamily: "Inter",
    fontSize: 15, // Using 15px as upper bound
    fontWeight: "400",
    color: COLORS.textSecondary,
    lineHeight: Math.floor(15 * 1.5), // 1.5 line height ratio
  },
  caption: {
    fontFamily: "Inter",
    fontSize: 13, // Using 13px as upper bound
    fontWeight: "400",
    color: "#7A7A7A", // Specific color for caption as per spec
  },
  link: {
    fontFamily: "Inter",
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.accent, // Using the accent color as specified
    borderBottomColor: COLORS.accent,
    textDecorationLine: "underline",
  },
});

export default {
  H1,
  H2,
  H3,
  P,
  Caption,
  LinkText,
};
