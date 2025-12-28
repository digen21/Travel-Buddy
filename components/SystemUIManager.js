import { useColorScheme } from "react-native";
import { COLORS } from "../constants/colors";

/**
 * SystemUIManager Component
 *
 * A component to manage the native system UI (status bar, navigation bar)
 * colors and appearance based on the app's theme and current screen context.
 */
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import * as SystemUI from "expo-system-ui";

const SystemUIManager = ({
  backgroundColor = COLORS.background,
  barStyle = "dark-content",
  animated = true,
}) => {
  const colorScheme = useColorScheme();

  useEffect(() => {
    // Set the background color behind the app
    SystemUI.setBackgroundColorAsync(backgroundColor, { animated });
  }, [backgroundColor, animated]);

  // Function to determine appropriate bar style based on background color
  const getBarStyleForBackground = (bgColor) => {
    // If background is dark, use light-content for status bar
    // If background is light, use dark-content for status bar
    // This is a simplified algorithm; for production you might want more sophisticated contrast detection
    const isDarkBackground = isColorDark(bgColor);
    return isDarkBackground ? "light-content" : "dark-content";
  };

  // Simplified function to determine if a color is dark
  // This is a basic implementation, you might want to use a more robust algorithm
  const isColorDark = (color) => {
    // Convert hex to RGB if needed
    if (color.startsWith("#")) {
      const hex = color.replace("#", "");
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);

      // Calculate perceived luminance
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      return luminance < 0.5;
    }

    // For other color formats (rgba, hsla, etc.), we'll default to light background for now
    // In a real implementation, you'd need to handle other color formats
    return false;
  };

  return (
    <StatusBar
      style={barStyle}
      backgroundColor={backgroundColor}
      animated={animated}
    />
  );
};

export default SystemUIManager;
