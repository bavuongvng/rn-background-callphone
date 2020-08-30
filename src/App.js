import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Home } from './screens';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default () => {
  return (
    <View style={styles.root}>
      <Home />
    </View>
  );
};
