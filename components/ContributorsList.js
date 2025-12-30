import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors";
import { Caption, H2, P } from "./Typography";

const ContributorsList = ({ contributors, onViewAll, onAddContributor }) => {
  // Limit to 3 contributors for initial display
  const displayedContributors = contributors.slice(0, 3);

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

        <ScrollView style={styles.contributorsList}>
          {displayedContributors.map((contributor) => (
            <View key={contributor.id} style={styles.contributorItem}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {contributor.name.charAt(0)}
                </Text>
              </View>
              <View style={styles.contributorInfo}>
                <P style={styles.contributorName}>{contributor.name}</P>
                <Caption style={styles.contributorAmount}>
                  ₹{contributor.amount}
                </Caption>
              </View>
              <View
                style={[
                  styles.statusBadge,
                  contributor.status === "PAID"
                    ? styles.paidStatus
                    : styles.pendingStatus,
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    contributor.status === "PAID"
                      ? styles.paidStatusText
                      : styles.pendingStatusText,
                  ]}
                >
                  {contributor.status}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
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
  },
  contributorItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: COLORS.inputBackground,
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
    color: "#FF9800",
  },
});

export default ContributorsList;
