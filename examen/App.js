import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  {TarjetaActividad} from './components/TarjetaActividad';
import {Encabezado} from './components/Encabezado';
export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado></Encabezado>

      <TarjetaActividad nombre="Estudiar react" descripcion = "repasar componentes"> </TarjetaActividad>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
