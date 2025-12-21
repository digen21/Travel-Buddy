import { Image, Text, View } from "react-native";
import SplashStyles from "../components/styles/SplashStyles";

const Splash2 = () => {
  return (
    <View style={SplashStyles.container}>
      {/* App Name */}
      <Text style={SplashStyles.appName}>Explore India</Text>

      {/* Horizontal Gold Divider */}
      <View style={SplashStyles.divider} />

      {/* Optional Tagline */}
      <Text style={SplashStyles.tagline}>
        Your journey through timeless beauty
      </Text>

      {/* Heritage Illustration using provided image */}
      <View style={SplashStyles.illustrationContainer}>
        <Image
          source={require("../assets/images/Splash-2.png")}
          style={SplashStyles.illustration}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Splash2;
