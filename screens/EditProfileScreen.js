import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Background from "../components/Background";
import InputField from "../components/InputField";
import { H1, P } from "../components/Typography"; // Your common components
import { COLORS } from "../constants/colors";
import { editProfileValidationSchema } from "../validation/editProfileValidation";

const EditProfileScreen = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSaveChanges = async (values, { setSubmitting }) => {
    setSubmitting(true);
    // Save the updated user profile information
    // Navigate back to profile screen or show success message
    // In a real app, you would update the user data with an API call here
    setTimeout(() => {
      setSubmitting(false);
      navigation.goBack();
    }, 1000);
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

        <Formik
          initialValues={{
            name: "Aarav Sharma",
            email: "aarav.sharma@example.com",
            phone: "+91 98765 43210",
            bio: "Travel enthusiast exploring India's heritage",
          }}
          validationSchema={editProfileValidationSchema}
          onSubmit={handleSaveChanges}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            errors,
            touched,
            isValid,
            isSubmitting,
          }) => (
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
                    <Icon
                      name="person"
                      size={40}
                      color={COLORS.textSecondary}
                    />
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
                <InputField
                  label="Full Name"
                  value={values.name}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  error={touched.name && errors.name}
                  icon={<Icon name="person" size={18} color={COLORS.accent} />}
                  containerStyle={styles.inputContainer}
                  inputContainerStyle={styles.inputFieldContainer}
                  inputStyle={styles.inputField}
                />

                {/* Email Input */}
                <InputField
                  label="Email Address"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={touched.email && errors.email}
                  icon={<Icon name="mail" size={18} color={COLORS.accent} />}
                  keyboardType="email-address"
                  containerStyle={styles.inputContainer}
                  inputContainerStyle={styles.inputFieldContainer}
                  inputStyle={styles.inputField}
                />

                {/* Phone Input */}
                <InputField
                  label="Phone Number"
                  value={values.phone}
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  error={touched.phone && errors.phone}
                  icon={<Icon name="call" size={18} color={COLORS.accent} />}
                  keyboardType="phone-pad"
                  containerStyle={styles.inputContainer}
                  inputContainerStyle={styles.inputFieldContainer}
                  inputStyle={styles.inputField}
                />

                {/* Bio Input */}
                <InputField
                  label="Bio"
                  value={values.bio}
                  onChangeText={handleChange("bio")}
                  onBlur={handleBlur("bio")}
                  error={touched.bio && errors.bio}
                  icon={
                    <Icon
                      name="document-text"
                      size={18}
                      color={COLORS.accent}
                    />
                  }
                  multiline
                  containerStyle={[styles.inputContainer, styles.bioContainer]}
                  inputContainerStyle={styles.inputFieldContainer}
                  inputStyle={[styles.inputField, styles.bioInputField]}
                />
              </View>

              {/* Save Changes Button */}
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={handleSubmit}
                disabled={!isValid}
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
          )}
        </Formik>
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
  inputFieldContainer: {
    height: "auto",
    alignItems: "center",
    paddingHorizontal: 0,
  },
  inputField: {
    fontSize: 16,
    fontWeight: "400",
    color: COLORS.inputText,
    fontFamily: "Inter",
    paddingHorizontal: 0,
    paddingVertical: 12,
  },
  bioInputField: {
    minHeight: 80,
    textAlignVertical: "top",
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
  errorText: {
    color: COLORS.error,
    fontSize: 12,
    marginLeft: 20,
    marginTop: 4,
    marginBottom: 4,
  },
});

export default EditProfileScreen;
