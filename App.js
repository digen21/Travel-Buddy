import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppProvider } from "./contexts/AppContext";
import StackNavigation from "./navigation/StackNavigation";
import FontLoaderWrapper from "./components/FontLoaderWrapper";
import SystemUIManager from "./components/SystemUIManager";
import { COLORS } from "./constants/colors";

export default function App() {
  return (
    <SafeAreaProvider>
      <FontLoaderWrapper>
        <AppProvider>
          <SystemUIManager backgroundColor={COLORS.background} />
          <StackNavigation />
        </AppProvider>
      </FontLoaderWrapper>
    </SafeAreaProvider>
  );
}
