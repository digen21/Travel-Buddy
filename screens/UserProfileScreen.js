import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Background from "../components/Background";
import { H1, P } from "../components/Typography";
import { COLORS } from "../constants/colors";

// Profile Card Component
const ProfileCard = ({ name, phone, location, onEditAvatar }) => {
  return (
    <View style={styles.profileCard}>
      <TouchableOpacity style={styles.avatarContainer} onPress={onEditAvatar}>
        <View style={styles.avatarPlaceholder}>
          <View>
            <Icon name="person" size={40} color={COLORS.textSecondary} />
          </View>
        </View>
        <View style={styles.editButton}>
          <View>
            <Icon name="pencil" size={14} color={COLORS.surface} />
          </View>
        </View>
      </TouchableOpacity>
      <H1 style={styles.profileName}>{name}</H1>
      <P style={styles.profilePhone}>{phone}</P>
      <P style={styles.profileLocation}>{location}</P>
    </View>
  );
};

// Settings List Item Component
const SettingsListItem = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.settingsItem} onPress={onPress}>
      <View style={styles.iconContainer}>
        <View>
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={COLORS.buttonGradientEnd}
          />
        </View>
      </View>
      <P style={styles.settingsLabel}>{label}</P>
      <View>
        <Icon name="chevron-forward" size={20} color={COLORS.textTertiary} />
      </View>
    </TouchableOpacity>
  );
};

// Outline Button Component
const OutlineButton = ({ title, onPress, icon }) => {
  return (
    <TouchableOpacity style={styles.logoutButton} onPress={onPress}>
      <View>
        <Icon
          name={icon}
          size={16}
          color={COLORS.buttonGradientEnd}
          style={styles.logoutIcon}
        />
      </View>
      <P style={styles.logoutText}>{title}</P>
    </TouchableOpacity>
  );
};

const UserProfileScreen = () => {
  const navigation = useNavigation();
  const [userData] = useState({
    name: "Aarav Sharma",
    phone: "+91 98765 43210",
    location: "Mumbai, India",
  });

  const handleBack = () => {
    navigation.goBack();
  };

  const handleEditAvatar = () => {
    // Handle avatar editing logic
    console.log("Edit avatar pressed");
  };

  const handleSettingsItemPress = (item) => {
    console.log(`${item} pressed`);
    // Navigate to specific setting screen based on item
    if (item === "Edit Profile") {
      navigation.navigate("EditProfile");
    }
  };

  const handleLogout = () => {
    // Handle logout logic
    console.log("Logout pressed");
  };

  return (
    <Background style={styles.container}>
      {/* <ImageBackgroundWrapper> */}
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <View>
              <Icon name="arrow-back" size={24} color={COLORS.primary} />
            </View>
          </TouchableOpacity>
          <H1 style={styles.headerTitle}>My Profile</H1>
          <View style={styles.placeholder} />
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Profile Card */}
          <ProfileCard
            name={userData.name}
            phone={userData.phone}
            location={userData.location}
            onEditAvatar={handleEditAvatar}
          />

          {/* Settings Section */}
          <P style={styles.sectionLabel}>SETTINGS</P>

          <View style={styles.settingsCard}>
            <SettingsListItem
              icon="credit-card"
              label="Edit Profile"
              onPress={() => handleSettingsItemPress("Edit Profile")}
            />
            <View style={styles.divider} />
            <SettingsListItem
              icon="temple-buddhist"
              label="Saved Heritage Sites"
              onPress={() => handleSettingsItemPress("Saved Heritage Sites")}
            />
            <View style={styles.divider} />
            <SettingsListItem
              icon="notification-clear-all"
              label="Notifications"
              onPress={() => handleSettingsItemPress("Notifications")}
            />
            <View style={styles.divider} />
            <SettingsListItem
              icon="help-circle"
              label="Help & Support"
              onPress={() => handleSettingsItemPress("Help & Support")}
            />
          </View>

          {/* Logout Button */}
          <OutlineButton
            title="Logout"
            onPress={handleLogout}
            icon="log-out-outline"
          />

          {/* Footer Text */}
          <P style={styles.footerText}>Version 2.4.0 • Built with Heritage</P>
        </ScrollView>
      </SafeAreaView>
      {/* </ImageBackgroundWrapper> */}
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 8,
    paddingBottom: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.inputBackground,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: "PlayfairDisplayBold",
    color: COLORS.textPrimary,
  },
  placeholder: {
    width: 40, // To balance the back button space
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 120, // Increased to account for FAB button and safe area
    paddingTop: 8,
  },
  profileCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    shadowColor: COLORS.shadowColor,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    marginBottom: 24,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 16,
  },
  avatarPlaceholder: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: COLORS.inputBackground,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.buttonGradientEnd,
    borderStyle: "solid",
  },
  editButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: COLORS.buttonGradientEnd,
    alignItems: "center",
    justifyContent: "center",
  },
  profileName: {
    fontSize: 22,
    fontFamily: "PlayfairDisplayBold",
    color: COLORS.textPrimary,
    marginBottom: 4,
    textAlign: "center",
  },
  profilePhone: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 4,
    textAlign: "center",
  },
  profileLocation: {
    fontSize: 13,
    color: COLORS.textTertiary,
    textAlign: "center",
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.textPlaceholder,
    letterSpacing: 1,
    marginBottom: 12,
  },
  settingsCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    shadowColor: COLORS.shadowColor,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    marginBottom: 24,
  },
  settingsItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.inputBackground,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  settingsLabel: {
    flex: 1,
    fontSize: 16,
    color: COLORS.textPrimary,
    fontWeight: "500",
  },
  divider: {
    height: 1,
    backgroundColor: "#EFEFEF",
    marginHorizontal: 16,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: COLORS.buttonGradientEnd,
    marginBottom: 32, // Increased margin to ensure visibility above FAB
  },
  logoutIcon: {
    marginRight: 8,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.buttonGradientEnd,
  },
  footerText: {
    fontSize: 12,
    color: COLORS.textPlaceholder,
    textAlign: "center",
    fontFamily: "PlayfairDisplayItalic",
  },
});

export default UserProfileScreen;
