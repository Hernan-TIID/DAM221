import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, FlatList, ImageBackground, ActivityIndicator, Alert } from 'react-native';

export default function App() {
  const [isSplash, setIsSplash] = useState(true);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsSplash(false), 2000);
  }, []);

  const agregarLibro = () => {
    if (!titulo || !autor || !genero) {
      Alert.alert('Alert', 'Todos los campos son obligatorios.');
      return;
    }
    setCargando(true);
    setTimeout(() => {
      setLibros([{ id: Date.now().toString(), titulo, autor, genero }, ...libros]);
      setTitulo('');
      setAutor('');
      setGenero('');
      setCargando(false);
      Alert.alert('Alert', 'Libro guardado correctamente.');
    }, 4000);
  };

  if (isSplash) {
    return (
      <View style={styles.center}>
        <Text style={{fontSize: 32}}>repa2</Text>
      </View>
    );
  }

  return (
    <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0'}} style={styles.bg}>
      <View style={styles.container}>
        <Text style={styles.title}>Catálogo de Libros</Text>
        
        <TextInput style={styles.input} placeholder="Título del libro" value={titulo} onChangeText={setTitulo} />
        <TextInput style={styles.input} placeholder="Autor" value={autor} onChangeText={setAutor} />
        <TextInput style={styles.input} placeholder="Género" value={genero} onChangeText={setGenero} />

        <Pressable style={styles.btn} onPress={agregarLibro}>
          <Text style={{color: '#fff'}}>Agregar Libro</Text>
        </Pressable>

        {cargando && <ActivityIndicator size="large" color="#fff" style={{margin: 10}} />}

        <Text style={{color: '#fff', marginVertical: 5}}>Total de libros: {libros.length}</Text>

        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Text style={{fontWeight: 'bold'}}>{item.titulo}</Text>
              <Text>Autor: {item.autor}</Text>
              <Text>Género: {item.genero}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  bg: { flex: 1 },
  container: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: 'rgba(0,0,0,0.3)' },
  title: { fontSize: 22, color: '#fff', textAlign: 'center', marginBottom: 15 },
  input: { backgroundColor: '#fff', padding: 10, borderRadius: 5, marginBottom: 10 },
  btn: { backgroundColor: '#1b4f72', padding: 12, alignItems: 'center', borderRadius: 5 },
  card: { backgroundColor: '#fff', padding: 10, borderRadius: 5, marginBottom: 8 }
});
