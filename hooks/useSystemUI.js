import { useCallback } from 'react';
import * as SystemUI from 'expo-system-ui';
import { COLORS } from '../constants/colors';

/**
 * Custom hook for controlling system UI elements
 * Provides functions to update background color, status bar style, etc.
 */
export const useSystemUI = () => {
  /**
   * Sets the background color behind the app
   * @param {string} backgroundColor - The background color to set
   * @param {Object} options - Options for the transition
   * @param {boolean} options.animated - Whether to animate the change (default: true)
   */
  const setSystemBackgroundColor = useCallback((backgroundColor = COLORS.background, { animated = true } = {}) => {
    SystemUI.setBackground(backgroundColor, { animated });
  }, []);

  /**
   * Sets immersive mode for full-screen experiences
   * Hides status bar and navigation bar to maximize screen space
   */
  const setImmersiveMode = useCallback(() => {
    // On Android, this would hide the status bar and navigation bar
    // On iOS, we'll just set a fully immersive background
    SystemUI.setBackground(COLORS.primary, { animated: true });
  }, []);

  /**
   * Exits immersive mode and returns to normal UI
   */
  const exitImmersiveMode = useCallback(() => {
    SystemUI.setBackground(COLORS.background, { animated: true });
  }, []);

  return {
    setSystemBackgroundColor,
    setImmersiveMode,
    exitImmersiveMode,
  };
};