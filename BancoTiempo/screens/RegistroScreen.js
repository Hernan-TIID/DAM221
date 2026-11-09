import React from 'react';
import { SafeAreaView, KeyboardAvoidingView, ScrollView, View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function RegistroScreen() {
  return (
    <SafeAreaView style={estilos.contenedor}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding' }>
        <ScrollView contentContainerStyle={estilos.scroll}>
          <View style={estilos.encabezado}>
            <View style={estilos.logo}>
              <Text >logo</Text>
            </View>
            <Text style={estilos.titulo}>Banco de Tiempo y Talento</Text>
          </View>

          <Text style={estilos.subtitulo}>Comparte lo que sabes y recibe ayuda cuando la necesites.</Text>
          <View style={estilos.etiqueta}>
            <Text style={estilos.textoEtiqueta}> 1h = 1 Crédito </Text>
          </View>

          <View style={estilos.tarjeta}>
            <Text style={estilos.label}>Nombre completo</Text>
            <View style={estilos.caja}>
              <TextInput style={estilos.input} placeholder="Escribe tu nombre" />
            </View>

            <Text style={estilos.label}>Correo electrónico</Text>
            <View style={estilos.caja}>
              <TextInput style={estilos.input} placeholder="Escribe tu correo" />
            </View>

            <Text style={estilos.label}>Contraseña</Text>
            <View style={estilos.caja}>
              <TextInput style={estilos.input} placeholder="Mínimo 8 caracteres" secureTextEntry={true} />
            </View>

            <Pressable style={estilos.boton}>
              <Text style={estilos.textoBoton}>Crear cuenta / Registrarse →</Text>
            </Pressable>
          </View>

          <View style={estilos.abajo}>
            <Text style={estilos.texto}>¿Ya tienes una cuenta? </Text>
            <Text style={estilos.link}>Iniciar sesión</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: 'white', paddingTop: 30 },
  scroll: { padding: 20, paddingTop: 40 },
  encabezado: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: '#E6F4EE',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  titulo: { flex: 1, fontSize: 26, fontWeight: 'bold', color: '#0F172A' },
  subtitulo: { textAlign: 'center', color: '#334155', fontSize: 15, marginBottom: 10 },
  etiqueta: {
    alignSelf: 'center',
    backgroundColor: '#E6F4EE',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 20,
  },
  textoEtiqueta: { color: '#006B49', fontWeight: 'bold' },
  tarjeta: { borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 20, padding: 18, marginBottom: 14 },
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
  paso: { alignSelf: 'center', backgroundColor: '#E8EBFA', paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20 },
  abajo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  texto: { color: '#334155' },
  link: { color: '#006B49', fontWeight: 'bold', fontSize: 16 },
});
