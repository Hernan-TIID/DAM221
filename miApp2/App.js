//Zona de importaciones

import { StatusBar } from 'expo-status-bar';
import { Saludo } from './components/Saludo';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo2 } from './components/saludo2';

//Zona render o main
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo ReactNative!</Text>
      <Image source={require('./assets/wave.png')}/>
      <text>  ----------------------------</text>
      <Saludo/>
      <text>  ----------------------------</text>
      <Saludo2/>
      <StatusBar style="auto" />
    </View>
  );
}

//Zona de estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
