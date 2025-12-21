import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants/colors";

const PrimaryButton = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  style,
}) => {
  const getButtonContent = () => {
    if (loading) {
      return <ActivityIndicator size="small" color={COLORS.buttonText} />;
    }

    return <Text style={styles.text}>{title}</Text>;
  };

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.85}
    >
      {disabled ? (
        <View style={[styles.button, styles.disabledButton]}>
          <Text style={styles.disabledText}>{title}</Text>
        </View>
      ) : (
        <LinearGradient
          colors={[COLORS.buttonGradientStart, COLORS.buttonGradientEnd]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.button}
        >
          {getButtonContent()}
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 14,
    overflow: "hidden",
    borderColor: COLORS.inputBorder,
    // shadowColor: COLORS.buttonGradientEnd,
    // shadowOffset: {
    //   width: 0,
    //   height: 6,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 12,
    // elevation: 8,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: COLORS.buttonDisabled,
  },
  text: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.buttonText,
    letterSpacing: 0.3,
    textAlign: "center",
  },
  disabledText: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.buttonTextDisabled,
    letterSpacing: 0.3,
    textAlign: "center",
  },
});

export default PrimaryButton;
