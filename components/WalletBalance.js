import { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../constants/colors";
import PrimaryButton from "./PrimaryButton";
import { Caption, H3, P } from "./Typography";

const WalletBalance = ({ balance, onAddFunds }) => {
  const [isAddFundsModalVisible, setIsAddFundsModalVisible] = useState(false);
  const [amountToAdd, setAmountToAdd] = useState("");

  const handleAddFunds = () => {
    if (amountToAdd && !isNaN(amountToAdd) && parseFloat(amountToAdd) > 0) {
      onAddFunds(parseFloat(amountToAdd));
      setAmountToAdd("");
      setIsAddFundsModalVisible(false);
    }
  };

  return (
    <View>
      {/* Wallet Balance Card */}
      <View style={styles.card}>
        <H3 style={styles.cardTitle}>Total Wallet Balance</H3>
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
          onPress={() => setIsAddFundsModalVisible(true)}
        />
      </View>

      {/* Add Funds Modal */}
      <Modal
        visible={isAddFundsModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsAddFundsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <H3 style={styles.modalTitle}>Add Funds to Wallet</H3>

            <TextInput
              style={styles.input}
              placeholder="Enter amount"
              keyboardType="numeric"
              value={amountToAdd}
              onChangeText={setAmountToAdd}
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => {
                  setIsAddFundsModalVisible(false);
                  setAmountToAdd("");
                }}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.confirmButton]}
                onPress={handleAddFunds}
              >
                <Text style={styles.confirmButtonText}>Add Funds</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  addFundsButton: {
    marginTop: 12,
    borderRadius: 22,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 20,
    width: "100%",
    maxWidth: 400,
  },
  modalTitle: {
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: COLORS.inputBackground,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: COLORS.inputBackground,
  },
  confirmButton: {
    backgroundColor: COLORS.buttonGradientStart,
  },
  cancelButtonText: {
    color: COLORS.text,
    fontWeight: "500",
  },
  confirmButtonText: {
    color: COLORS.textInverse,
    fontWeight: "500",
  },
});

export default WalletBalance;
