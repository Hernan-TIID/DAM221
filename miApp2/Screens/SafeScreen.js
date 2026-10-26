
// 1. Zona de importaciones 

import { StyleSheet, Text, View, Image } from 'react-native';

// 2. Zona render o Main

export default function SafeScreen() {
  return (
    <View style={styles.container}>
      
        <text>  Practica 10 </text>
        <text>  Diego O Saul </text>

    </View>
  );
}


// 3. Zona de estilos y posicionamientos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
