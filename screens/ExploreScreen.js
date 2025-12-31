import { ScrollView, StyleSheet, View } from "react-native";
import ContributorsList from "../components/ContributorsList";
import WalletActivityList from "../components/WalletActivityList";
import { COLORS } from "../constants/colors";

const ExploreScreen = () => {
  // Sample data for both components
  const sampleContributors = [
    {
      id: 1,
      name: "Rajesh Kumar",
      amount: 1000,
      status: "PAID",
      paymentMethod: "CASH",
    },
    {
      id: 2,
      name: "Priya Sharma",
      amount: 1500,
      status: "PENDING",
      paymentMethod: "ONLINE",
    },
    {
      id: 3,
      name: "Amit Patel",
      amount: 2000,
      status: "PAID",
      paymentMethod: "CASH",
    },
  ];

  const sampleWalletActivities = [
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

  const handleViewAllContributors = () => {
    console.log("View All Contributors");
  };

  const handleViewAllWalletActivity = () => {
    console.log("View All Wallet Activity");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.section}>
        <ContributorsList
          contributors={sampleContributors}
          onViewAll={handleViewAllContributors}
        />
      </View>

      <View style={styles.section}>
        <WalletActivityList
          activities={sampleWalletActivities}
          onViewAll={handleViewAllWalletActivity}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 16,
    paddingBottom: 20,
  },
  section: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
});

export default ExploreScreen;
