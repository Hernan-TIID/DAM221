
// 1. Zona de importaciones 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Perfil } from '../components/Perfil.js'


// 2. Zona render o Main

export default function TarjetasScreen() {
  return (
    <View style={styles.container}>
      <Perfil style={styles.tarjetas1} nombre="LULU" carrera="TIID-221" materia="Apps Moviles" cuatrimestre="4"/>
      <Perfil style={styles.tarjetas2} nombre="RENATA" carrera="TIID-221" materia="Apps Moviles" cuatrimestre="4" />
      <Perfil style={styles.tarjetas3} nombre="LUISA" carrera="TIID-221" materia="Apps Moviles" cuatrimestre="4" />

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
    alignItems: 'center',
  },
  tarjetas1:{
    backgroundColor: 'pink',
  },
  tarjetas2:{
    backgroundColor: 'yellow',
  },
  tarjetas3:{
    backgroundColor: 'orange',
  }
});
