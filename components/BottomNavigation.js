import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors";

const BottomNavigation = ({ state, navigation }) => {
  // Extract the current active route name from the state
  const activeRouteName = state?.routes[state?.index]?.name;

  // Define the screens that should be in the bottom navigation
  const navigationItems = [
    {
      name: "Home",
      icon: "home",
      activeIcon: "home",
      label: "Home",
    },
    {
      name: "Explore",
      icon: "explore",
      activeIcon: "explore",
      label: "Explore",
    },
    {
      name: "TravelBy", // Placeholder to position the FAB correctly
      icon: "add",
      activeIcon: "add",
      label: "",
      isFab: true, // Special flag for the FAB
    },
    {
      name: "MyTrips",
      icon: "calendar-today",
      activeIcon: "calendar-today",
      label: "Trips",
    },
    {
      name: "Profile",
      icon: "person",
      activeIcon: "person",
      label: "Profile",
    },
  ];

  const handleNavigation = (screenName) => {
    if (screenName !== "TravelBy") {
      // Avoid navigating to the FAB placeholder
      navigation.navigate(screenName);
    }
  };

  const handleFabPress = () => {
    // Navigate to Expense screen when FAB is pressed
    navigation.navigate("Expense");
  };

  // Function to render a navigation item
  const renderNavItem = (item, index) => {
    if (item.isFab) {
      return <FabButton key={index} onPress={handleFabPress} />;
    }

    const isActive = activeRouteName === item.name;

    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.navItem,
          index === 1 && { marginRight: 20 },
          index === 3 && { marginLeft: 20 },
        ]}
        onPress={() => handleNavigation(item.name)}
        accessibilityLabel={item.label}
        accessibilityState={{ selected: isActive }}
      >
        <View style={styles.iconContainer}>
          <MaterialIcons
            name={isActive ? item.activeIcon : item.icon}
            size={22}
            color={isActive ? COLORS.buttonGradientStart : COLORS.textTertiary}
          />
        </View>
        <Text
          style={[
            styles.navLabel,
            {
              color: isActive
                ? COLORS.buttonGradientStart
                : COLORS.textTertiary,
            },
          ]}
        >
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={["left", "right", "bottom"]}>
      <View style={styles.navBar}>
        {/* Left side items */}
        <View style={styles.navSection}>
          {[
            renderNavItem(navigationItems[0], 0),
            renderNavItem(navigationItems[1], 1),
          ]}
        </View>

        {/* Center FAB */}
        {renderNavItem(navigationItems[2], 2)}

        {/* Right side items */}
        <View style={styles.navSection}>
          {[
            renderNavItem(navigationItems[3], 3),
            renderNavItem(navigationItems[4], 4),
          ]}
        </View>
      </View>
    </SafeAreaView>
  );
};

// FAB Component
const FabButton = ({ onPress }) => {
  const scaleValue = React.useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 4, // More bouncy
      useNativeDriver: true,
    }).start(() => {
      onPress();
    });
  };

  return (
    <View style={styles.fabContainer}>
      <Animated.View
        style={[styles.fab, { transform: [{ scale: scaleValue }] }]}
      >
        <Pressable
          style={styles.fabPressable}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          android_ripple={{ color: "rgba(255, 255, 255, 0.3)", radius: 28 }}
        >
          <AntDesign name="plus" size={24} color={COLORS.textInverse} />
        </Pressable>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
  },
  navBar: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: 72,
    backgroundColor: COLORS.surface,
    borderTopWidth: 0.5,
    borderTopColor: COLORS.neutralDark,
    shadowColor: COLORS.shadowColor,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 8,
    paddingBottom: 6, // Reduce extra bottom padding
  },
  navSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingHorizontal: 10, // Adjusted for better spacing
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 5, // Reduced to allow for more equal spacing
    minWidth: 50, // Smaller width for better distribution
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  navLabel: {
    fontSize: 11,
    fontFamily: "Inter",
    fontWeight: "500",
    lineHeight: 14,
  },
  fabContainer: {
    position: "absolute",
    bottom: 36, // keep FAB slightly above bar
    left: "50%",
    transform: [{ translateX: -28 }],
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  fab: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.buttonGradientStart,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: COLORS.buttonGradientStart, // Using consistent shadow color
    shadowOffset: {
      width: 0,
      height: 6, // Increased shadow offset for better elevation effect
    },
    shadowOpacity: 0.03,
    shadowRadius: 12, // Adjusted for better visual appearance
    elevation: 12,
    borderWidth: 4, // Add border for white radius effect
    borderColor: COLORS.surface, // White border
  },
  fabPressable: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BottomNavigation;
