import { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../constants/colors";

const TimePicker = ({
  label,
  selectedTime,
  onTimeChange,
  style,
  inputContainerStyle,
  inputStyle,
}) => {
  const [time, setTime] = useState(selectedTime || new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleTimeChange = (event, selectedTime) => {
    setShowPicker(Platform.OS === "ios"); // Keep picker open on iOS, close on Android
    if (selectedTime) {
      setTime(selectedTime);
      onTimeChange?.(selectedTime);
    }
  };

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}

      {/* Time display field */}
      <TouchableOpacity
        style={[styles.inputContainer, inputContainerStyle]}
        onPress={togglePicker}
      >
        <Icon
          name="access-time"
          size={20}
          color={COLORS.inputIconColor}
          style={styles.icon}
        />
        <Text style={[styles.valueText, inputStyle]}>
          {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </Text>
        <Icon name="arrow-drop-down" size={24} color={COLORS.primary} />
      </TouchableOpacity>

      {/* Time Picker */}
      {showPicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleTimeChange}
          is24Hour={false}
        />
      )}
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
    alignItems: "center",
    borderColor: COLORS.inputBorder,
    borderWidth: 1,
    backgroundColor: COLORS.inputBackground,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  icon: {
    marginRight: 12,
  },
  valueText: {
    flex: 1,
    fontFamily: "PlayfairDisplay",
    fontSize: 16,
    color: COLORS.text,
  },
});

export default TimePicker;
