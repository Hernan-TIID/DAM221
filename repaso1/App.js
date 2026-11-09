import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, Pressable, Alert, ScrollView } from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setCuatrimestre] = useState('');
  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const enviarRegistro = () => {
    if (!nombre.trim() || !carrera.trim() || !semestre.trim()) {
      Alert.alert('Campos incompletos', 'Debes llenar todos los campos.');
      return;
    }
    if (isNaN(cuatrimestre)) {
      Alert.alert('Error', 'El semestre debe ser un número.');
      return;
    }

    Alert.alert(
      'Registro enviado',
      `Nombre: ${nombre}\nCarrera: ${carrera}\nCuatrimestre: ${cuatrimestre}\nTaller: ${taller ? 'Sí' : 'No'}\nConstancia: ${constancia ? 'Sí' : 'No'}\nDeportes: ${deportes ? 'Sí' : 'No'}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registro de Evento Universitario</Text>

      <TextInput style={styles.input} placeholder="Nombre completo" value={nombre} onChangeText={setNombre} />
      <TextInput style={styles.input} placeholder="Carrera" value={carrera} onChangeText={setCarrera} />
      <TextInput style={styles.input} placeholder="Cuatrimestre" keyboardType="numeric" value={semestre} onChangeText={setCuatrimestre} />

      <Text style={styles.sectionTitle}>Opciones</Text>

      <View style={styles.row}>
        <Text>¿Asistirá al taller?</Text>
        <Switch value={taller} onValueChange={setTaller} />
      </View>
      <View style={styles.row}>
        <Text>¿Requiere constancia?</Text>
        <Switch value={constancia} onValueChange={setConstancia} />
      </View>
      <View style={styles.row}>
        <Text>¿Participará en deportes?</Text>
        <Switch value={deportes} onValueChange={setDeportes} />
      </View>

      <Pressable style={styles.btn} onPress={enviarRegistro}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Enviar Registro</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 60 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 12 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 10, marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  btn: { backgroundColor: '#007AFF', padding: 15, alignItems: 'center', borderRadius: 8, marginTop: 20 }
});