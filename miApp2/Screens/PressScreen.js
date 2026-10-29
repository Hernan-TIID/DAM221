// 1. Zona de importaciones 
import { StyleSheet, Text, View, Pressable, Switch } from 'react-native';
import { useState } from 'react';


// 2. Zona render o Main

export default function PressScreen() {
    const [mensaje, setMensaje] = useState('Presiona el boton');
    const [activado, setActivado] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pressable</Text>
      <Text>{mensaje}</Text>
      <Pressable
        onPress={()=>setMensaje('Boton presionado')}
        onPressIn={()=>setMensaje('inicio de pulsacion')}
        onPressOut={()=>setMensaje('fin de pulsacion')}
        onLongPress={()=>setMensaje('Pulsacion prolongada')}
        disabled = {false}
        style={({pressed}) => [
            styles.boton,
            pressed && styles.botonPresionado
        ]}

        >
        <Text style={styles.textoBoton}>Presioname</Text>
      </Pressable>

        <View style={styles.separador}/>
        <Text style={styles.titulo}>Switch</Text>    
        <Text>
            Estado : {activado ? 'Activado' : 'Desactivado'}    
        </Text>    

        <Switch 
        value={activado} 
        onValueChange={setActivado} 
        disabled={false} 
        trackColor={{false: '#999999', true: '#319b80'}} 
        thumbColor={activado ? '#ffffff' : '#eeeeee'}
        ></Switch>
    </View>

        
  );
}


// 3. Zona de estilos y posicionamientos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f3',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  boton: {
    backgroundColor: '#319b81',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  botonPresionado: {
    backgroundColor: '#1e6656',
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
  },
  separador: {
    height: 2,
    backgroundColor: '#cccccf',
    width: '90%',
    marginVertical: 35,
  },
});