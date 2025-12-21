import { Image, Text, View } from "react-native";
import SplashStyles from "../components/styles/SplashStyles";

const Splash1 = () => {
  return (
    <View style={SplashStyles.container}>
      {/* App Name */}
      <Text style={SplashStyles.appName}>Travel India</Text>

      {/* Horizontal Gold Divider */}
      <View style={SplashStyles.divider} />

      {/* Optional Tagline */}
      <Text style={SplashStyles.tagline}>
        Discover the wonders of our heritage
      </Text>

      {/* Heritage Illustration using provided image */}
      <View style={SplashStyles.illustrationContainer}>
        <Image
          source={require("../assets/images/Splash-1.png")}
          style={SplashStyles.illustration}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Splash1;
