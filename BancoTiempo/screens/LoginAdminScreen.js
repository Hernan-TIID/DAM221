import React from 'react';
import { SafeAreaView, KeyboardAvoidingView, ScrollView, View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function LoginAdminScreen() {
  return (
    <SafeAreaView style={estilos.contenedor}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
        <ScrollView contentContainerStyle={estilos.scroll}>
          <View style={estilos.logo}>
            <Text >Logo</Text>
          </View>
          <Text style={estilos.nombreApp}>Banco de Tiempo y Talento</Text>
          <View style={estilos.etiqueta}>
            <Text style={estilos.textoEtiqueta}> 1 hora = 1 crédito </Text>
          </View>

          <View style={estilos.tarjeta}>
            <Text style={estilos.titulo}>Inicio Administrador</Text>

            <Text style={estilos.label}>Correo electrónico</Text>
            <View style={estilos.caja}>
              <TextInput style={estilos.input} placeholder="Escribe tu correo" />
            </View>

            <Text style={estilos.label}>Contraseña</Text>
            <View style={estilos.caja}>
              <TextInput style={estilos.input}  placeholder="contraseña" />
            </View>

            <Pressable style={estilos.boton}>
              <Text style={estilos.textoBoton}>Iniciar sesión </Text>
            </Pressable>
          </View>

          <Pressable style={estilos.botonMiembro}>
            <Text style={estilos.textoMiembro}>Inicio Miembro</Text>
          </Pressable>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: 'white', paddingTop: 30 },
  scroll: { padding: 20, paddingTop: 50 },
  logo: {
    width: 78,
    height: 78,
    borderRadius: 22,
    backgroundColor: '#E6F4EE',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 12,
  },
  nombreApp: { textAlign: 'center', fontSize: 22, fontWeight: 'bold', color: '#006B49', marginBottom: 10 },
  etiqueta: {
    alignSelf: 'center',
    backgroundColor: '#E8EBFA',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 30,
  },
  textoEtiqueta: { color: '#334155', fontWeight: 'bold' },
  tarjeta: { borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 20, padding: 20 },
  titulo: { textAlign: 'center', fontSize: 26, fontWeight: 'bold', color: '#0F172A', marginBottom: 20 },
  label: { fontSize: 14, fontWeight: 'bold', color: '#0F172A', marginBottom: 6 },
  caja: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 14,
  },
  input: { flex: 1, fontSize: 15 },
  boton: { backgroundColor: '#006B49', padding: 15, borderRadius: 14, alignItems: 'center' },
  textoBoton: { color: 'white', fontSize: 15, fontWeight: 'bold' },
  botonMiembro: {
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: '#006B49',
    borderRadius: 14,
    padding: 10,
    marginTop: 10,
  },
  textoMiembro: { color: '#0F172A' },
});
