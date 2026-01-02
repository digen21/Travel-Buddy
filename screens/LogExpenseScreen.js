import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import Background from "../components/Background";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import SelectDropdown from "../components/SelectDropdown";
import SystemUIManager from "../components/SystemUIManager";
import TextArea from "../components/TextArea";
import { Caption, H1 } from "../components/Typography";
import { COLORS } from "../constants/colors";

const LogExpenseScreen = ({ route }) => {
  const navigation = useNavigation();
  const { initialBalance = 0, onAddFunds } = route.params || {}; // Get balance and onAddFunds from route params

  const [expenseAmount, setExpenseAmount] = useState("");
  const [place, setPlace] = useState("");
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );
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

    if (onAddFunds) {
      // Update the parent's balance state by calling onAddFunds
      onAddFunds(expenseAmountValue);
    }

    // Calculate the new balance after deduction
    const newBalance = balanceAfterDeduction;

    // Navigate to success screen to show the deduction
    navigation.navigate("SuccessfulAddedFunds", {
      amountAdded: Math.abs(expenseAmountValue).toLocaleString("en-IN"),
      newBalance: newBalance.toLocaleString("en-IN"),
    });
  };

  return (
    <Background style={styles.container}>
      <SystemUIManager backgroundColor={COLORS.background} />
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <SafeAreaView style={styles.safeArea}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {/* Top Bar */}
            <View style={styles.topBar}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
              >
                <Icon name="arrow-back" size={24} color={COLORS.primary} />
              </TouchableOpacity>
              <H1 style={styles.screenTitle}>Log Expense</H1>
              <View style={styles.placeholder} />
            </View>

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

              {/* Time and Category - No spacing between them */}
              <View style={styles.groupedInputs}>
                <InputField
                  label="TIME"
                  placeholder={time}
                  value={time}
                  onChangeText={setTime}
                  icon={
                    <Icon
                      name="access-time"
                      size={20}
                      color={COLORS.inputIconColor}
                    />
                  }
                  inputContainerStyle={styles.inputContainer}
                  inputStyle={styles.inputText}
                  containerStyle={{ marginBottom: 0 }}
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
              </View>

              {errors.category && (
                <Caption style={styles.errorText}>{errors.category}</Caption>
              )}
              <Caption style={[styles.categoryHelperText, { marginTop: 4 }]}>
                *Category selection required
              </Caption>

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

            {/* Bottom Action Section */}
            <View style={styles.footer}>
              <PrimaryButton
                title="+ Add to Wallet Ledger"
                onPress={handleLogExpense}
                disabled={Object.keys(errors).length > 0}
                style={styles.primaryButton}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 20, // Reduced to accommodate footer
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  backButton: {
    padding: 8,
  },
  screenTitle: {
    textAlign: "center",
    flex: 1,
    fontSize: 24,
  },
  placeholder: {
    width: 40,
  },
  balancePreviewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 24,
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
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  primaryButton: {
    borderRadius: 22,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
});

export default LogExpenseScreen;
