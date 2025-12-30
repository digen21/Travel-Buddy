import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../constants/colors";
import { Caption, H2, P } from "./Typography";

const WalletActivityList = ({ activities, onViewAll }) => {
  // Limit to 3 activities for initial display
  const displayedActivities = activities.slice(0, 3);

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <H2 style={styles.sectionTitle}>Wallet Activity</H2>
        <TouchableOpacity onPress={onViewAll}>
          <P style={styles.viewAllText}>View All</P>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.activityList}>
        {displayedActivities.map((activity) => (
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
  },
  viewAllText: {
    color: COLORS.accent,
    textDecorationLine: "underline",
  },
  activityList: {
    gap: 12,
  },
  activityItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: COLORS.inputBackground,
    borderRadius: 12,
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

export default WalletActivityList;
