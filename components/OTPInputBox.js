import React, { useState, useRef } from "react";
import { View, TextInput, StyleSheet, Animated } from "react-native";
import { COLORS } from "../constants/colors";

const OTPInputBox = ({ length = 4, onOTPChange }) => {
  const [otpValues, setOtpValues] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  const handleTextChange = (index, text) => {
    if (text.length > 1) {
      text = text.slice(-1);
    }

    const newOtpValues = [...otpValues];
    newOtpValues[index] = text;
    setOtpValues(newOtpValues);

    // Move to next input if text was entered and not the last box
    if (text && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    // Move to previous input if text was deleted and not the first box
    if (!text && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }

    // Notify parent component of OTP change
    if (onOTPChange) {
      onOTPChange(newOtpValues.join(""));
    }
  };

  const handleKeyPress = (index, event) => {
    if (
      event.nativeEvent.key === "Backspace" &&
      !otpValues[index] &&
      index > 0
    ) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {otpValues.map((value, index) => (
        <Animated.View
          key={index}
          style={[
            styles.box,
            {
              borderColor: value
                ? COLORS.otpInputActiveBorder
                : COLORS.otpInputBorder,
              borderWidth: value ? 2 : 1,
            },
          ]}
        >
          <TextInput
            ref={(ref) => (inputsRef.current[index] = ref)}
            style={styles.input}
            value={value}
            onChangeText={(text) => handleTextChange(index, text)}
            onKeyPress={(event) => handleKeyPress(index, event)}
            keyboardType="number-pad"
            maxLength={1}
            autoFocus={index === 0}
            cursorColor={COLORS.otpInputCursor}
          />
        </Animated.View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  box: {
    width: 52,
    height: 52,
    borderRadius: 12,
    backgroundColor: COLORS.otpInputBackground,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    fontSize: 20,
    fontWeight: "600",
    color: COLORS.otpInputText,
    fontFamily: "PlayfairDisplay",
    textAlign: "center",
    padding: 0,
    margin: 0,
    width: "100%",
    height: "100%",
  },
});

export default OTPInputBox;
