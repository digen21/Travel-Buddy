import { ImageBackground, StyleSheet } from "react-native";

const ImageBackgroundWrapper = ({ children, style, ...props }) => {
  return (
    <ImageBackground
      source={require("../assets/images/transparent_box.png")}
      style={[styles.imageBackground, style]}
      imageStyle={styles.imageStyle}
      {...props}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.02,
  },
});

export default ImageBackgroundWrapper;
