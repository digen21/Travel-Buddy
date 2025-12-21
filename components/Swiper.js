// TODO: This component will be replaced with react-native-swiper-flatlist in the future
// See: https://www.npmjs.com/package/react-native-swiper-flatlist
// This will reduce manual work and make the code cleaner and more maintainable
import React, { useEffect, useState } from "react";
import {
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";
import { Splash1, Splash2, Splash3 } from "../screens";
import SplashStyles from "./styles/SplashStyles";

const { width } = Dimensions.get("window");

const Swiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = React.useRef(new Animated.Value(0)).current;

  // Preload all images for smooth experience
  useEffect(() => {
    const images = [
      require("../assets/images/Splash-1.png"),
      require("../assets/images/Splash-2.png"),
      require("../assets/images/Splash-3.png"),
    ];
  }, []);

  const screens = [Splash1, Splash2, Splash3];

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      return Math.abs(gestureState.dx) > Math.abs(gestureState.dy) * 2;
    },
    onPanResponderMove: (evt, gestureState) => {
      // Directly adjust the translation based on the current index and drag
      const newTranslateX = -currentIndex * width + gestureState.dx;
      translateX.setValue(newTranslateX);
    },
    onPanResponderRelease: (evt, gestureState) => {
      const velocity = gestureState.vx;
      const draggedDistance = gestureState.dx;
      const shouldAdvance = draggedDistance < -50 || velocity < -0.5; // Swipe left
      const shouldGoBack = draggedDistance > 50 || velocity > 0.5; // Swipe right

      let targetIndex = currentIndex;
      if (shouldAdvance && currentIndex < screens.length - 1) {
        targetIndex = currentIndex + 1;
      } else if (shouldGoBack && currentIndex > 0) {
        targetIndex = currentIndex - 1;
      }

      if (targetIndex !== currentIndex) {
        // Animate to the new screen
        Animated.timing(translateX, {
          toValue: -targetIndex * width,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          setCurrentIndex(targetIndex);
        });
      } else {
        // Bounce back to current screen
        Animated.spring(translateX, {
          toValue: -currentIndex * width,
          useNativeDriver: true,
          friction: 8,
          tension: 100,
        }).start();
      }
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[styles.swipeArea, { transform: [{ translateX }] }]}
        {...panResponder.panHandlers}
      >
        <View style={styles.screenContainer}>
          {screens.map((ScreenComponent, index) => (
            <View key={index} style={[styles.screen, { left: index * width }]}>
              <ScreenComponent />
            </View>
          ))}
        </View>
      </Animated.View>

      {/* Dots indicator */}
      <View style={SplashStyles.dotsContainer}>
        {screens.map((_, index) => (
          <View
            key={index}
            style={[
              SplashStyles.dot,
              {
                backgroundColor:
                  index === currentIndex ? COLORS.accent : COLORS.neutralDark,
              },
            ]}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  swipeArea: {
    flex: 1,
  },
  screenContainer: {
    height: "100%",
    flexDirection: "row",
  },
  screen: {
    width: width,
    height: "100%",
    position: "absolute",
    top: 0,
    bottom: 0,
  },
});

export default Swiper;
