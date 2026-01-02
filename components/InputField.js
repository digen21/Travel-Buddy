import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../constants/colors";

const InputField = ({
  label,
  placeholder,
  value,
  onChangeText,
  icon,
  onIconPress,
  rightIcon,
  onRightIconPress,
  error,
  disabled = false,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize = "sentences",
  autoFocus = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const containerStyle = [
    styles.container,
    {
      backgroundColor: disabled
        ? COLORS.inputDisabledBackground
        : COLORS.inputBackground,
    },
    error ? styles.errorContainer : null,
    isFocused && !error ? styles.focusedContainer : null,
    disabled ? styles.disabledContainer : null,
  ];

  const textStyle = [
    styles.inputText,
    { color: disabled ? COLORS.textDisabled : COLORS.inputText },
    { fontFamily: "Inter" },
  ];

  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={containerStyle}>
        {icon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            activeOpacity={0.7} // Gives visual feedback
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} // Makes it easier to tap
          >
            {icon}
          </TouchableOpacity>
        )}
        <TextInput
          style={textStyle}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          editable={!disabled}
          autoFocus={autoFocus}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {rightIcon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            activeOpacity={0.7} // Gives visual feedback
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} // Makes it easier to tap
          >
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  container: {
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    shadowColor: "rgba(0,0,0,0.03)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
  },
  focusedContainer: {
    borderColor: COLORS.inputBorderFocused,
    borderWidth: 1.5,
  },
  errorContainer: {
    borderColor: COLORS.inputBorderError,
  },
  disabledContainer: {
    backgroundColor: COLORS.inputDisabledBackground,
  },
  icon: {
    marginRight: 10,
  },
  rightIcon: {
    marginLeft: 10,
  },
  inputText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "400",
    color: COLORS.inputText,
  },
  label: {
    marginTop: 10,
    marginBottom: 2,
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.textPrimary,
  },
  errorText: {
    marginTop: 4,
    fontSize: 12,
    color: COLORS.textError,
    fontFamily: "Inter",
  },
});

export default InputField;
