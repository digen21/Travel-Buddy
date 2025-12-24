import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import Background from "../components/Background";
import ImageBackgroundWrapper from "../components/ImageBackgroundWrapper";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import { H1, LinkText, P } from "../components/Typography";
import { COLORS } from "../constants/colors";
import { useAppContext } from "../contexts/AppContext";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const { navigateToAuth } = useAppContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    setIsLoading(true);
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      // After successful registration, update the app state to show main app
      // and navigate to the main app with bottom tabs
      navigateToAuth();
      // The app context will ensure the user stays in the authenticated flow
    }, 1500);
  };

  const handleBackToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <Background style={styles.container}>
      <ImageBackgroundWrapper>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.content}>
              <H1 style={styles.title}>Start Your Story</H1>
              <P style={styles.subtitle}>
                Join us to discover the roots of ancient India
              </P>

              <View style={styles.form}>
                <View style={styles.inputContainer}>
                  <InputField
                    label="Full Name"
                    placeholder="Enter your full name"
                    value={name}
                    onChangeText={setName}
                    icon="person-outline"
                  />

                  <InputField
                    label="Email"
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                    icon="mail-outline"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={styles.inputMarginTop}
                  />

                  <InputField
                    label="Password"
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    icon="lock-closed-outline"
                    rightIcon={showPassword ? "eye-off" : "eye"}
                    onRightIconPress={() => setShowPassword(!showPassword)}
                    secureTextEntry={!showPassword}
                    style={styles.inputMarginTop}
                  />
                  {/* 
                  <InputField
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    icon="lock-closed-outline"
                    rightIcon={showConfirmPassword ? "eye-off" : "eye"}
                    onRightIconPress={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    secureTextEntry={!showConfirmPassword}
                    style={styles.inputMarginTop}
                  /> */}
                </View>

                <PrimaryButton
                  title="Sign Up"
                  onPress={handleRegister}
                  loading={isLoading}
                  style={styles.signUpButton}
                />

                {/* <SecondaryButton
                  title="Back to Login"
                  onPress={handleBackToLogin}
                  style={styles.backButton}
                /> */}

                <View style={styles.dividerContainer}>
                  <View style={styles.dividerLine} />
                  <P style={styles.dividerText}>Or Continue With</P>
                  <View style={styles.dividerLine} />
                </View>

                <SecondaryButton
                  title="Google"
                  onPress={() => Alert.alert("Google login selected")}
                  style={styles.socialButton}
                  imgIcon={require("../assets/images/google-icon-logo-svgrepo-com.svg")}
                />
              </View>
              <View>
                <P style={styles.signInText}>
                  Already have an account?{" "}
                  <LinkText onPress={handleBackToLogin} style={styles.linkText}>
                    Login
                  </LinkText>
                </P>

                <P style={styles.termsText}>
                  By Registering, you agree to our Terms of Service and Privacy
                  Policy related to heritage preservation.
                </P>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackgroundWrapper>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.02,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.inputBorder,
  },
  dividerText: {
    marginHorizontal: 16,
    color: COLORS.textTertiary,
    fontSize: 14,
  },
  title: {
    textAlign: "center",
    marginBottom: 8,
    fontFamily: "PlayfairDisplayBold",
  },
  subtitle: {
    textAlign: "center",
    color: COLORS.textTertiary,
    marginBottom: 32,
    fontSize: 14,
  },
  form: {
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
    backgroundColor: COLORS.surface, // White background
    borderRadius: 10, // Rounded corners
    padding: 24, // Add some padding inside the form
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4, // For Android shadow
    display: "flex",
    borderColor: COLORS.inputBorder,
    borderWidth: 1,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  inputMarginTop: {
    marginTop: 20,
  },
  signUpButton: {
    marginTop: 24,
  },
  backButton: {
    marginTop: 16,
  },
  termsText: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 12,
    color: COLORS.textSecondary,
    width: "100%",
    alignSelf: "center",
  },
  signInText: {
    textAlign: "center",
    marginTop: 28,
  },
  linkText: {
    fontSize: 14,
  },
});

export default RegisterScreen;
