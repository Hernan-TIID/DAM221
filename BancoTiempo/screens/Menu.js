import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import RegistroScreen from './RegistroScreen';
import LoginMiembroScreen from './LoginMiembroScreen';
import LoginAdminScreen from './LoginAdminScreen';
import MisHabilidadesScreen from './MisHabilidadesScreen';
import EditarHabilidadScreen from './EditarHabilidadScreen';
import PublicarServicioScreen from './PublicarServicioScreen';
import ServiciosScreen from './ServiciosScreen';
import SolicitudIntercambioScreen from './SolicitudIntercambioScreen';
import SolicitudesRecibidasScreen from './SolicitudesRecibidasScreen';
import IntercambioScreen from './IntercambioScreen';
import CarteraScreen from './CarteraScreen';
import AdminReportesScreen from './AdminReportesScreen';
import AdminSupervisionScreen from './AdminSupervisionScreen';
import AdminGestionScreen from './AdminGestionScreen';


export default function Menu() {
  const [screen,setScreen] = useState('Menu');

    switch(screen){
        case 'RS': 
            return <RegistroScreen/>;
        case 'LMS': 
            return <LoginMiembroScreen/>;
        case 'LAS':
            return <LoginAdminScreen/>
        case 'HS':
            return <MisHabilidadesScreen/>
        case 'EHS':
            return <EditarHabilidadScreen />      
        case 'PS':
            return <PublicarServicioScreen/>
        case 'SS':
            return <ServiciosScreen/>
        case 'SI':
            return <SolicitudIntercambioScreen/>
        case 'SR':
            return <SolicitudesRecibidasScreen/>
        case 'IN':
            return <IntercambioScreen/>
        case 'CS':
            return <CarteraScreen/>
        case 'ARS':
            return <AdminReportesScreen/>
        case 'AS':
            return <AdminSupervisionScreen/>
        case 'AG':
            return <AdminGestionScreen/>

        case 'Menu':
            default:
            return (
                <View style={styles.container}>
                        <Text> Menu de Interfaces </Text>
                            <Button title= "Miembro" onPress={() => setScreen('RS')}/>
                            <Button title= "Miembro" onPress={() => setScreen('LMS')}/>
                            <Button title= "Miembro" onPress={() => setScreen('LAS')}/>
                            <Button title= "Miembro" onPress={() => setScreen('HS')}/>
                            <Button title= "Miembro" onPress={() => setScreen('EHS')}/>
                            <Button title= "Miembro" onPress={() => setScreen('PS')}/>
                            <Button title= "Miembro" onPress={() => setScreen('SS')}/>
                            <Button title= "Miembro" onPress={() => setScreen('SI')}/>  
                            <Button title= "Miembro" onPress={() => setScreen('SR')}/>  
                            <Button title= "Miembro" onPress={() => setScreen('IN')}/>  
                            <Button title= "Miembro" onPress={() => setScreen('CS')}/>  
                            <Button title= "Admin" onPress={() => setScreen('ARS')}/> 
                            <Button title= "Admin" onPress={() => setScreen('AS')}/>   
                            <Button title= "Admin" onPress={() => setScreen('AG')}/>     


                </View>
    );
} //switch
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    padding: 10,
    color: 'white',
  },

});
