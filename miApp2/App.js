
import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import MenuScreen from './Screens/MenuScreen';



export default function App() {

  return (
    <View style={styles.container}>
      <MenuScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});
