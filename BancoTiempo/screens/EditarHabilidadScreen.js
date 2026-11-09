import React from 'react';
import { View, Text, TextInput, Pressable, KeyboardAvoidingView, StyleSheet } from 'react-native';
import MisHabilidadesScreen from './MisHabilidadesScreen';

export default function EditarHabilidadScreen() {
  return (
    <View style={{ flex: 1 }}>

      
      <KeyboardAvoidingView behavior={'padding'}>
        <View style={estilos.ventana}>

          <View style={estilos.filaArriba}>
            <View style={{ flex: 1 }}>
              <Text style={estilos.titulo}>Editar Habilidad</Text>
              <Text style={estilos.texto}>Modifica los detalles que verán los demas.</Text>
            </View>
            <Pressable style={estilos.botonCerrar}>
              <Text>x</Text>
            </Pressable>
          </View>

          <Text style={estilos.label}>Título de la Habilidad</Text>
          <TextInput style={estilos.input} placeholder="Escribe el titulo" />
          
          <Text style={estilos.label}>Categoría</Text>
          <TextInput style={estilos.input} placeholder="Escribe la categoria" />


          <Text style={estilos.label}>Nivel de Dominio</Text>
          <View style={estilos.fila}>
            <Pressable style={estilos.nivel}>
              <Text style={estilos.nivelTitulo}>Básico</Text>
            </Pressable>
            <Pressable style={estilos.nivel}>
              <Text style={estilos.nivelTitulo}>Intermedio</Text>
            </Pressable>
            <Pressable style={estilos.nivel}>
              <Text style={estilos.nivelTitulo}>Avanzado</Text>
            </Pressable>
          </View>

          <View style={estilos.filaBotones}>
            <Pressable style={estilos.botonCancelar}>
              <Text style={estilos.textoCancelar}>Cancelar</Text>
            </Pressable>
            <Pressable style={estilos.botonGuardar}>
              <Text style={estilos.textoGuardar}>Guardar Cambios</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const estilos = StyleSheet.create({
  ventana: { 
    backgroundColor: 'white', 
    borderRadius: 28, 
    padding: 20, 
    paddingTop: 200,
  },
  filaArriba: { flexDirection: 'row', marginBottom: 14 },
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#0F172A' },
  texto: { color: '#334155', fontSize: 14 },
  botonCerrar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#F1F5F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: { fontSize: 14, fontWeight: 'bold', color: '#0F172A', marginBottom: 6 },
  input: {
    backgroundColor: '#F5F4EF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 14,
  },
  selector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F4EF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 14,
  },
  fila: { flexDirection: 'row', marginBottom: 18 },
  nivel: {
    flex: 1,
    backgroundColor: '#F5F4EF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    padding: 12,
    alignItems: 'center',
    marginRight: 8,
  },
  nivelTitulo: { fontWeight: 'bold', color: '#0F172A' },
  filaBotones: { flexDirection: 'row' },
  botonCancelar: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
    marginRight: 10,
  },
  textoCancelar: { color: '#0F172A', fontWeight: 'bold' },
  botonGuardar: { flex: 1, backgroundColor: '#0F7B75', borderRadius: 14, padding: 14, alignItems: 'center' },
  textoGuardar: { color: 'white', fontWeight: 'bold' },
});
