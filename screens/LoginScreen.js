import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Alert,
  Image,
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

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // For now, navigate to OTP screen and pass the email
      navigation.navigate("OTP", { email: email });
    }, 1500);
  };

  const handleSignUp = () => {
    navigation.navigate("Register"); // Navigate to register screen
  };

  return (
    <Background style={styles.container}>
      <ImageBackgroundWrapper>
        <View style={styles.mainContainer}>
          <KeyboardAvoidingView
            style={styles.keyboardView}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              keyboardShouldPersistTaps="handled"
            >
              <View style={styles.content}>
                <View style={styles.iconContainer}>
                  <Image
                    source={require("../assets/app-icon-1.png")}
                    style={styles.appIcon}
                    resizeMode="contain"
                  />
                </View>
                <H1 style={styles.title}>Explore Ancient India</H1>
                <P style={styles.subtitle}>
                  Sign in to continue your journey through{"\n"}history
                </P>

                <View style={styles.form}>
                  <View style={styles.inputContainer}>
                    <InputField
                      label="Email"
                      placeholder="Enter your email"
                      value={email}
                      onChangeText={setEmail}
                      icon="mail-outline"
                      keyboardType="email-address"
                      autoCapitalize="none"
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
                  </View>

                  <LinkText style={styles.forgotPassword}>
                    Forgot Password?
                  </LinkText>

                  <PrimaryButton
                    title="Sign In"
                    onPress={handleLogin}
                    loading={isLoading}
                    style={styles.signInButton}
                  />

                  <View style={styles.dividerContainer}>
                    <View style={styles.dividerLine} />
                    <P style={styles.dividerText}>Or Continue With</P>
                    <View style={styles.dividerLine} />
                  </View>

                  <SecondaryButton
                    title="Google"
                    onPress={() => Alert.alert("Google login selected")}
                    style={styles.socialButton}
                  />

                  <P style={styles.signUpText}>
                    Don't Have an account?{" "}
                    <LinkText onPress={handleSignUp}>Signup</LinkText>
                  </P>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
          <P style={styles.bottom}>Discover the timeless beauty of India</P>
        </View>
      </ImageBackgroundWrapper>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  keyboardView: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.03,
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
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    borderRadius: 100,
    paddingTop: 10,
    alignSelf: "center",
  },
  appIcon: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  title: {
    textAlign: "center",
    marginBottom: 8,
    fontFamily: "PlayfairDisplayBold",
  },
  // fff8e7
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
    marginTop: 22,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginTop: 8,
  },
  signInButton: {
    marginTop: 24,
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
  socialButton: {
    marginTop: 8,
  },
  signUpText: {
    textAlign: "center",
    marginTop: 20,
  },
  bottom: {
    textAlign: "center",
    color: COLORS.textTertiary,
    paddingVertical: 16,
    fontSize: 14,
    fontFamily: "PlayfairDisplayItalic",
    letterSpacing: 0.5,
  },
});

export default LoginScreen;
