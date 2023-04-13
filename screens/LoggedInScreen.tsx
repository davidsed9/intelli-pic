import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoggedInScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You are now logged in!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default LoggedInScreen;
