import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppProvider } from "./contexts/AppContext";
import StackNavigation from "./navigation/StackNavigation";
import FontLoaderWrapper from "./components/FontLoaderWrapper";

export default function App() {
  return (
    <SafeAreaProvider>
      <FontLoaderWrapper>
        <AppProvider>
          <StackNavigation />
          <StatusBar style="auto" />
        </AppProvider>
      </FontLoaderWrapper>
    </SafeAreaProvider>
  );
}
