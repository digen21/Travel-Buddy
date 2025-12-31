import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { useState } from "react";
import {
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../constants/colors";
import { Caption, H2, P } from "./Typography";

const AddFundsBottomSheet = ({ isVisible, onClose, onConfirm }) => {
  const [totalAmount, setTotalAmount] = useState("");
  const [contributors, setContributors] = useState([
    {
      id: 1,
      name: "Rajesh Kumar",
      amount: 0,
      status: "PENDING",
      paymentMethod: null,
    },
    {
      id: 2,
      name: "Priya Sharma",
      amount: 0,
      status: "PENDING",
      paymentMethod: null,
    },
    {
      id: 3,
      name: "Amit Patel",
      amount: 0,
      status: "PENDING",
      paymentMethod: null,
    },
    {
      id: 4,
      name: "Sneha Reddy",
      amount: 0,
      status: "PENDING",
      paymentMethod: null,
    },
    {
      id: 5,
      name: "Vikram Singh",
      amount: 0,
      status: "PENDING",
      paymentMethod: null,
    },
  ]);
  const [selectedContributors, setSelectedContributors] = useState(new Set());

  // Calculate amount per person when total amount changes
  const amountPerPerson =
    totalAmount && contributors.length > 0
      ? (parseFloat(totalAmount) / contributors.length).toFixed(2)
      : 0;

  const toggleContributorSelection = (id) => {
    const newSelected = new Set(selectedContributors);
    if (newSelected.has(id)) {
      newSelected.delete(id);
      // Reset payment method when unselecting
      setContributors((prev) =>
        prev.map((c) => (c.id === id ? { ...c, paymentMethod: null } : c))
      );
    } else {
      newSelected.add(id);
    }
    setSelectedContributors(newSelected);
  };

  const updatePaymentMethod = (id, method) => {
    setContributors((prev) =>
      prev.map((contributor) =>
        contributor.id === id
          ? { ...contributor, paymentMethod: method, status: "PAID" }
          : contributor
      )
    );

    // Also add to selected contributors if not already selected
    if (!selectedContributors.has(id)) {
      const newSelected = new Set(selectedContributors);
      newSelected.add(id);
      setSelectedContributors(newSelected);
    }
  };

  const handleAddFunds = () => {
    // Prepare data for confirmed contributors
    const confirmedContributors = contributors.map((contrib) => {
      const isSelected = selectedContributors.has(contrib.id);
      return {
        ...contrib,
        status: isSelected
          ? contrib.paymentMethod
            ? "PAID"
            : "PENDING"
          : "PENDING",
        amount: isSelected ? parseFloat(amountPerPerson) : 0,
      };
    });

    onConfirm(confirmedContributors, parseFloat(totalAmount));
    onClose();
    // Reset form
    setTotalAmount("");
  };

  const formatAmount = (amount) => {
    const num = parseFloat(amount);
    if (isNaN(num)) return "0";
    return num.toLocaleString("en-IN");
  };

  const quickAmounts = [100, 500, 1000];

  // Calculate how many people have been selected
  const selectedCount = selectedContributors.size;
  const pendingCount = contributors.length - selectedCount;

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
            <H2 style={styles.title}>Collect Funds</H2>
            <TouchableOpacity onPress={onClose}>
              <Icon name="close" size={24} color={COLORS.text} />
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={styles.content}>
            {/* Additional Amount Needed Card */}
            <View style={styles.inputSection}>
              <Caption style={styles.statusLabel}>
                ADDITIONAL AMOUNT NEEDED
              </Caption>

              <View style={styles.amountInputContainer}>
                <Text style={styles.currencySymbol}>₹</Text>
                <TextInput
                  style={styles.amountInput}
                  placeholder="0"
                  keyboardType="numeric"
                  value={totalAmount}
                  onChangeText={(text) => {
                    const numericValue = text.replace(/[^0-9]/g, "");
                    setTotalAmount(numericValue);
                  }}
                />
              </View>

              <View style={styles.helperRow}>
                <Caption style={styles.helperText}>
                  Split among {contributors.length} travelers
                </Caption>
                <View style={styles.badge}>
                  <Caption style={styles.badgeText}>
                    ₹{formatAmount(amountPerPerson)} / person
                  </Caption>
                </View>
              </View>

              {/* Quick Amount Chips */}
              <View style={styles.chipContainer}>
                {quickAmounts.map((amount) => (
                  <TouchableOpacity
                    key={amount}
                    style={[
                      styles.chip,
                      totalAmount === amount.toString() && styles.selectedChip,
                    ]}
                    onPress={() => setTotalAmount(amount.toString())}
                  >
                    <Text
                      style={[
                        styles.chipText,
                        totalAmount === amount.toString() &&
                          styles.selectedChipText,
                      ]}
                    >
                      +₹{amount}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>LIST</Text>
              <View style={styles.divider} />
            </View>

            {/* Contributor List Section */}
            <View style={styles.contributorsListSection}>
              <View style={styles.contributorsListHeader}>
                <H2 style={styles.contributorsListTitle}>Contributor List</H2>
                <View style={styles.statusBadge}>
                  <Caption style={styles.statusText}>
                    {selectedCount} Paid
                  </Caption>
                </View>
              </View>

              <FlatList
                data={contributors}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={styles.contributorItem}>
                    <View style={styles.contributorInfo}>
                      <TouchableOpacity
                        style={[
                          styles.checkbox,
                          selectedContributors.has(item.id) &&
                            styles.checkboxChecked,
                        ]}
                        onPress={() => toggleContributorSelection(item.id)}
                      >
                        {selectedContributors.has(item.id) && (
                          <Icon
                            name="check"
                            size={14}
                            color={COLORS.textInverse}
                          />
                        )}
                      </TouchableOpacity>

                      <View style={styles.avatar}>
                        <Text style={styles.avatarText}>
                          {item.name.charAt(0)}
                        </Text>
                      </View>

                      <View style={styles.contributorDetails}>
                        <P style={styles.contributorName}>{item.name}</P>

                        {selectedContributors.has(item.id) ? (
                          <View style={styles.paymentMethodContainer}>
                            {item.paymentMethod ? (
                              <View style={styles.paymentMethodInfo}>
                                <Caption style={styles.paymentMethodLabel}>
                                  Paid via {item.paymentMethod.toLowerCase()}
                                </Caption>
                                <Icon
                                  name={
                                    item.paymentMethod === "CASH"
                                      ? "money"
                                      : "wifi"
                                  }
                                  size={14}
                                  color={COLORS.success}
                                  style={styles.paymentMethodIcon}
                                />
                              </View>
                            ) : (
                              <View style={styles.paymentMethodSelection}>
                                <TouchableOpacity
                                  style={[
                                    styles.paymentChip,
                                    item.paymentMethod === "CASH" &&
                                      styles.selectedPaymentChip,
                                  ]}
                                  onPress={() =>
                                    updatePaymentMethod(item.id, "CASH")
                                  }
                                >
                                  <Icon
                                    name="money"
                                    size={14}
                                    color={
                                      item.paymentMethod === "CASH"
                                        ? COLORS.success
                                        : COLORS.textSecondary
                                    }
                                  />
                                  <Caption
                                    style={[
                                      styles.paymentChipText,
                                      item.paymentMethod === "CASH" &&
                                        styles.selectedPaymentChipText,
                                    ]}
                                  >
                                    Cash
                                  </Caption>
                                </TouchableOpacity>

                                <TouchableOpacity
                                  style={[
                                    styles.paymentChip,
                                    item.paymentMethod === "ONLINE" &&
                                      styles.selectedPaymentChip,
                                  ]}
                                  onPress={() =>
                                    updatePaymentMethod(item.id, "ONLINE")
                                  }
                                >
                                  <Icon
                                    name="wifi"
                                    size={14}
                                    color={
                                      item.paymentMethod === "ONLINE"
                                        ? COLORS.success
                                        : COLORS.textSecondary
                                    }
                                  />
                                  <Caption
                                    style={[
                                      styles.paymentChipText,
                                      item.paymentMethod === "ONLINE" &&
                                        styles.selectedPaymentChipText,
                                    ]}
                                  >
                                    Online
                                  </Caption>
                                </TouchableOpacity>
                              </View>
                            )}
                          </View>
                        ) : (
                          <Caption style={styles.pendingStatus}>
                            Pending
                          </Caption>
                        )}
                      </View>
                    </View>

                    <Caption style={styles.contributorAmount}>
                      ₹{formatAmount(amountPerPerson)}
                    </Caption>
                  </View>
                )}
                scrollEnabled={false}
              />
            </View>

            {/* Reminder Info */}
            {pendingCount > 0 && (
              <View style={styles.reminderSection}>
                <View style={styles.reminderRow}>
                  <Icon
                    name="notifications"
                    size={16}
                    color={COLORS.buttonGradientEnd}
                    style={styles.reminderIcon}
                  />
                  <Caption style={styles.reminderText}>
                    Send reminders to {pendingCount} people
                  </Caption>
                </View>
              </View>
            )}
          </ScrollView>

          {/* Primary Action Button */}
          <View style={styles.actionSection}>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleAddFunds}
              disabled={!totalAmount || selectedCount === 0}
              opacity={!totalAmount || selectedCount === 0 ? 0.5 : 1}
            >
              <Text style={styles.confirmButtonText}>
                Update Wallet Balance
              </Text>
              <MaterialDesignIcons
                name="wallet"
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
  inputSection: {
    marginBottom: 16,
    backgroundColor: COLORS.surface,
    borderRadius: 14,
    padding: 16,
  },
  statusLabel: {
    marginBottom: 8,
    color: COLORS.text,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  amountInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  currencySymbol: {
    fontSize: 28,
    fontWeight: "600",
    color: COLORS.primary,
    fontFamily: "PlayfairDisplay",
  },
  amountInput: {
    flex: 1,
    fontSize: 28,
    fontWeight: "600",
    color: COLORS.text,
    fontFamily: "PlayfairDisplay",
    paddingHorizontal: 8,
    paddingVertical: 0,
  },
  helperRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  helperText: {
    color: COLORS.textSecondary,
  },
  badge: {
    backgroundColor: "#F3F4F6",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    color: COLORS.buttonGradientEnd,
    fontSize: 12,
    fontWeight: "500",
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
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
  statusBadge: {
    backgroundColor: "#ECFDF5",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  statusText: {
    color: COLORS.success,
    fontSize: 12,
    fontWeight: "500",
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
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  checkboxChecked: {
    backgroundColor: COLORS.buttonGradientEnd,
    borderColor: COLORS.buttonGradientEnd,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.accent,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    color: COLORS.textInverse,
    fontWeight: "bold",
    fontSize: 14,
  },
  contributorDetails: {
    flex: 1,
  },
  contributorName: {
    fontWeight: "500",
    marginBottom: 4,
  },
  pendingStatus: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
  paymentMethodContainer: {
    marginTop: 4,
  },
  paymentMethodInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  paymentMethodLabel: {
    fontSize: 10,
    color: COLORS.textSecondary,
    marginRight: 4,
  },
  paymentMethodIcon: {
    marginLeft: 4,
  },
  paymentMethodSelection: {
    flexDirection: "row",
    gap: 6,
  },
  paymentChip: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: "#F3F4F6",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    alignItems: "center",
  },
  selectedPaymentChip: {
    backgroundColor: "#FEF7EE",
    borderColor: COLORS.buttonGradientEnd,
  },
  paymentChipText: {
    fontSize: 10,
    color: COLORS.text,
    marginLeft: 4,
  },
  selectedPaymentChipText: {
    color: COLORS.buttonGradientEnd,
    fontWeight: "500",
  },
  contributorAmount: {
    fontWeight: "600",
    fontSize: 16,
    color: COLORS.primary,
    fontFamily: "PlayfairDisplay",
  },
  reminderSection: {
    marginBottom: 16,
  },
  reminderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  reminderIcon: {
    marginRight: 8,
  },
  reminderText: {
    color: COLORS.buttonGradientEnd,
    fontWeight: "500",
  },
  actionSection: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "#FFFFFF",
  },
  confirmButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    backgroundColor: COLORS.buttonGradientEnd, // Temple Orange
    borderRadius: 22,
    paddingHorizontal: 20,
    shadowColor: COLORS.buttonGradientEnd,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
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
});

export default AddFundsBottomSheet;
