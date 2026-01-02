import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../constants/colors";

const SelectDropdown = ({
  data = [],
  label,
  onSelect,
  defaultText = "Select option",
  style,
  inputContainerStyle,
  inputStyle,
}) => {
  const [selectedItem, setSelectedItem] = useState(data[0]?.value || null);

  // Find the selected object to display its label and icon
  const selectedNode =
    data.find((item) => item.value === selectedItem) || data[0];

  const handleSelect = (itemValue) => {
    setSelectedItem(itemValue);
    onSelect?.(itemValue);
  };

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      {/* 1. CUSTOM UI: This is what the user sees - wrapped in TouchableOpacity for immediate response */}
      <TouchableOpacity
        style={[styles.inputWithIcon, inputContainerStyle]}
        activeOpacity={0.8}
        onPress={() => {}}
      >
        {selectedNode?.icon && (
          <View style={styles.iconWrapper}>{selectedNode.icon}</View>
        )}

        <Text
          style={[
            styles.buttonText,
            !selectedItem && styles.placeholderText,
            inputStyle,
          ]}
          numberOfLines={1}
        >
          {selectedNode?.label || defaultText}
        </Text>

        <Icon name="arrow-drop-down" size={26} color={COLORS.primary} />
      </TouchableOpacity>

      {/* 2. PHANTOM PICKER: Invisible but sits on top of the UI */}
      <Picker
        mode="dropdown"
        prompt={defaultText}
        selectedValue={selectedItem}
        onValueChange={handleSelect}
        style={styles.pickerPhantom} // This makes it invisible
        dropdownIconColor="transparent" // Hides the extra arrow on Android
      >
        {data.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>
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
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: COLORS.inputBorder,
    borderWidth: 1,
    backgroundColor: COLORS.inputBackground,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    position: "relative", // Necessary for absolute child
    overflow: "hidden",
  },
  iconWrapper: {
    marginRight: 12,
  },
  buttonText: {
    flex: 1,
    fontFamily: "PlayfairDisplay",
    fontSize: 16,
    color: COLORS.primary,
  },
  placeholderText: {
    color: COLORS.textPlaceholder,
  },
  // THE MAGIC: Make the picker fill the box but stay hidden
  pickerPhantom: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    opacity: 0, // Makes it invisible
    backgroundColor: "transparent",
  },
});

export default SelectDropdown;
