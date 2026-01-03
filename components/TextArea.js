import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../constants/colors";

const TextArea = ({
  label,
  placeholder,
  value,
  onChangeText,
  icon,
  multiline = true,
  numberOfLines = 3,
  textAlignVertical = "top",
  containerStyle,
  inputContainerStyle,
  inputStyle,
  error,
  disabled = false,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}

      <View
        style={[
          styles.inputContainer,
          inputContainerStyle,
          error && styles.errorBorder,
        ]}
      >
        {icon ? (
          <Icon
            name={icon}
            size={20}
            color={disabled ? COLORS.textDisabled : COLORS.inputIconColor}
            style={styles.icon}
          />
        ) : null}

        <TextInput
          style={[
            styles.input,
            inputStyle,
            {
              height: numberOfLines * 20 + 16,
              paddingTop: textAlignVertical === "top" ? 8 : undefined,
            },
          ]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          multiline={multiline}
          numberOfLines={numberOfLines}
          textAlignVertical={textAlignVertical}
          editable={!disabled}
          placeholderTextColor={COLORS.textPlaceholder}
        />
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    marginTop: 10,
    marginBottom: 2,
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.textPrimary,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-start", // Align to top for multi-line inputs
    borderColor: COLORS.inputBorder,
    borderWidth: 1,
    backgroundColor: COLORS.inputBackground,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  icon: {
    marginRight: 12,
    marginTop: 8, // Align icon with text
  },
  input: {
    flex: 1,
    fontFamily: "PlayfairDisplay",
    fontSize: 16,
    color: COLORS.primary,
    padding: 0, // Remove default padding to maintain custom padding
  },
  errorBorder: {
    borderColor: COLORS.error,
  },
  errorText: {
    color: COLORS.error,
    fontSize: 12,
    marginTop: 4,
    marginLeft: 2,
  },
});

export default TextArea;
