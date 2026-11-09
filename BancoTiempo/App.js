//1. Zona importaciones
import { StyleSheet, View, } from 'react-native';
import Menu from './screens/Menu';

//2. Zona Render o Main
export default function App() {
  return (
    //View es importante para cuando tengamos muchos componentes
    <View style={styles.container}>
      
        <Menu></Menu>

    </View>
  );
}

//3. Zona de estilos y posicionamientos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
