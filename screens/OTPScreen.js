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
import OTPInputBox from "../components/OTPInputBox";
import PrimaryButton from "../components/PrimaryButton";
import { H1, LinkText, P } from "../components/Typography";
import { COLORS } from "../constants/colors";

const OTPScreen = () => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = () => {
    if (otp.length !== 4) {
      Alert.alert("Error", "Please enter the complete OTP code");
      return;
    }

    setIsLoading(true);
    // Simulate OTP verification`
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert("Success", "OTP verified successfully");
    }, 1500);
  };

  const handleResendOTP = () => {
    Alert.alert("OTP Resent", "A new OTP has been sent to your device");
  };

  return (
    <Background style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.content}>
            <H1 style={styles.title}>Verify OTP</H1>
            <P style={styles.subtitle}>
              Enter the 4-digit code sent to your device
            </P>

            <View style={styles.otpContainer}>
              <OTPInputBox length={4} onOTPChange={(value) => setOtp(value)} />
            </View>

            <P style={styles.helperText}>
              Didn't receive the code?{" "}
              <LinkText onPress={handleResendOTP}>Resend OTP</LinkText>
            </P>

            <PrimaryButton
              title="Verify & Continue"
              onPress={handleVerify}
              loading={isLoading}
              style={styles.verifyButton}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  title: {
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    textAlign: "center",
    color: COLORS.textTertiary,
    marginBottom: 32,
  },
  otpContainer: {
    marginVertical: 24,
    alignItems: "center",
  },
  helperText: {
    textAlign: "center",
    marginTop: 16,
  },
  verifyButton: {
    marginTop: 32,
  },
});

export default OTPScreen;
