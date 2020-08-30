import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { checkAndRequestPermissions } from '../../utils';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export const Home = () => {
  useEffect(() => {
    checkAndRequestPermissions().then((res) => {
      console.log({ res });
    });
  }, []);

  return (
    <View style={styles.root}>
      <Text>Home Screen</Text>
    </View>
  );
};
