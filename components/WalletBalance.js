import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/colors";
import PrimaryButton from "./PrimaryButton";
import { Caption, H3, P } from "./Typography";
import AddFundsBottomSheet from "./AddFundsBottomSheet";

const WalletBalance = ({ balance, onAddFunds }) => {
  const [isAddFundsBottomSheetVisible, setIsAddFundsBottomSheetVisible] =
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
    }
    setIsAddFundsBottomSheetVisible(false);
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
          <TouchableOpacity style={styles.historyButton} onPress={handleHistoryPress}>
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

        <PrimaryButton
          title="Add Funds"
          style={styles.addFundsButton}
          onPress={() => setIsAddFundsBottomSheetVisible(true)}
        />
      </View>

      {/* Add Funds Bottom Sheet */}
      <AddFundsBottomSheet
        isVisible={isAddFundsBottomSheetVisible}
        onClose={() => setIsAddFundsBottomSheetVisible(false)}
        onConfirm={handleConfirmFunds}
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
  addFundsButton: {
    marginTop: 12,
    borderRadius: 22,
  },
});

export default WalletBalance;
