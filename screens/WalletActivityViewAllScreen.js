import { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import Background from "../components/Background";
import PrimaryButton from "../components/PrimaryButton";
import SystemUIManager from "../components/SystemUIManager";
import { Caption, H1, P } from "../components/Typography";
import { COLORS } from "../constants/colors";
import LogExpenseBottomSheet from "./LogExpenseScreen";

const WalletActivityViewAllScreen = ({ route, navigation }) => {
  const [isLogExpenseBottomSheetVisible, setIsLogExpenseBottomSheetVisible] =
    useState(false);

  // Get activities data from route params or use default data
  const routeActivities = route?.params?.activities || [];

  // Calculate total balance
  const totalBalance = routeActivities.reduce((sum, activity) => {
    return sum + activity.amount;
  }, 0);

  // Sample data for fallback
  const walletActivity =
    routeActivities.length > 0
      ? routeActivities
      : [
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

  const handleLogExpense = (expenseAmount, newBalance) => {
    // After logging expense, navigate to success screen
    navigation.navigate("SuccessfulAddedFunds", {
      amountAdded: Math.abs(expenseAmount).toLocaleString("en-IN"),
      newBalance: newBalance.toLocaleString("en-IN"),
    });
  };

  return (
    <Background style={styles.container}>
      <SystemUIManager backgroundColor={COLORS.background} />
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
            <H1 style={styles.screenTitle}>Wallet Activity</H1>
            <View style={styles.placeholder} />
          </View>

          {/* Wallet Activity List */}
          <View style={styles.section}>
            <FlatList
              data={walletActivity}
              renderItem={({ item }) => (
                <View style={styles.activityItem}>
                  <View style={styles.activityInfo}>
                    <P style={styles.activityName}>{item.name}</P>
                    <Caption style={styles.activityDetails}>
                      {item.date} • {item.category}
                    </Caption>
                  </View>
                  <Text
                    style={[
                      styles.activityAmount,
                      item.type === "expense"
                        ? styles.expenseAmount
                        : styles.depositAmount,
                    ]}
                  >
                    {item.type === "expense" ? "-" : "+"}₹
                    {Math.abs(item.amount).toLocaleString("en-IN")}
                  </Text>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
            />
          </View>

          {/* Log Expense Button */}
          <View style={styles.logExpenseButtonContainer}>
            <PrimaryButton
              title="Log Expense"
              onPress={() => setIsLogExpenseBottomSheetVisible(true)}
            />
          </View>
        </ScrollView>

        {/* Log Expense Bottom Sheet */}
        <LogExpenseBottomSheet
          isVisible={isLogExpenseBottomSheetVisible}
          onClose={() => setIsLogExpenseBottomSheetVisible(false)}
          initialBalance={totalBalance}
          onLogExpense={handleLogExpense}
        />
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
  backButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  screenTitle: {
    textAlign: "center",
    flex: 1,
  },
  placeholder: {
    width: 40, // To balance the back button space
  },
  section: {
    marginBottom: 24,
  },
  activityItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: COLORS.inputBackground,
    borderRadius: 12,
    marginBottom: 12,
  },
  activityInfo: {
    flex: 1,
  },
  activityName: {
    fontWeight: "500",
  },
  activityDetails: {
    color: COLORS.textSecondary,
  },
  activityAmount: {
    fontWeight: "600",
    fontSize: 16,
  },
  expenseAmount: {
    color: COLORS.error,
  },
  depositAmount: {
    color: COLORS.success,
  },
  logExpenseButtonContainer: {
    marginTop: 24,
  },
});

export default WalletActivityViewAllScreen;
