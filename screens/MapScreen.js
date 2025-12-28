import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
import SystemUIManager from '../components/SystemUIManager';

const MapScreen = () => {
  return (
    <>
      <SystemUIManager backgroundColor={COLORS.background} />
      <View style={styles.container}>
        <Text style={styles.text}>Map Screen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  text: {
    fontSize: 18,
    color: COLORS.primary,
  },
});

export default MapScreen;