import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/colors";
import LogExpenseBottomSheet from "../screens/LogExpenseScreen"; // Note: file still called LogExpenseScreen but exports LogExpenseBottomSheet
import AddFundsBottomSheet from "./AddFundsBottomSheet";
import PrimaryButton from "./PrimaryButton";
import { Caption, H3, P } from "./Typography";

const WalletBalance = ({ balance, onAddFunds }) => {
  const navigation = useNavigation();
  const [isAddFundsBottomSheetVisible, setIsAddFundsBottomSheetVisible] =
    useState(false);
  const [isLogExpenseBottomSheetVisible, setIsLogExpenseBottomSheetVisible] =
    useState(false);

  const handleConfirmFunds = (contributors, totalAmount) => {
    // Calculate the total amount that was confirmed for payment
    const confirmedAmount = contributors.reduce((sum, contrib) => {
      if (contrib.status === "PAID") {
        sum += contrib.amount;
      }
      return sum;
    }, 0);

    // Update the wallet balance with the confirmed amount
    if (confirmedAmount > 0) {
      onAddFunds(confirmedAmount);
      // Navigate to success screen first
      const newBalance = balance + confirmedAmount;
      navigation.navigate("SuccessfulAddedFunds", {
        amountAdded: confirmedAmount.toLocaleString("en-IN"),
        newBalance: newBalance.toLocaleString("en-IN"),
      });
      // Close the bottom sheet after starting navigation
      setTimeout(() => {
        setIsAddFundsBottomSheetVisible(false);
      }, 100); // Small delay to ensure navigation starts first
    } else {
      // If no confirmed amount, just close the bottom sheet
      setIsAddFundsBottomSheetVisible(false);
    }
  };

  const handleLogExpense = (expenseAmount, newBalance) => {
    // Deduct the expense amount from the wallet
    onAddFunds(expenseAmount); // expenseAmount is already negative for deductions

    // Navigate to success screen to show the deduction
    navigation.navigate("SuccessfulAddedFunds", {
      amountAdded: Math.abs(expenseAmount).toLocaleString("en-IN"),
      newBalance: newBalance.toLocaleString("en-IN"),
    });
  };

  const handleHistoryPress = () => {
    // This would typically navigate to a history screen or open a history modal
    console.log("History button pressed");
  };

  return (
    <View>
      {/* Wallet Balance Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <H3 style={styles.cardTitle}>Total Wallet Balance</H3>
          <TouchableOpacity
            style={styles.historyButton}
            onPress={handleHistoryPress}
          >
            <Text style={styles.historyButtonText}>History</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.balanceAmount}>
          ₹{balance.toLocaleString("en-IN")}
        </Text>

        <View style={styles.statusContainer}>
          <View style={styles.greenDot} />
          <P style={styles.statusText}>Healthy Funds</P>
        </View>

        <Caption style={styles.contributionText}>
          5 members × ₹1,000 contribution
        </Caption>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Log Expense"
            style={styles.logExpenseButton}
            onPress={() => setIsLogExpenseBottomSheetVisible(true)}
          />
          <PrimaryButton
            title="Add Funds"
            style={styles.addFundsButton}
            onPress={() => setIsAddFundsBottomSheetVisible(true)}
          />
        </View>
      </View>

      {/* Add Funds Bottom Sheet */}
      <AddFundsBottomSheet
        isVisible={isAddFundsBottomSheetVisible}
        onClose={() => setIsAddFundsBottomSheetVisible(false)}
        onConfirm={handleConfirmFunds}
      />

      {/* Log Expense Bottom Sheet */}
      <LogExpenseBottomSheet
        isVisible={isLogExpenseBottomSheetVisible}
        onClose={() => setIsLogExpenseBottomSheetVisible(false)}
        initialBalance={balance}
        onLogExpense={handleLogExpense}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: COLORS.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    marginBottom: 8,
  },
  balanceAmount: {
    fontFamily: "PlayfairDisplay",
    fontSize: 28,
    fontWeight: "600",
    color: COLORS.primary,
    marginBottom: 12,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  greenDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.success,
    marginRight: 8,
  },
  statusText: {
    color: COLORS.success,
    fontSize: 14,
  },
  contributionText: {
    color: COLORS.textSecondary,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  historyButton: {
    padding: 6,
    backgroundColor: COLORS.inputBackground,
    borderRadius: 8,
  },
  historyButtonText: {
    color: COLORS.accent,
    fontSize: 12,
    fontWeight: "500",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  logExpenseButton: {
    flex: 1,
    marginRight: 6,
    borderRadius: 22,
  },
  addFundsButton: {
    flex: 1,
    marginLeft: 6,
    borderRadius: 22,
  },
});

export default WalletBalance;
