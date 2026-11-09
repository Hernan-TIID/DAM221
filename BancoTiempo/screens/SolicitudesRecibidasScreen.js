import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import BarraInferior from '../components/BarraInferior';

export default function SolicitudesRecibidasScreen() {
return (
  <SafeAreaView style={estilos.contenedor}>
    <View style={{ padding: 16, paddingTop: 30 }}>
      <View style={estilos.filaEntre}>
        <Text style={estilos.titulo}>Solicitudes Recibidas</Text>
        <Text style={estilos.pendientes}>2 pendientes</Text>
      </View>

      <View style={estilos.tarjeta}>
        <Text style={estilos.nombre}>Carlos Méndez</Text>
        <View style={estilos.cajaServicio}>
          <Text style={estilos.etiquetaVerde}>SERVICIO SOLICITADO</Text>
          <Text style={estilos.servicio}>Clases de Guitarra Española</Text>
          <Text style={estilos.texto}>Propuesta: Jueves 23 de Mayo, 18:00 h</Text>
        </View>
        <View style={estilos.filaBotones}>
          <View style={estilos.botonRechazar}>
            <Text style={estilos.textoRechazar}>Rechazar</Text>
          </View>
          <View style={estilos.botonAceptar}>
            <Text style={estilos.textoAceptar}>Aceptar</Text>
          </View>
        </View>
      </View>

      <View style={estilos.tarjeta}>
        <Text style={estilos.nombre}>Lucía Gómez</Text>
        <View style={estilos.cajaServicio}>
          <Text style={estilos.etiquetaVerde}>SERVICIO SOLICITADO</Text>
          <Text style={estilos.servicio}>Reparación de Bicicletas</Text>
          <Text style={estilos.texto}>Propuesta: Viernes 24 de Mayo, 10:00 h</Text>
        </View>
        <View style={estilos.filaBotones}>
          <View style={estilos.botonRechazar}>
            <Text style={estilos.textoRechazar}>Rechazar</Text>
          </View>
          <View style={estilos.botonAceptar}>
            <Text style={estilos.textoAceptar}>Aceptar</Text>
          </View>
        </View>
      </View>

      <View style={estilos.tarjetaAceptada}>
        <View style={estilos.fila}>
          <Text style={estilos.nombre}>Andrés Valero</Text>
          <Text style={estilos.etiquetaAceptada}>Aceptada</Text>
        </View>
        <View style={estilos.cajaServicio}>
          <Text style={estilos.etiquetaVerde}>SERVICIO ACORDADO</Text>
          <Text style={estilos.servicio}>Huerto Urbano</Text>
          <Text style={estilos.texto}>Confirmado: Sábado 25 de Mayo, 11:30 h</Text>
        </View>
        <View style={estilos.botonDetalles}>
          <Text style={estilos.textoVerde}>Ver detalles de intercambio</Text>
        </View>
      </View>
    </View>

    <BarraInferior tipo="miembro" />
  </SafeAreaView>
);
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#F4F8F7', paddingTop: 30},
  filaEntre: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom:15 },
  fila: { flexDirection: 'row', alignItems: 'center' },
  titulo: { fontSize: 22, fontWeight: 'bold', color: '#0F172A' },
  pendientes: {
    backgroundColor: '#FFEDE3',
    color: '#9A4A00',
    fontWeight: 'bold',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  texto: { fontSize: 14, color: '#334155', marginTop: 4 },
  pestanas: { flexDirection: 'row', marginVertical: 14 },
  pestana: { backgroundColor: '#E2E8F0', padding: 10, borderRadius: 20, marginRight: 8 },
  pestanaActiva: { backgroundColor: '#006B49', padding: 10, borderRadius: 20, marginRight: 8 },
  textoPestana: { fontWeight: 'bold', color: '#334155', fontSize: 13 },
  textoPestanaActiva: { fontWeight: 'bold', color: 'white', fontSize: 13 },
  tarjeta: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  tarjetaAceptada: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderWidth: 3,
    borderColor: '#006B49',
  },
  avatar: { width: 50, height: 50, borderRadius: 25, borderWidth: 2, borderColor: '#9CF3E6', marginRight: 12 },
  nombre: { flex: 1, fontSize: 20, fontWeight: 'bold', color: '#0F172A' },
  etiquetaHoras: {
    backgroundColor: '#FFEDE3',
    color: '#9A4A00',
    fontWeight: 'bold',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  etiquetaAceptada: {
    backgroundColor: '#9CF3E6',
    color: '#006B49',
    fontWeight: 'bold',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  cajaServicio: {
    backgroundColor: '#F4F8F7',
    borderRadius: 14,
    padding: 14,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  etiquetaVerde: { fontSize: 11, fontWeight: 'bold', color: '#006B49' },
  creditos: { fontSize: 12, fontWeight: 'bold', color: '#9A4A00' },
  servicio: { fontSize: 18, fontWeight: 'bold', color: '#0F172A', marginVertical: 6 },
  filaBotones: { flexDirection: 'row', marginTop: 12 },
  botonRechazar: {
    flex: 1,
    backgroundColor: '#F4F8F7',
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
    marginRight: 10,
  },
  textoRechazar: { color: '#C62828', fontWeight: 'bold' },
  botonAceptar: { flex: 1.3, backgroundColor: '#0F7B75', borderRadius: 14, padding: 14, alignItems: 'center' },
  textoAceptar: { color: 'white', fontWeight: 'bold' },
  botonDetalles: { backgroundColor: '#E5EAE9', borderRadius: 14, padding: 14, alignItems: 'center', marginTop: 12 },
  textoVerde: { color: '#006B49', fontWeight: 'bold' },
});
