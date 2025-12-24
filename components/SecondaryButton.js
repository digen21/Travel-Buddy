import { Image } from "expo-image";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../constants/colors";

const SecondaryButton = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  style,
  imgIcon,
}) => {
  const getButtonContent = () => {
    if (loading) {
      return <ActivityIndicator size="small" color={COLORS.textPrimary} />;
    }

    return (
      <View style={styles.wrapper}>
        {imgIcon && <Image source={imgIcon} style={styles.icon} />}
        <Text style={[styles.text, disabled && styles.disabledText]}>
          {title}
        </Text>
      </View>
    );
  };

  const buttonStyle = [
    styles.container,
    disabled ? styles.disabledButton : null,
    style,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      <View style={styles.button}>{getButtonContent()}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 14,
    // backgroundColor: COLORS.surface, // White background
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.inputBorder, // Subtle border
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.05,
    // shadowRadius: 4,
    // elevation: 2,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: COLORS.inputDisabledBackground,
  },
  text: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.textPrimary, // Dark text
    letterSpacing: 0.3,
    textAlign: "center",
  },
  disabledText: {
    color: COLORS.textTertiary,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // THIS replaces textAlign:center
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
});

export default SecondaryButton;
