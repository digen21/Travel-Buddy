import { useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import PrimaryButton from "../components/PrimaryButton";
import { H1, P } from "../components/Typography";
import { COLORS } from "../constants/colors";

const SuccessfulAddedFundsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { amountAdded = "5,000", newBalance = "12,500" } = route.params || {};

  return (
    <View style={styles.container}>
      {/* Top Close Button */}
      <View style={styles.topSection}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="close" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Success Icon */}
        <View style={styles.successIconContainer}>
          <View>
            <View style={styles.successIconOuterRing}>
              <Octicons
                name="check-circle-fill"
                size={60}
                color={COLORS.buttonGradientStart}
              />
            </View>
          </View>
        </View>

        {/* Primary Title */}
        <H1 style={styles.title}>
          Funds Added
          {"\n"} Successfully!
        </H1>

        {/* Description Text */}
        <P style={styles.description}>
          ₹{amountAdded} has been securely added to {"\n"} your shared trip
          wallet.
        </P>

        {/* Confirmation Note */}
        <View style={styles.confirmationContainer}>
          <Icon name="check-circle" size={16} color={COLORS.success} />
          <P style={styles.confirmationText}>Contributors notified</P>
        </View>

        {/* Summary Card */}
        <View style={styles.card}>
          <View style={styles.row}>
            <P style={styles.label}>Amount Added</P>
            <P style={styles.value}>+ ₹{amountAdded}</P>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <P style={styles.label}>New Balance</P>
            <Text style={styles.playfairValue}>₹{newBalance}</Text>
          </View>

          <View style={styles.bottomAccent} />
        </View>
        {/* Footer with Action Buttons */}
        <View style={styles.footer}>
          <PrimaryButton
            title="View Trip Wallet"
            style={styles.primaryButton}
            onPress={() => navigation.goBack()}
          />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.secondaryButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background, // Cream/beige background
  },
  topSection: {
    paddingTop: 50, // Top safe area
    paddingHorizontal: 20,
    alignItems: "flex-end",
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.inputBackground,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 100,
  },
  successIconContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  successIconOuterRing: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: COLORS.buttonGradientStart, // Temple Orange (#D97706)
    shadowColor: COLORS.buttonGradientStart,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 30,
  },
  successIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.buttonGradientEnd, // Temple Orange (#D97706)
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontFamily: "PlayfairDisplayBold",
    marginBottom: 16,
    fontSize: 28, // 26-28px range
    fontWeight: "600",
    color: COLORS.primary, // #1A1A1A
  },
  description: {
    textAlign: "center",
    fontSize: 15, // 14-15px range
    color: COLORS.textSecondary, // #4A4A4A
    marginBottom: 24,
  },
  confirmationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
    gap: 8,
  },
  confirmationText: {
    fontSize: 14, // 13-14px range
    color: "#8B7355", // Warm neutral/muted brown
  },
  card: {
    backgroundColor: COLORS.surface, // White background
    borderRadius: 16,
    padding: 20,
    shadowColor: COLORS.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: COLORS.inputDisabledBackground,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: COLORS.textSecondary,
    fontFamily: "Inter",
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
    color: COLORS.primary,
    fontFamily: "PlayfairDisplayBold",
  },
  playfairValue: {
    fontFamily: "PlayfairDisplayBold",
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.primary,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.divider,
    marginVertical: 8,
  },
  bottomAccent: {
    height: 2.5,
    borderRadius: 1.25,
    backgroundColor: COLORS.accent, // Gold accent
    width: 60,
    alignSelf: "center",
    marginTop: 8,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 20,
  },
  primaryButton: {
    borderRadius: 22,
    marginBottom: 16,
  },
  secondaryButtonText: {
    fontFamily: "Inter",
    fontSize: 15,
    fontWeight: "500",
    color: "#5C4833", // Dark brown/muted color
    textAlign: "center",
  },
});

export default SuccessfulAddedFundsScreen;
