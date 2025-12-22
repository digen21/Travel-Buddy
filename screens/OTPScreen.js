import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Background from "../components/Background";
import ImageBackgroundWrapper from "../components/ImageBackgroundWrapper";
import PrimaryButton from "../components/PrimaryButton";
import { H1, P } from "../components/Typography";
import { COLORS } from "../constants/colors";

const OTPScreen = ({ route }) => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(30);
  const [isTimerActive, setIsTimerActive] = useState(true);

  // Get email from route params if available
  const email = route?.params?.email || "user@example.com";

  // Refs for input fields
  const inputRefs = useRef([]);

  // Handle OTP input changes
  const handleOTPChange = (index, value) => {
    if (value.length === 0) {
      // If backspacing, move to previous field if needed
      setOtp((prev) => {
        const newOtp = [...prev];
        newOtp[index] = "";
        return newOtp;
      });

      if (index > 0 && value.length === 0) {
        inputRefs.current[index - 1].focus();
      }
    } else if (/^\d$/.test(value)) {
      // Only allow digits
      setOtp((prev) => {
        const newOtp = [...prev];
        newOtp[index] = value;
        return newOtp;
      });

      // Move to next field if available
      if (index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Handle back navigation
  const handleBack = () => {
    navigation.goBack();
  };

  // Handle OTP submission
  const handleSubmit = () => {
    // Check if all OTP fields are filled
    if (otp.some((digit) => digit === "")) {
      Alert.alert("Error", "Please enter the complete OTP");
      return;
    }

    setIsLoading(true);
    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false);
      // For now, allow login button click without alert
      navigation.navigate("Home"); // Navigate to home after successful OTP verification
    }, 1500);
  };

  // Handle resend OTP
  const handleResend = () => {
    if (isTimerActive) return; // Prevent resending while timer is active

    // Reset timer
    setTimer(30);
    setIsTimerActive(true);

    // Simulate resend OTP
    Alert.alert("OTP Resent", `OTP has been sent to ${email}`);
  };

  // Timer effect
  useEffect(() => {
    let interval = null;

    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
    }

    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  // Format timer as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Split timer into minutes and seconds for styling
  const [minutes, seconds] = formatTime(timer).split(":");

  return (
    <Background style={styles.container}>
      <ImageBackgroundWrapper>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 84}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          >
            <View style={styles.header}>
              <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <Icon name="arrow-back" size={24} color={COLORS.primary} />
              </TouchableOpacity>
            </View>

            <View style={styles.content}>
              <H1 style={styles.title}>Verification</H1>
              <P style={styles.description}>
                We've sent a sacred code to{" "}
                <Text style={styles.emailText}>{email}</Text>
              </P>

              <View style={styles.otpCard}>
                <View style={styles.otpInputContainer}>
                  {otp.map((digit, index) => (
                    <TextInput
                      key={index}
                      ref={(ref) => (inputRefs.current[index] = ref)}
                      style={[
                        styles.otpInput,
                        {
                          borderColor: digit
                            ? COLORS.otpInputActiveBorder
                            : COLORS.otpInputBorder,
                        },
                      ]}
                      value={digit}
                      onChangeText={(value) => handleOTPChange(index, value)}
                      maxLength={1}
                      keyboardType="number-pad"
                      textContentType="oneTimeCode"
                      autoFocus={index === 0}
                      cursorColor={COLORS.otpInputCursor}
                      onFocus={() => {
                        // Prevent automatic scrolling to focused input
                      }}
                    />
                  ))}
                </View>

                <View style={styles.timerContainer}>
                  <FontAwesome6
                    name="stopwatch"
                    size={16}
                    color={COLORS.textTertiary}
                    style={styles.timerIcon}
                  />
                  <P style={styles.timerText}>
                    Code expires in{" "}
                    <Text style={styles.timerMinutes}>{minutes}:</Text>
                    <Text style={styles.timerSeconds}>{seconds}</Text>
                  </P>
                </View>
              </View>

              <PrimaryButton
                title="Verify & Proceed"
                onPress={handleSubmit}
                loading={isLoading}
                style={styles.verifyButton}
              />

              <View style={styles.resendContainer}>
                <P style={styles.resendText}>Didn't receive the code?</P>
                <TouchableOpacity
                  onPress={handleResend}
                  disabled={isTimerActive}
                >
                  <P
                    style={[
                      styles.resendLink,
                      isTimerActive && styles.resendLinkDisabled,
                    ]}
                  >
                    Resend OTP
                  </P>
                </TouchableOpacity>
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
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 44, // Top safe area
    paddingBottom: 16,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.inputBackground, // Light circular container
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
    paddingBottom: 34, // Bottom safe area
  },
  title: {
    textAlign: "center",
    marginBottom: 16,
    fontFamily: "PlayfairDisplayBold",
    fontSize: 28,
    color: COLORS.textPrimary,
  },
  description: {
    textAlign: "center",
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 32,
  },
  emailText: {
    color: COLORS.textPrimary,
    fontWeight: "600",
  },
  otpCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    marginBottom: 32,
  },
  otpInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    marginBottom: 24,
    height: 52, // Fixed height to maintain consistent positioning
  },
  otpInput: {
    width: 52,
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: COLORS.otpInputBackground,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "PlayfairDisplayBold",
    fontWeight: "600",
    color: COLORS.otpInputText,
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  timerText: {
    fontSize: 13,
    color: COLORS.textTertiary,
    flexDirection: "row",
  },
  timerMinutes: {
    color: COLORS.textPrimary,
  },
  timerSeconds: {
    color: COLORS.buttonGradientEnd, // Temple Orange
  },
  verifyButton: {
    marginBottom: 24,
  },
  resendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  resendText: {
    fontSize: 13,
    color: COLORS.textTertiary,
  },
  resendLink: {
    fontSize: 13,
    fontWeight: "600",
    color: COLORS.accent, // Gold
  },
  resendLinkDisabled: {
    opacity: 0.5,
  },
});

export default OTPScreen;
