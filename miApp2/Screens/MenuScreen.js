
// 1. Zona de importaciones */

import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useState } from 'react';
import TarjetasScreen from './TarjetasScreen'
import SafeScreen from './SafeScreen'
import PressScreen from './PressScreen'
import AlertScreen from './AlertScreen'
import FlatScreen from './FlatScreen'
import SplashScreen from './SplashScreen'
import ModalScreen from './ModalScreen'
import ActivityScreen from './ActivityScreen'

//2. Zona render o Main

export default function MenuScreen() {
  const[screen, setScreen]= useState('menu');

  switch (screen){

    case 'tarjetas':
      return <TarjetasScreen/>
    case 'safe':
      return <SafeScreen/>
    case 'press':
      return <PressScreen/>
    case 'alert':
      return <AlertScreen/>
    case 'flat':
      return <FlatScreen/>
    case 'splash':
      return <SplashScreen/>
    case 'modal':
      return <ModalScreen/>
    case 'activity':
      return <ActivityScreen/>
    case 'menu':
      default:
        return (
        <View style={styles.container}>
          <Text>Menu de practicas</Text>
          <Button title="Pract:Tarjetas" onPress={()=>setScreen('tarjetas')}/>
          <Button title ="Pract:SafeAreaView" onPress={()=>setScreen('safe')}/>
          <Button title="Pract:PressableSwitch" onPress={()=>setScreen('press')}/>
          <Button title="Pract:AlertTxtIn" onPress={()=>setScreen('alert')}/>
          <Button title="Pract:FlatSection" onPress={()=>setScreen('flat')}/>
          <Button title="Pract:SplashBack" onPress={()=>setScreen('splash')}/>
          <Button title="Pract:ModalBott" onPress={()=>setScreen('modal')}/>
          <Button title="Pract:ActivityInd" onPress={()=>setScreen('activity')}/>

        </View>
        );
  }
  
}


// 3. Zona de estilos y posicionamientos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
