import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Background from "../components/Background";
import SystemUIManager from "../components/SystemUIManager";
import { H1, H2, H3, P, Caption } from "../components/Typography";
import { COLORS } from "../constants/colors";
import WalletBalance from "../components/WalletBalance";
import ContributorsList from "../components/ContributorsList";
import WalletActivityList from "../components/WalletActivityList";
import { SafeAreaView } from "react-native-safe-area-context";

const ExpenseScreen = () => {
  // State for wallet balance
  const [walletBalance, setWalletBalance] = useState(5000);
  const navigation = useNavigation();

  const contributors = [
    { id: 1, name: "Rajesh Kumar", amount: 1000, status: "PAID" },
    { id: 2, name: "Priya Sharma", amount: 1000, status: "PAID" },
    { id: 3, name: "Amit Patel", amount: 1000, status: "PENDING" },
    { id: 4, name: "Sneha Reddy", amount: 1000, status: "PAID" },
    { id: 5, name: "Vikram Singh", amount: 1000, status: "PENDING" },
  ];

  const walletActivity = [
    {
      id: 1,
      name: "Hotel Booking",
      date: "20 Dec 2024",
      category: "Accommodation",
      amount: -1200,
      type: "expense",
    },
    {
      id: 2,
      name: "Flight Tickets",
      date: "15 Dec 2024",
      category: "Transport",
      amount: -3500,
      type: "expense",
    },
    {
      id: 3,
      name: "Trip Fund",
      date: "10 Dec 2024",
      category: "Initial",
      amount: 5000,
      type: "deposit",
    },
  ];

  // Handler for adding funds
  const handleAddFunds = (amount) => {
    setWalletBalance((prevBalance) => prevBalance + amount);
  };

  // Handler for adding a new contributor
  const handleAddContributor = () => {
    console.log("Add new contributor");
    // In a real implementation, this would open a modal or navigate to a form
  };

  // Handlers for view all actions
  const handleViewAllContributors = () => {
    // Navigate to the contributors view all screen
    navigation.navigate("ContributorsViewAll", { contributors });
  };

  const handleViewAllWalletActivity = () => {
    // Navigate to the wallet activity view all screen
    navigation.navigate("WalletActivityViewAll", {
      activities: walletActivity,
    });
  };

  return (
    <Background style={styles.container}>
      <SystemUIManager backgroundColor={COLORS.background} />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Top Bar */}
          <View style={styles.topBar}>
            {navigation.canGoBack() && (
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
              >
                <Icon name="arrow-back" size={24} color={COLORS.primary} />
              </TouchableOpacity>
            )}
            <H1 style={styles.screenTitle}>Trip Wallet</H1>
            <View style={styles.placeholder} />
          </View>

          {/* Wallet Balance Card with Add Funds button */}
          <WalletBalance balance={walletBalance} onAddFunds={handleAddFunds} />

          {/* Contributors Section */}
          <ContributorsList
            contributors={contributors}
            onViewAll={handleViewAllContributors}
            onAddContributor={handleAddContributor}
          />

          {/* Wallet Activity Section */}
          <WalletActivityList
            activities={walletActivity}
            onViewAll={handleViewAllWalletActivity}
          />
        </ScrollView>
      </SafeAreaView>
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
    paddingBottom: 80, // Extra padding to account for potential bottom navigation
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
  },
  placeholder: {
    width: 40, // To balance the back button space
  },
});

export default ExpenseScreen;
