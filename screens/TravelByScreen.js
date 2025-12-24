import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";

const TravelByScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Travel By Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  text: {
    fontSize: 18,
    color: COLORS.primary,
  },
});

export default TravelByScreen;
