import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

const ExpenseOverviewScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Expense Overview Screen</Text>
    </View>
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

export default ExpenseOverviewScreen;