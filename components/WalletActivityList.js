import {
  FlatList,
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

  const renderItem = ({ item, index }) => (
    <View>
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
      {index < displayedActivities.length - 1 && (
        <View style={styles.separator} />
      )}
    </View>
  );

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <H2 style={styles.sectionTitle}>Wallet Activity</H2>
      </View>

      <View style={styles.activityList}>
        <FlatList
          data={displayedActivities}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </View>

      <TouchableOpacity style={styles.viewAllButton} onPress={onViewAll}>
        <P style={styles.viewAllText}>View Full Transaction History &gt;</P>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
  },
  activityList: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    paddingTop: 8,
    paddingBottom: 8,
  },
  activityItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
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
  viewAllButton: {
    padding: 16,
    alignItems: "center",
    borderRadius: 16,
    marginTop: 8,
  },
  viewAllText: {
    color: COLORS.accent,
    textDecorationLine: "underline",
    fontSize: 16,
    fontWeight: "600",
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 8,
  },
});

export default WalletActivityList;
