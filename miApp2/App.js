// 1. Zona de importaciones 

import { StyleSheet, Text, View, Image } from 'react-native';
import MenuScreen from './Screens/MenuScreen';

// 2. Zona render o Main

export default function App() {
  return (
    <View style={styles.container}>
      <MenuScreen/>
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
