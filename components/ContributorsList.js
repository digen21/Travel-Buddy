import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import { COLORS } from "../constants/colors";
import { Caption, H2, P } from "./Typography";

const ContributorsList = ({ contributors, onViewAll }) => {
  // Limit to 3 contributors for initial display
  const displayedContributors = contributors.slice(0, 3);

  const renderItem = ({ item, index }) => (
    <View>
      <View style={styles.contributorItem}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
        </View>
        <View style={styles.contributorInfo}>
          <View style={styles.rowContainer}>
            <P style={styles.contributorName}>{item.name}</P>
            <Caption style={styles.contributorAmount}>₹{item.amount}</Caption>
          </View>
          <View style={styles.rowContainer}>
            <Caption style={styles.contributorVia}>
              Payment via
              {item.paymentMethod
                ? item.paymentMethod.toLowerCase()
                : "cash"}{" "}
              {
                <MaterialDesignIcons
                  name={
                    item.paymentMethod === "CASH"
                      ? "cash-multiple"
                      : "credit-card-plus"
                  }
                  color={
                    item.paymentMethod === "CASH"
                      ? COLORS.success
                      : COLORS.pending
                  }
                  size={20}
                />
              }
            </Caption>

            <View
              style={[
                styles.statusBadge,
                item.status === "PAID"
                  ? styles.paidStatus
                  : styles.pendingStatus,
              ]}
            >
              <Text
                style={[
                  styles.statusText,
                  item.status === "PAID"
                    ? styles.paidStatusText
                    : styles.pendingStatusText,
                ]}
              >
                {item.status}
              </Text>
            </View>
          </View>
        </View>
      </View>
      {index < displayedContributors.length - 1 && (
        <View style={styles.separator} />
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["left", "right", "bottom"]}>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <H2 style={styles.sectionTitle}>Contributors</H2>
          <View style={styles.headerButtons}>
            <TouchableOpacity onPress={onViewAll} style={styles.viewAllButton}>
              <P style={styles.viewAllText}>View All</P>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contributorsList}>
          <FlatList
            data={displayedContributors}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
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
  headerButtons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  viewAllText: {
    color: COLORS.accent,
    textDecorationLine: "underline",
  },
  viewAllButton: {
    marginLeft: 8,
  },
  contributorsList: {
    gap: 12,
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  contributorItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.accent,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    color: COLORS.textInverse,
    fontWeight: "bold",
    fontSize: 16,
  },
  contributorInfo: {
    flex: 1,
  },
  contributorName: {
    fontWeight: "500",
  },
  contributorAmount: {
    color: COLORS.textSecondary,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  contributorVia: {
    color: COLORS.textSecondary,
    fontSize: 12,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  paidStatus: {
    backgroundColor: "#E8F5E9",
  },
  pendingStatus: {
    backgroundColor: "#FFF3E0",
  },
  statusText: {
    fontSize: 12,
    fontWeight: "500",
  },
  paidStatusText: {
    color: COLORS.success,
  },
  pendingStatusText: {
    color: COLORS.pending,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 8,
  },
});

export default ContributorsList;
