import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { FontLoaderWrapper, Swiper } from "./components";

export default function App() {
  return (
    <SafeAreaProvider>
      <FontLoaderWrapper>
        <Swiper />
        <StatusBar style="auto" />
      </FontLoaderWrapper>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
