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
import SystemUIManager from "../components/SystemUIManager";
import { H1, P } from "../components/Typography";
import { COLORS } from "../constants/colors";

const ContributorsViewAllScreen = ({ route, navigation }) => {
  // Get contributors data from route params or use default data
  const routeContributors = route?.params?.contributors || [];

  // Sample data for fallback
  const [contributors, setContributors] = useState(
    routeContributors.length > 0
      ? routeContributors
      : [
          { id: 1, name: "Rajesh Kumar" },
          { id: 2, name: "Priya Sharma" },
          { id: 3, name: "Amit Patel" },
          { id: 4, name: "Sneha Reddy" },
          { id: 5, name: "Vikram Singh" },
        ]
  );

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
            <H1 style={styles.screenTitle}>Trip Contributors: Taj Mahal</H1>
            <View style={styles.placeholder} />
          </View>

          {/* Top Summary Card */}
          <View style={styles.summaryCard}>
            <View style={styles.summaryContainer}>
              <View style={styles.summaryColumn}>
                <P style={styles.summaryLabel}>Total Raised</P>
                <P style={styles.summaryValue}>₹5,000</P>
              </View>
              <View style={styles.verticalSeparator} />
              <View style={styles.summaryColumn}>
                <P style={styles.summaryLabel}>Goal</P>
                <P style={styles.summaryValue}>₹10,000</P>
              </View>
            </View>
          </View>

          {/* Contributors List */}
          <View style={styles.section}>
            <FlatList
              data={contributors}
              renderItem={({ item, index }) => (
                <View>
                  <View style={styles.contributorItem}>
                    <View style={styles.avatar}>
                      <Text style={styles.avatarText}>
                        {item.name.charAt(0)}
                      </Text>
                    </View>
                    <View style={styles.contributorInfo}>
                      <P style={styles.contributorName}>{item.name}</P>
                      <View style={styles.statusContainer}>
                        <View style={styles.joinedStatus}>
                          <P style={styles.joinedStatusText}>Joined</P>
                        </View>
                      </View>
                    </View>
                  </View>
                  {index < contributors.length - 1 && (
                    <View style={styles.separator} />
                  )}
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
            />
          </View>
        </ScrollView>

        {/* Action Section with CTA Button */}
        <View style={styles.actionSection}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>
              + Invite More Contributors
            </Text>
          </TouchableOpacity>
        </View>
      </Background>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  background: {
    flex: 1,
    backgroundColor: COLORS.surface,
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
    fontFamily: "PlayfairDisplay",
    textAlign: "center",
    flex: 1,
  },
  placeholder: {
    width: 40, // To balance the back button space
  },
  section: {
    marginBottom: 24,
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
  contributorName: {
    fontFamily: "PlayfairDisplay",
    fontWeight: "500",
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 8,
  },
  summaryCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    shadowColor: COLORS.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  summaryLabel: {
    fontFamily: "PlayfairDisplay",
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  summaryValue: {
    fontFamily: "PlayfairDisplay",
    fontSize: 24,
    fontWeight: "600",
    color: COLORS.primary,
  },
  summaryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  summaryColumn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  verticalSeparator: {
    width: 1,
    backgroundColor: COLORS.textSecondary,
    marginHorizontal: 12,
    alignSelf: "stretch",
  },
  contributorInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusContainer: {
    justifyContent: "center",
  },
  joinedStatus: {
    backgroundColor: "#F5F5DC", // warm beige
    borderColor: "#D4AF37", // gold tint
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  joinedStatusText: {
    fontFamily: "PlayfairDisplay",
    fontSize: 12,
    fontWeight: "500",
    color: "#3E2723", // dark brown
  },
  actionSection: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
  },
  primaryButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    backgroundColor: COLORS.buttonGradientEnd,
    borderRadius: 22,
    shadowColor: COLORS.buttonGradientEnd,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  primaryButtonText: {
    fontFamily: "PlayfairDisplay",
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.textInverse,
    marginRight: 8,
  },
});

export default ContributorsViewAllScreen;
