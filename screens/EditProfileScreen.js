import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Background from "../components/Background";
import { H1, P } from "../components/Typography"; // Your common components
import { COLORS } from "../constants/colors";

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState({
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    phone: "+91 98765 43210",
    bio: "Travel enthusiast exploring India's heritage",
  });

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSaveChanges = () => {
    // Save the updated user profile information
    console.log("Saving user profile:", userData);
    // Navigate back to profile screen or show success message
    navigation.goBack();
  };

  const handleEditAvatar = () => {
    // Handle avatar editing logic
    console.log("Edit avatar pressed");
  };

  const handleChangePassword = () => {
    // Navigate to change password screen
    console.log("Change password pressed");
  };

  return (
    <Background style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Icon name="arrow-back" size={24} color={COLORS.primary} />
          </TouchableOpacity>

          <View style={styles.headerTitleContainer}>
            <H1 style={styles.headerTitle}>Edit Profile</H1>
          </View>

          <View style={styles.placeholder} />
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Profile Photo Section */}
          <View style={styles.avatarSection}>
            <TouchableOpacity
              style={styles.avatarContainer}
              onPress={handleEditAvatar}
            >
              <View style={styles.avatarPlaceholder}>
                <Icon name="person" size={40} color={COLORS.textSecondary} />
              </View>
              <View style={styles.editButton}>
                <Icon name="pencil" size={14} color={COLORS.surface} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleEditAvatar}>
              <P style={styles.changePhotoText}>Change Photo</P>
            </TouchableOpacity>
          </View>

          {/* Personal Info Card */}
          <View style={styles.card}>
            <H1 style={styles.cardTitle}>Personal Info</H1>
            <View style={styles.divider} />

            {/* Name */}
            <View style={styles.inputContainer}>
              <Icon name="person" size={18} color={COLORS.accent} />
              <TextInput
                style={styles.input}
                value={userData.name}
                onChangeText={(text) =>
                  setUserData({ ...userData, name: text })
                }
                placeholder="Full Name"
                placeholderTextColor={COLORS.textPlaceholder}
              />
            </View>

            {/* Email Input */}
            <View style={styles.inputContainer}>
              <Icon
                name="mail"
                size={18}
                color={COLORS.accent}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                value={userData.email}
                onChangeText={(text) =>
                  setUserData({ ...userData, email: text })
                }
                placeholder="Email Address"
                placeholderTextColor={COLORS.textPlaceholder}
                keyboardType="email-address"
              />
            </View>

            {/* Phone Input */}
            <View style={styles.inputContainer}>
              <Icon
                name="call"
                size={18}
                color={COLORS.accent}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                value={userData.phone}
                onChangeText={(text) =>
                  setUserData({ ...userData, phone: text })
                }
                placeholder="Phone Number"
                placeholderTextColor={COLORS.textPlaceholder}
                keyboardType="phone-pad"
              />
            </View>

            {/* Bio Input */}
            <View style={[styles.inputContainer, styles.bioContainer]}>
              <Icon
                name="document-text"
                size={18}
                color={COLORS.accent}
                style={styles.inputIcon}
              />
              <TextInput
                style={[styles.input, styles.bioInput]}
                value={userData.bio}
                onChangeText={(text) => setUserData({ ...userData, bio: text })}
                placeholder="Bio"
                placeholderTextColor={COLORS.textPlaceholder}
                multiline
              />
            </View>
          </View>

          {/* Save Changes Button */}
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleSaveChanges}
          >
            <P style={styles.primaryButtonText}>Save Changes</P>
          </TouchableOpacity>

          {/* Change Password Link */}
          <TouchableOpacity
            style={styles.changePasswordContainer}
            onPress={handleChangePassword}
          >
            <MaterialCommunityIcons
              name="lock-reset"
              size={22}
              color={COLORS.accent}
              style={styles.changePasswordIcon}
            />
            <P style={styles.changePasswordText}>Change Password</P>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
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
    paddingBottom: 40,
    paddingTop: 8,
  },
  avatarSection: {
    alignItems: "center",
    marginBottom: 24,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 8,
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
  changePhotoText: {
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.buttonGradientEnd,
    textAlign: "center",
  },
  card: {
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
    padding: 16,
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: "PlayfairDisplayBold",
    color: COLORS.textPrimary,
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "#EFE6D8",
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    borderRadius: 12,
    backgroundColor: COLORS.inputBackground,
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  inputIconContainer: {
    marginRight: 12,
    width: 18,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    fontFamily: "Inter",
    fontSize: 14,
    color: COLORS.inputText,
  },
  bioContainer: {
    height: 100,
  },
  bioInput: {
    height: "100%",
    textAlignVertical: "top",
    paddingTop: 8,
  },
  primaryButton: {
    height: 48,
    borderRadius: 22,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: COLORS.buttonGradientStart,
    borderBottomColor: COLORS.buttonGradientEnd,
    borderBottomWidth: 1,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.buttonText,
    fontFamily: "Inter",
  },
  changePasswordContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  changePasswordIcon: {
    marginRight: 8,
  },
  changePasswordText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.accent,
    fontFamily: "Inter",
  },
});

export default EditProfileScreen;
