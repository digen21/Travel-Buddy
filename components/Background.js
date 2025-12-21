import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

// Since we don't have the actual 3D box PNG asset,
// I'm implementing the background with the specified base color
// In a real implementation, you would add the transparent 3D box PNG as a background image
const Background = ({ children, style, ...props }) => {
  return (
    <View style={[styles.container, style]} {...props}>
      {/* Content goes here */}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background, // Base color as specified
    // For a real implementation with the PNG asset:
    // backgroundImage: 'url(../assets/transparent_box.png)', // Your 3D box PNG
    // backgroundRepeat: 'repeat', // To tile the pattern
    // backgroundOpacity: 0.08, // 8% opacity as specified (between 6-10%)
  },
});

export default Background;
