import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Swiper from "../components/Swiper";
import { useAppContext } from "../contexts/AppContext";
import LoginScreen from "../screens/LoginScreen";
import OTPScreen from "../screens/OTPScreen";
import RegisterScreen from "../screens/RegisterScreen";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const { appState } = useAppContext();

  switch (appState) {
    case "splash":
      // Show splash screens
      return (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Splash" component={Swiper} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    case "auth":
      // Show authentication flow (Login/Register/OTP)
      return (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="OTP" component={OTPScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    case "main":
      // Show main app with bottom tabs
      return (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="BottomTabs"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="BottomTabs" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    default:
      // Loading state - return nothing or a loading component
      return null;
  }
};

export default StackNavigation;
