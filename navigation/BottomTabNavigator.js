import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";

// Import screens for bottom navigation
import {
  BlogsScreen,
  ExpenseOverviewScreen,
  ExploreScreen,
  HomeScreen,
  MapScreen,
  MyTripsScreen,
  ProfileScreen,
  TravelByScreen,
} from "../screens";

// Import the bottom navigation component
import BottomNavigation from "../components/BottomNavigation";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomNavigationTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="TravelBy" component={TravelByScreen} />
      <Tab.Screen name="MyTrips" component={MyTripsScreen} />
      <Tab.Screen name="ExpenseOverview" component={ExpenseOverviewScreen} />
      <Tab.Screen name="Blogs" component={BlogsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

// Custom tab bar component that renders our BottomNavigation
const BottomNavigationTabBar = (props) => {
  return (
    <View style={styles.tabBarContainer}>
      <BottomNavigation
        state={props.state}
        descriptors={props.descriptors}
        navigation={props.navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent", // Transparent to not interfere with our custom component
  },
});

export default BottomTabNavigator;
