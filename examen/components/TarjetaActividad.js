import {Text, View, Button, Pressable,Alert} from     'react-native';
import { useState } from 'react';

export const actividad = ({nombre,descripcion}) => {

<View>
     return (
    <View>
      <Text>{nombre}</Text>
      <Text>{descripcion}</Text>    
    <Button title="Ver Actividad" onPress={()=>setMostrar(!mostrar)}></Button>
    </View>
     );
</View>
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

/*export default function TarjetaActividad() {
const[mensaje, setMensaje] = useState('Ver Actividad');
const[activado,setActviado] = useState(false);
const[mostrar,setMostrar]= useState(true);
const alerta = () => {
    Alert.alert('Actividad')
}
return (
    <Pressable onPress={()=>setMensaje('Actividades')}
    disabled = {false}>

    </Pressable> 
)
}


export const TarjetaActividad = () => {
return (


<View>
    <text styles> Estudiar Ract Native </text>
    <text> Estudiar Ract Native </text>

<View style={styles.boton}>
                <Button title=" Actividad" onPress={alerta} />
            </View> */