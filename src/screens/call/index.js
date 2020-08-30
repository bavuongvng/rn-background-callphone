import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export const Call = () => {
  return (
    <View style={styles.root}>
      <Text>Call Screen</Text>
    </View>
  );
};
