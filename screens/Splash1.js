import { Image } from "expo-image";
import { Text, View } from "react-native";
import { COLORS } from "../constants/colors";
import Splash2Image from "../assets/images/Splash-2.png";
import SplashStyles from "../components/styles/SplashStyles";
import SystemUIManager from "../components/SystemUIManager";

const Splash1 = () => {
  return (
    <>
      <SystemUIManager backgroundColor={COLORS.splashBackground2} />
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
            source={Splash2Image}
            style={SplashStyles.illustration}
            contentFit="contain"
            cachePolicy="memory-disk"
          />
        </View>
      </View>
    </>
  );
};

export default Splash1;
