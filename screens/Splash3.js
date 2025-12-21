import { Text, View } from "react-native";
import { Image } from "expo-image";
import SplashStyles from "../components/styles/SplashStyles";

const Splash3 = () => {
  return (
    <View style={SplashStyles.container}>
      {/* App Name */}
      <Text style={SplashStyles.appName}>India Unveiled</Text>

      {/* Horizontal Gold Divider */}
      <View style={SplashStyles.divider} />

      {/* Optional Tagline */}
      <Text style={SplashStyles.tagline}>
        Experience the richness of culture
      </Text>

      {/* Heritage Illustration using provided image */}
      <View style={SplashStyles.illustrationContainer}>
        <Image
          source={require("../assets/images/Splash-3.png")}
          style={SplashStyles.illustration}
          contentFit="contain"
          cachePolicy="memory-disk"
        />
      </View>
    </View>
  );
};

export default Splash3;
