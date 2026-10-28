// 1. Importaciones
import { useState } from 'react';

import {View, Text, ImageBackground, Pressable, StyleSheet} from 'react-native';

// 2. Componente principal
export default function SplashScreen() {

  // Estado para cambiar entre día y noche
  const [noche, setNoche] = useState(false);

  return (
    <ImageBackground
      source={
        noche
          ? require('../assets/noche.jpg')
          : require('../assets/dia.jpg')
      }
      style={styles.background}
      resizeMode="cover"
    >

      <View style={styles.overlay}>

        <Text style={styles.title}>
          Ejemplo de Background
        </Text>

        <Text style={styles.description}>
          {noche
            ? 'Actualmente es de noche'
            : 'Actualmente es de día'}
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => setNoche(!noche)}
        >
          <Text style={styles.buttonText}>
            {noche ? 'Cambiar a día' : 'Cambiar a noche'}
          </Text>
        </Pressable>

      </View>

    </ImageBackground>
  );
}

// 3. Estilos
const styles = StyleSheet.create({

  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    marginHorizontal: 20,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  description: {
    color: '#FFFFFF',
    fontSize: 16,
    marginVertical: 20,
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#2563EB',
    padding: 14,
    borderRadius: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

});