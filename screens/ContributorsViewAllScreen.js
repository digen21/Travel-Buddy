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

const ContributorsViewAllScreen = ({ route, navigation }) => {
  // Get contributors data from route params or use default data
  const routeContributors = route?.params?.contributors || [];

  // Sample data for fallback
  const contributors =
    routeContributors.length > 0
      ? routeContributors
      : [
          { id: 1, name: "Rajesh Kumar", amount: 1000, status: "PAID" },
          { id: 2, name: "Priya Sharma", amount: 1000, status: "PAID" },
          { id: 3, name: "Amit Patel", amount: 1000, status: "PENDING" },
          { id: 4, name: "Sneha Reddy", amount: 1000, status: "PAID" },
          { id: 5, name: "Vikram Singh", amount: 1000, status: "PENDING" },
        ];

  return (
    <SafeAreaView
      style={styles.container}
      edges={["left", "right", "bottom", "top"]}
    >
      <Background style={styles.background}>
        <SystemUIManager backgroundColor={COLORS.background} />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Top Bar */}
          <View style={styles.topBar}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name="arrow-back" size={24} color={COLORS.primary} />
            </TouchableOpacity>
            <H1 style={styles.screenTitle}>Contributors</H1>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => console.log("Add new contributor")}
            >
              <Icon name="person-add" size={24} color={COLORS.primary} />
            </TouchableOpacity>
          </View>

          {/* Contributors List */}
          <View style={styles.section}>
            {contributors.map((contributor) => (
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
          </View>
        </ScrollView>
      </Background>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  background: {
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
  addButton: {
    padding: 8,
  },
  section: {
    marginBottom: 24,
  },
  contributorItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: COLORS.inputBackground,
    borderRadius: 12,
    marginBottom: 12,
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

export default ContributorsViewAllScreen;
