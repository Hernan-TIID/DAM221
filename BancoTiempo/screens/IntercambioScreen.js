import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function IntercambioScreen() {
  return (
    <SafeAreaView style={estilos.contenedor}>
      <ScrollView contentContainerStyle={estilos.scroll}>
        <Text style={estilos.titulo}>Intercambio</Text>
        <Text style={estilos.texto}>Confirma la entrega mutua de tiempo para acreditar las horas acordadas.</Text>

        {/* Datos del servicio */}
        <View style={estilos.tarjeta}>
          <View style={estilos.filaEntre}>
            <Text style={estilos.etiquetaVerde}>SERVICIO PRESTADO</Text>
            <Text style={estilos.credito}>1 Crédito</Text>
          </View>
          <Text style={estilos.servicio}>Clases de Guitarra Española</Text>

          <View style={estilos.personas}>
            <View style={{ flex: 1, marginLeft: 8 }}>
              <Text style={estilos.nombre}>Elena Morales</Text>
              <Text style={estilos.textoChico}>Prestadora</Text>
            </View>
            <Text style={{ fontSize: 18, color: '#0F7B75' }}>-</Text>
            <View style={{ flex: 1, marginRight: 8, alignItems: 'flex-end' }}>
              <Text style={estilos.nombre}>Carlos Méndez</Text>
              <Text style={estilos.textoChico}>Solicitante</Text>
            </View>
          </View>

          <View style={estilos.filaEntre}>
            <View>
              <Text style={estilos.textoChico}> Duración</Text>
              <Text style={estilos.dato}>1 hora</Text>
            </View>
            <View>
              <Text style={estilos.textoChico}> Fecha y Hora</Text>
              <Text style={estilos.dato}>23 de Mayo • 18:00 h</Text>
            </View>
          </View>
          <Text style={[estilos.textoChico, { marginTop: 12 }]}> Ubicación acordada</Text>
          <Text style={estilos.dato}>Centro Cívico Municipal (Aula 4)</Text>
        </View>

        {/* Confirmar */}
        <View style={estilos.tarjeta}>
          <View style={estilos.cajaSwitch}>
            <Text style={estilos.textoSwitch}> Servicio realizado con éxito</Text>
          </View>
          <Pressable style={estilos.botonConfirmar}>
            <Text style={estilos.textoBoton}> Registrar y Confirmar Intercambio</Text>
          </Pressable>
          <Text style={estilos.aviso}>Se transferirá 1 crédito de tiempo a Elena Morales</Text>
        </View>

        {/* Calificación */}
        <View style={estilos.tarjetaCalificar}>
          <View style={estilos.fila}>
            <View style={{ flex: 1 }}>
              <Text style={estilos.subtitulo}>Califica a Carlos Méndez</Text>
              <Text style={estilos.textoChico}>Tu opinión fortalece la confianza del barrio</Text>
            </View>
          </View>

          <View style={estilos.cajaEstrellas}>
            <Text style={estilos.estrellas}>★ ★ ★ ★ ★</Text>
            <Text style={estilos.textoEstrellas}> 5 estrellas • ¡Excelente experiencia!</Text>
          </View>

          <Text style={estilos.textoChicoMargen}>ASPECTOS DESTACADOS</Text>
          <View style={estilos.aspectos}>
            <Text style={estilos.aspecto}> Puntual</Text>
            <Text style={estilos.aspecto}> Atento</Text>
          </View>

          <Text style={estilos.textoChico}>Comentario</Text>
          <TextInput
            style={estilos.comentario}
            placeholder="Escribe un comentario sobre tu experiencia..."
            multiline={true}
          />

          <Pressable
            style={estilos.botonEnviar}
          >
            <Text style={estilos.textoBoton}> Enviar Calificación y Cerrar</Text>
          </Pressable>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#F4F8F7', paddingTop: 30 },
  scroll: { padding: 16 },
  titulo: { fontSize: 28, fontWeight: 'bold', color: '#0F172A' },
  subtitulo: { fontSize: 18, fontWeight: 'bold', color: '#0F172A' },
  texto: { fontSize: 14, color: '#334155', marginBottom: 14 },
  textoChico: { fontSize: 12, color: '#64748B' },
  textoChicoMargen: { fontSize: 12, color: '#64748B', marginVertical: 10 },
  fila: { flexDirection: 'row', alignItems: 'center' },
  filaEntre: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  tarjeta: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  tarjetaCalificar: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    marginBottom: 14,
    borderWidth: 2,
    borderColor: '#BFD8D4',
  },
  etiquetaVerde: { fontSize: 11, fontWeight: 'bold', color: '#006B49' },
  credito: {
    backgroundColor: '#FFEDE3',
    color: '#ecca66',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  servicio: { fontSize: 22, fontWeight: 'bold', color: '#0F172A', marginVertical: 8 },
  personas: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F8F7',
    borderRadius: 14,
    padding: 10,
    marginBottom: 12,
  },
  avatar: { width: 42, height: 42, borderRadius: 21 },
  nombre: { fontWeight: 'bold', color: '#0F172A', fontSize: 14 },
  dato: { fontSize: 15, color: '#0F172A', fontWeight: 'bold', marginTop: 2 },
  cajaSwitch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F4F8F7',
    borderRadius: 14,
    padding: 12,
  },
  textoSwitch: { fontWeight: 'bold', color: '#0F172A' },
  botonConfirmar: { backgroundColor: '#0F7B75', padding: 15, borderRadius: 14, alignItems: 'center', marginTop: 12 },
  textoBoton: { color: 'white', fontWeight: 'bold', fontSize: 15 },
  aviso: { textAlign: 'center', color: '#9A4A00', fontWeight: 'bold', fontSize: 12, marginTop: 8 },
  cajaEstrella: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFEDE3',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  paso: { backgroundColor: '#F4F8F7', color: '#006B49', fontWeight: 'bold', fontSize: 12, padding: 6, borderRadius: 12 },
  cajaEstrellas: { backgroundColor: '#F4F8F7', borderRadius: 14, alignItems: 'center', padding: 12, marginTop: 14 },
  estrellas: { fontSize: 32, color: '#e8ca51' },
  textoEstrellas: { fontSize: 13, fontWeight: 'bold', color: '#da9847', marginTop: 4 },
  aspectos: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 12 },
  aspecto: {
    backgroundColor: '#006B49',
    color: 'white',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
    overflow: 'hidden',
  },
  comentario: {
    backgroundColor: '#F5F4EF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    padding: 12,
    height: 100,
    textAlignVertical: 'top',
    marginTop: 6,
    marginBottom: 14,
  },
  botonEnviar: { backgroundColor: '#9A4A00', padding: 15, borderRadius: 14, alignItems: 'center' },
});
