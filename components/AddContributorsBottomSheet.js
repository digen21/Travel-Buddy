import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  StyleSheet,
  FlatList,
} from "react-native";
import { COLORS } from "../constants/colors";
import { H2, P, Caption } from "./Typography";
import Icon from "react-native-vector-icons/MaterialIcons";

const AddContributorsBottomSheet = ({ isVisible, onClose, onConfirm }) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputStatus, setInputStatus] = useState("PENDING");
  const [inputPaymentMethod, setInputPaymentMethod] = useState("CASH"); // Added payment method
  const [contributors, setContributors] = useState([]);

  const addContributor = () => {
    if (inputName.trim() !== "" && inputAmount.trim() !== "") {
      const newContributor = {
        id: Date.now(), // Unique ID for each contributor
        name: inputName,
        amount: inputAmount,
        status: inputStatus,
        paymentMethod: inputPaymentMethod, // Added payment method
      };

      setContributors([...contributors, newContributor]);

      // Clear input fields
      setInputName("");
      setInputAmount("");
      setInputStatus("PENDING"); // Reset to default status
      setInputPaymentMethod("CASH"); // Reset to default payment method
    }
  };

  const deleteContributor = (index) => {
    const updatedContributors = [...contributors];
    updatedContributors.splice(index, 1);
    setContributors(updatedContributors);
  };

  const updateContributorStatus = (index, newStatus) => {
    const updatedContributors = [...contributors];
    updatedContributors[index].status = newStatus;
    setContributors(updatedContributors);
  };

  const updateContributorPaymentMethod = (index, newPaymentMethod) => {
    const updatedContributors = [...contributors];
    updatedContributors[index].paymentMethod = newPaymentMethod;
    setContributors(updatedContributors);
  };

  const calculateTotal = () => {
    return contributors.reduce((total, contributor) => {
      const amount = parseFloat(contributor.amount) || 0;
      return total + amount;
    }, 0);
  };

  const handleConfirm = () => {
    if (contributors.length > 0) {
      onConfirm(contributors);
      onClose();
    }
  };

  const formatAmount = (amount) => {
    const num = parseFloat(amount);
    if (isNaN(num)) return "0";
    return num.toLocaleString("en-IN");
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
            <H2 style={styles.title}>Add Contributors</H2>
            <TouchableOpacity onPress={onClose}>
              <Icon name="close" size={24} color={COLORS.text} />
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={styles.content}>
            {/* Input Section */}
            <View style={styles.inputSection}>
              <View style={styles.inputRow}>
                <View style={styles.inputContainer}>
                  <Icon
                    name="person"
                    size={20}
                    color={COLORS.textSecondary}
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="e.g. Rahul"
                    value={inputName}
                    onChangeText={setInputName}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Icon
                    name="currency-rupee"
                    size={20}
                    color={COLORS.textSecondary}
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="5000"
                    keyboardType="numeric"
                    value={inputAmount}
                    onChangeText={(text) => {
                      const numericValue = text.replace(/[^0-9]/g, "");
                      setInputAmount(numericValue);
                    }}
                  />
                </View>
              </View>

              {/* Chip components for predefined amounts */}

              <View style={styles.chipContainer}>
                {["500", "1000", "2000", "5000"].map((amount) => (
                  <TouchableOpacity
                    key={amount}
                    style={[
                      styles.chip,
                      inputAmount === amount && styles.selectedChip,
                    ]}
                    onPress={() => setInputAmount(amount)}
                  >
                    <Text
                      style={[
                        styles.chipText,
                        inputAmount === amount && styles.selectedChipText,
                      ]}
                    >
                      ₹{amount}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* Status Selector */}
              <View style={styles.statusSection}>
                <Caption style={styles.statusLabel}>STATUS</Caption>
                <View style={styles.statusContainer}>
                  <TouchableOpacity
                    style={[
                      styles.statusButton,
                      inputStatus === "PENDING" && styles.pendingStatusButton,
                    ]}
                    onPress={() => setInputStatus("PENDING")}
                  >
                    <Icon
                      name="hourglass-empty"
                      size={16}
                      color={
                        inputStatus === "PENDING"
                          ? COLORS.buttonGradientEnd
                          : COLORS.textSecondary
                      }
                    />
                    <Text
                      style={[
                        styles.statusText,
                        inputStatus === "PENDING" && styles.pendingStatusText,
                      ]}
                    >
                      Pending
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.statusButton,
                      inputStatus === "PAID" && styles.paidStatusButton,
                    ]}
                    onPress={() => setInputStatus("PAID")}
                  >
                    <Icon
                      name="check-circle"
                      size={16}
                      color={
                        inputStatus === "PAID"
                          ? COLORS.success
                          : COLORS.textSecondary
                      }
                    />
                    <Text
                      style={[
                        styles.statusText,
                        inputStatus === "PAID" && styles.paidStatusText,
                      ]}
                    >
                      Paid
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Payment Method Selector */}
              <View style={styles.paymentMethodSection}>
                <Caption style={styles.statusLabel}>PAYMENT METHOD</Caption>
                <View style={styles.statusContainer}>
                  <TouchableOpacity
                    style={[
                      styles.statusButton,
                      inputPaymentMethod === "CASH" && styles.paidStatusButton,
                    ]}
                    onPress={() => setInputPaymentMethod("CASH")}
                  >
                    <Icon
                      name="money"
                      size={16}
                      color={
                        inputPaymentMethod === "CASH"
                          ? COLORS.success
                          : COLORS.textSecondary
                      }
                    />
                    <Text
                      style={[
                        styles.statusText,
                        inputPaymentMethod === "CASH" && styles.paidStatusText,
                      ]}
                    >
                      Cash
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.statusButton,
                      inputPaymentMethod === "ONLINE" &&
                        styles.paidStatusButton,
                    ]}
                    onPress={() => setInputPaymentMethod("ONLINE")}
                  >
                    <Icon
                      name="wifi"
                      size={16}
                      color={
                        inputPaymentMethod === "ONLINE"
                          ? COLORS.success
                          : COLORS.textSecondary
                      }
                    />
                    <Text
                      style={[
                        styles.statusText,
                        inputPaymentMethod === "ONLINE" &&
                          styles.paidStatusText,
                      ]}
                    >
                      Online
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Add Contributor Button */}
            <TouchableOpacity
              style={styles.addContributorButton}
              onPress={addContributor}
            >
              <Icon
                name="add-circle"
                size={20}
                color={COLORS.buttonGradientEnd}
              />
              <Text style={styles.addContributorText}>Add Contributor</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>LIST</Text>
              <View style={styles.divider} />
            </View>

            {/* Added Contributors List */}
            {contributors.length > 0 && (
              <View style={styles.contributorsListSection}>
                <View style={styles.contributorsListHeader}>
                  <H2 style={styles.contributorsListTitle}>
                    Added Contributors
                  </H2>
                  <Caption style={styles.itemCount}>
                    {contributors.length} items
                  </Caption>
                </View>

                <FlatList
                  data={contributors}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item, index }) => (
                    <View style={styles.contributorItem}>
                      {/* Username and Amount section */}
                      <View style={styles.contributorInfo}>
                        <View style={styles.contributorNameAmount}>
                          <View style={{ flex: 1 }}>
                            <P style={styles.contributorName}>{item.name}</P>
                          </View>
                          <Caption style={styles.contributorAmount}>
                            ₹{formatAmount(item.amount)}
                          </Caption>
                        </View>

                        {/* Payment method and status section */}
                        <View style={styles.contributorStatusPaymentContainer}>
                          <Caption style={styles.paymentMethodLabel}>
                            Payment via {item.paymentMethod.toLowerCase()}
                          </Caption>

                          <View style={styles.statusInfo}>
                            <View
                              style={[
                                styles.contributorStatusBadge,
                                item.status === "PENDING"
                                  ? styles.pendingStatusBadge
                                  : styles.paidStatusBadge,
                              ]}
                            >
                              <Text
                                style={[
                                  styles.contributorStatusText,
                                  item.status === "PENDING"
                                    ? styles.pendingStatusText
                                    : styles.paidStatusText,
                                ]}
                              >
                                {item.status}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>

                      <TouchableOpacity
                        onPress={() => deleteContributor(index)}
                      >
                        <Icon
                          name="delete-outline"
                          size={20}
                          color={COLORS.textSecondary}
                        />
                      </TouchableOpacity>
                    </View>
                  )}
                  scrollEnabled={false}
                />
              </View>
            )}
          </ScrollView>

          {/* Total Summary and Confirm Button - Fixed at Bottom */}
          <View style={styles.topShadow} pointerEvents="none" />
          <View style={styles.confirmSection}>
            {/* Total Summary */}
            <View style={styles.totalSection}>
              <Caption style={styles.totalLabel}>Total to collect:</Caption>
              <H2 style={styles.totalAmount}>
                ₹{formatAmount(calculateTotal())}
              </H2>
            </View>

            {/* Primary Action Button */}
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleConfirm}
              disabled={contributors.length === 0}
              opacity={contributors.length === 0 ? 0.5 : 1}
            >
              <Text style={styles.confirmButtonText}>Confirm Contributors</Text>
              <Icon
                name="arrow-forward"
                size={20}
                color={COLORS.textInverse}
                style={styles.confirmButtonIcon}
              />
            </TouchableOpacity>
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
    maxHeight: "95%",
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
  inputSection: {
    marginBottom: 16,
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    padding: 16,
  },
  inputRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FAF7F2",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E6E1D5",
  },
  inputIcon: {
    marginLeft: 12,
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 48,
    fontFamily: "Inter",
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 0,
  },
  statusSection: {
    marginBottom: 8,
  },
  statusLabel: {
    marginBottom: 8,
    color: COLORS.text,
    fontWeight: "500",
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statusButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E6E1D5",
    marginRight: 8,
  },
  statusButtonLast: {
    marginRight: 0,
  },
  statusText: {
    marginLeft: 6,
    fontSize: 14,
    color: COLORS.text,
  },
  pendingStatusButton: {
    backgroundColor: "#FEF7EE",
    borderColor: COLORS.buttonGradientEnd,
  },
  pendingStatusText: {
    color: COLORS.buttonGradientEnd,
  },
  paidStatusButton: {
    backgroundColor: "#F9FAFB",
    borderColor: "#E5E7EB",
  },
  paidStatusText: {
    color: COLORS.text,
  },
  deleteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 4,
  },
  addContributorButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 22,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: COLORS.buttonGradientEnd,
    backgroundColor: "#F4EDE7",
    marginBottom: 16,
  },
  addContributorText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "500",
    color: COLORS.buttonGradientEnd,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#E6E1D5",
  },
  dividerText: {
    marginHorizontal: 12,
    color: COLORS.textSecondary,
    fontSize: 14,
    fontWeight: "500",
  },
  AddedContributorsText: {
    marginHorizontal: 12,
    color: COLORS.textSecondary,
    fontFamily: "PlayfairDisplay",
    fontSize: 14,
    fontWeight: "500",
  },
  contributorsListSection: {
    marginBottom: 16,
  },
  contributorsListHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  contributorsListTitle: {
    fontSize: 18,
  },
  itemCount: {
    color: COLORS.textSecondary,
    fontFamily: "PlayfairDisplay",
    fontSize: 16,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    backgroundColor: "#F3F4F6",
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },
  contributorItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    padding: 12,
    marginBottom: 8,
  },
  contributorInfo: {
    flex: 1,
  },
  contributorName: {
    fontWeight: "500",
    marginRight: 8,
    fontFamily: "PlayfairDisplay",
  },
  statusToggleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  contributorAmount: {
    color: COLORS.textSecondary,
    fontFamily: "PlayfairDisplay",
  },
  contributorStatusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginRight: 12,
  },
  pendingStatusBadge: {
    backgroundColor: "#FEF7EE",
  },
  paidStatusBadge: {
    backgroundColor: "#ECFDF5",
  },
  contributorStatusText: {
    fontSize: 12,
    fontWeight: "500",
  },
  totalSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    marginBottom: 16,
  },
  totalLabel: {
    color: COLORS.text,
    fontFamily: "PlayfairDisplay",
  },
  totalAmount: {
    fontFamily: "PlayfairDisplay",
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.primary,
  },
  confirmSection: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 10,
    borderTopWidth: 1,
    borderTopColor: "#E6E1D5",
    position: "relative",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 16,
    backgroundColor: "#FFFFFF", // Match the bottom sheet background
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -6,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 0,
  },

  // Faux top shadow overlay for Android (and additional control)
  topShadow: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 86, // approximate: places overlay above the confirm section
    height: 10,
    backgroundColor: "#000",
    opacity: 0.06,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  confirmButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    backgroundColor: COLORS.buttonGradientEnd, // Temple Orange
    borderRadius: 22,
    marginBottom: 16,
    paddingHorizontal: 20, // Added more horizontal padding
  },
  confirmButtonText: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.textInverse,
    marginRight: 8,
  },
  confirmButtonIcon: {
    marginRight: 8,
  },

  // New styles for chips
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "#F3F4F6",
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },
  selectedChip: {
    backgroundColor: "#FEF7EE",
    borderColor: COLORS.buttonGradientEnd,
  },
  chipText: {
    fontSize: 12,
    color: COLORS.text,
  },
  selectedChipText: {
    color: COLORS.buttonGradientEnd,
    fontWeight: "500",
  },
  // Styles for status toggles in the list
  contributorStatusContainer: {
    flexDirection: "row",
    gap: 8,
    marginRight: 8,
  },
  contributorStatusButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E6E1D5",
  },
  contributorStatusTextSmall: {
    fontSize: 10,
    marginLeft: 4,
  },

  // New styles for payment method
  paymentMethodSection: {
    marginBottom: 8,
  },
  contributorStatusPaymentContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
    marginLeft: 8,
  },
  paymentMethodInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  paymentMethodLabel: {
    fontSize: 10,
    marginRight: 4,
    color: COLORS.textSecondary,
  },
  paymentMethodContainer: {
    flexDirection: "row",
    gap: 6,
  },
  paymentMethodButton: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    backgroundColor: "#F3F4F6",
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },
  selectedPaymentMethodButton: {
    backgroundColor: "#FEF7EE",
    borderColor: COLORS.buttonGradientEnd,
  },
  paymentMethodText: {
    fontSize: 10,
    color: COLORS.text,
  },
  selectedPaymentMethodText: {
    color: COLORS.buttonGradientEnd,
    fontWeight: "500",
  },
  statusInfo: {
    flexDirection: "row",
    alignItems: "center",

    gap: 4,
  },
  contributorNameAmount: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  contributorStatusPaymentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 6,
  },
  statusInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});

export default AddContributorsBottomSheet;
