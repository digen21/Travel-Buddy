import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import Background from "../components/Background";
import SystemUIManager from "../components/SystemUIManager";
import { Caption, H1, P } from "../components/Typography";
import { COLORS } from "../constants/colors";

const WalletActivityViewAllScreen = ({ route, navigation }) => {
  // Get activities data from route params or use default data
  const routeActivities = route?.params?.activities || [];

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
            {walletActivity.map((activity) => (
              <View key={activity.id} style={styles.activityItem}>
                <View style={styles.activityInfo}>
                  <P style={styles.activityName}>{activity.name}</P>
                  <Caption style={styles.activityDetails}>
                    {activity.date} • {activity.category}
                  </Caption>
                </View>
                <Text
                  style={[
                    styles.activityAmount,
                    activity.type === "expense"
                      ? styles.expenseAmount
                      : styles.depositAmount,
                  ]}
                >
                  {activity.type === "expense" ? "-" : "+"}₹
                  {Math.abs(activity.amount).toLocaleString("en-IN")}
                </Text>
              </View>
            ))}
          </View>
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
});

export default WalletActivityViewAllScreen;
