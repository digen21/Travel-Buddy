import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppContext } from '../contexts/AppContext';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Swiper from '../components/Swiper';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const { showAuthScreens } = useAppContext();

  if (showAuthScreens) {
    // If user has moved past splash screens, show auth stack
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
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
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
  }
};

export default StackNavigation;