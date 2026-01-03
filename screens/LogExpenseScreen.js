import { useState } from "react";
import {
  Alert,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import SelectDropdown from "../components/SelectDropdown";
import TextArea from "../components/TextArea";
import TimePicker from "../components/TimePicker";
import { Caption, H2 } from "../components/Typography";
import { COLORS } from "../constants/colors";

const LogExpenseBottomSheet = ({
  isVisible,
  onClose,
  initialBalance = 0,
  onLogExpense,
}) => {
  const [expenseAmount, setExpenseAmount] = useState("");
  const [place, setPlace] = useState("");
  const [time, setTime] = useState(new Date());
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  // Predefined categories
  const predefinedCategories = [
    {
      label: "Food & Dining",
      value: "Food & Dining",
      icon: (
        <Icon name="local-restaurant" size={20} color={COLORS.inputIconColor} />
      ),
    },
    {
      label: "Transportation",
      value: "Transportation",
      icon: (
        <Icon
          name="emoji-transportation"
          size={20}
          color={COLORS.inputIconColor}
        />
      ),
    },
    {
      label: "Accommodation",
      value: "Accommodation",
      icon: <Icon name="bed" size={20} color={COLORS.inputIconColor} />,
    },
    {
      label: "Entertainment",
      value: "Entertainment",
      icon: (
        <Icon name="local-movies" size={20} color={COLORS.inputIconColor} />
      ),
    },
    {
      label: "Shopping",
      value: "Shopping",
      icon: (
        <Icon name="shopping-cart" size={20} color={COLORS.inputIconColor} />
      ),
    },
    {
      label: "Healthcare",
      value: "Healthcare",
      icon: (
        <Icon name="local-hospital" size={20} color={COLORS.inputIconColor} />
      ),
    },
    {
      label: "Utilities",
      value: "Utilities",
      icon: <Icon name="lightbulb" size={20} color={COLORS.inputIconColor} />,
    },
    {
      label: "Other",
      value: "Other",
      icon: <Icon name="more-horiz" size={20} color={COLORS.inputIconColor} />,
    },
  ];

  // Calculate balance after deduction
  const numericExpenseAmount = parseFloat(expenseAmount) || 0;
  const balanceAfterDeduction = initialBalance - numericExpenseAmount;

  // Validation
  const validateForm = () => {
    const newErrors = {};

    if (!expenseAmount) {
      newErrors.expenseAmount = "Amount is required";
    } else if (numericExpenseAmount <= 0) {
      newErrors.expenseAmount = "Amount must be greater than 0";
    } else if (numericExpenseAmount > initialBalance) {
      newErrors.expenseAmount = "Expense exceeds wallet balance";
    }

    if (!category) {
      newErrors.category = "Category is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogExpense = () => {
    if (!validateForm()) {
      return; // Stop if validation fails
    }

    // Check if expense exceeds wallet balance
    if (balanceAfterDeduction < 0) {
      Alert.alert(
        "Insufficient Balance",
        `The expense amount exceeds your wallet balance of ₹${initialBalance.toLocaleString("en-IN")}. Would you like to proceed anyway?`,
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Proceed",
            onPress: () => {
              // Process the expense even if it results in negative balance
              processExpense();
            },
          },
        ]
      );
    } else {
      // Amount is within balance, process normally
      processExpense();
    }
  };

  const processExpense = () => {
    // Get the expense amount as a negative number (for deduction)
    const expenseAmountValue = -Math.abs(parseFloat(expenseAmount));

    // Calculate the new balance after deduction
    const newBalance = balanceAfterDeduction;

    // Call the onLogExpense callback to update the parent's state and navigate to success screen
    if (onLogExpense) {
      onLogExpense(expenseAmountValue, newBalance);
    }

    // Close the modal
    onClose();
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="none"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={StyleSheet.absoluteFill} onPress={onClose} />
        <View style={styles.bottomSheet}>
          {/* Drag Handle */}
          <View style={styles.dragHandle} />

          {/* Header */}
          <View style={styles.header}>
            <H2 style={styles.title}>Log Expense</H2>
            <TouchableOpacity onPress={onClose}>
              <Icon name="close" size={24} color={COLORS.text} />
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={styles.content}>
            {/* Balance Preview Section */}
            <View style={styles.balancePreviewContainer}>
              <View style={styles.balanceCard}>
                <View style={styles.balanceRow}>
                  <Icon
                    name="account-balance-wallet"
                    size={20}
                    color={COLORS.inputIconColor}
                  />
                  <Text style={styles.balanceAmount}>
                    ₹{initialBalance.toLocaleString("en-IN")}
                  </Text>
                </View>
                <Caption style={styles.balanceLabel}>CURRENT BALANCE</Caption>
              </View>

              <View style={styles.balanceCardAfter}>
                <View style={styles.balanceRow}>
                  <Icon
                    name="calculate"
                    size={20}
                    color={COLORS.inputIconColor}
                  />
                  <Text
                    style={[
                      styles.balanceAmount,
                      balanceAfterDeduction < 0 ? styles.negativeBalance : {},
                    ]}
                  >
                    ₹{Math.abs(balanceAfterDeduction).toLocaleString("en-IN")}
                    {balanceAfterDeduction < 0 ? " (-)" : ""}
                  </Text>
                </View>
                <Caption style={styles.balanceLabel}>AFTER DEDUCTION</Caption>
              </View>
            </View>

            {/* Expense Form Card */}
            <View style={styles.expenseFormCard}>
              {/* Amount Used Field */}
              <InputField
                label="AMOUNT USED"
                placeholder="0.00"
                value={expenseAmount}
                onChangeText={(text) => {
                  // Only allow numeric input
                  const numericValue = text.replace(/[^0-9.]/g, "");
                  setExpenseAmount(numericValue);
                }}
                icon={
                  <Icon
                    name="currency-rupee"
                    size={20}
                    color={COLORS.inputIconColor}
                  />
                }
                keyboardType="numeric"
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.inputText}
                error={errors.expenseAmount}
              />
              <Caption style={styles.amountHelperText}>
                *This amount will be deducted from the shared wallet.
              </Caption>

              {/* Place Field */}
              <InputField
                label="PLACE"
                placeholder="Where?"
                value={place}
                onChangeText={setPlace}
                icon={
                  <Icon name="place" size={20} color={COLORS.inputIconColor} />
                }
                iconSize={20}
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.inputText}
                containerStyle={styles.inputSpacing}
              />

              {/* Time and Category - In a row with spacing between them */}
              <TimePicker
                label="TIME"
                selectedTime={time}
                onTimeChange={setTime}
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.inputText}
                containerStyle={{ marginBottom: 0 }} // Remove default bottom margin
              />

              {/* Expense Type Field with Dropdown - No space from Time */}
              <View>
                <SelectDropdown
                  label="EXPENSE TYPE"
                  data={predefinedCategories}
                  onSelect={(value) => setCategory(value)}
                  defaultText="Select or enter custom category"
                  icon="category"
                  containerStyle={{ marginTop: 0, marginBottom: 12 }}
                  inputContainerStyle={styles.inputContainer}
                  inputStyle={styles.inputText}
                />
              </View>

              <View style={styles.errorAndHelperContainer}>
                {errors.category && (
                  <Caption style={styles.errorText}>{errors.category}</Caption>
                )}
                <Caption style={[styles.categoryHelperText, { marginTop: 4 }]}>
                  *Category selection required
                </Caption>
              </View>

              {/* Description Field */}
              <TextArea
                label="DESCRIPTION (OPTIONAL)"
                placeholder="Add details like 'Lunch at Fort Kochi'..."
                value={description}
                onChangeText={setDescription}
                icon="description"
                numberOfLines={3}
                textAlignVertical="top"
                containerStyle={styles.inputSpacing}
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.inputText}
              />
            </View>
          </ScrollView>

          {/* Primary Action Button */}
          <View style={styles.actionSection}>
            <PrimaryButton
              title="+ Add to Wallet Ledger"
              onPress={handleLogExpense}
              disabled={Object.keys(errors).length > 0}
              style={styles.confirmButton}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  bottomSheet: {
    backgroundColor: "#FFFFFF", // White background
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: "85%",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
  },
  dragHandle: {
    width: 40,
    height: 4,
    backgroundColor: "#C0C0C0",
    borderRadius: 2,
    alignSelf: "center",
    marginVertical: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E6E1D5",
  },
  title: {
    fontFamily: "PlayfairDisplay",
    fontSize: 22,
    fontWeight: "600",
    color: "#1A1A1A",
  },
  content: {
    padding: 16,
    paddingBottom: 10, // Reduced padding since confirm section is now fixed at bottom
  },
  balancePreviewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 16,
  },
  balanceCard: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    shadowColor: COLORS.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  balanceCardAfter: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    shadowColor: COLORS.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  balanceLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.textSecondary,
    marginBottom: 8,
    textAlign: "center",
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  balanceAmount: {
    fontFamily: "PlayfairDisplay",
    fontSize: 22,
    fontWeight: "600",
    color: COLORS.primary,
  },
  negativeBalance: {
    color: COLORS.error,
  },
  expenseFormCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 16,
    shadowColor: COLORS.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  amountHelperText: {
    marginTop: 8,
    marginBottom: 4,
    marginLeft: 2,
    color: COLORS.textTertiary,
  },
  inputContainer: {
    paddingVertical: 12, // Increase padding further
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  inputText: {
    fontFamily: "PlayfairDisplay", // Use Playfair font
    fontSize: 16,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.textSecondary,
    marginBottom: 8,
    textTransform: "uppercase",
  },
  inputSpacing: {
    marginTop: 12,
    marginBottom: 12,
  },
  timeFieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.inputBackground,
  },
  timeFieldIcon: {
    marginRight: 12,
  },
  timeFieldContent: {
    flex: 1,
  },
  timeFieldValue: {
    fontFamily: "PlayfairDisplay",
    fontSize: 16,
    color: COLORS.text,
    marginTop: 4,
  },
  categoryDropdownContainer: {
    flex: 1,
  },
  errorAndHelperContainer: {
    marginTop: 12, // Add some space after the grouped inputs
  },
  groupedInputs: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  categoryHelperText: {
    marginTop: 4,
    marginBottom: 8,
    marginLeft: 2,
    color: COLORS.textTertiary,
  },
  errorText: {
    color: COLORS.error,
    fontSize: 12,
    marginLeft: 2,
    marginTop: 4,
    marginBottom: 4,
  },
  actionSection: {
    padding: 20,
    paddingTop: 0,
  },
  confirmButton: {
    borderRadius: 22,
  },
});

export default LogExpenseBottomSheet;
