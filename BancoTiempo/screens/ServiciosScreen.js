import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, StyleSheet } from 'react-native';
import BarraInferior from '../components/BarraInferior';

export default function ServiciosScreen() {
  return (
    <SafeAreaView style={estilos.contenedor}>
      <ScrollView contentContainerStyle={estilos.contenido}>
        <View style={estilos.saldo}>
          <Text style={estilos.saldoGrande}>Tu saldo disponible: 4 Créditos de Tiempo</Text>
        </View>

        <View style={estilos.buscador}>
          <TextInput editable={false} style={estilos.entrada} placeholder="Buscar habilidades" />
        </View>

        <Text style={estilos.titulo}>Servicios</Text>

        <View style={estilos.tarjeta}>
          <View style={estilos.fila}>
            <View style={estilos.usuarioDetalle}>
              <Text style={estilos.usuario}>Usuario</Text>
              <Text style={estilos.textoChico}>28 intercambios</Text>
            </View>
          </View>

          <Text style={estilos.tituloServicio}>Clases de conversación en Francés</Text>
          <Text style={estilos.texto}>
            Práctica fluida para nivel intermedio o inicial. Conversación sobre cultura, cine, viajes o literatura…
          </Text>

          <View style={estilos.filaDatos}>
            <Text style={estilos.duracion}>1 h (1 crédito)</Text>
            <Text style={estilos.textoChico}>Online / Presencial</Text>
          </View>

          <View style={estilos.pie}>
            <View style={estilos.botonDetalle}>
              <Text style={estilos.textoBoton}>Ver detalles</Text>
            </View>
          </View>
        </View>

        <View style={estilos.tarjeta}>
          <View style={estilos.fila}>
            <View style={estilos.usuarioDetalle}>
              <Text style={estilos.usuario}>Usuario</Text>
              <Text style={estilos.textoChico}>42 intercambios</Text>
            </View>
          </View>

          <Text style={estilos.tituloServicio}>Reparación de cerraduras y persianas</Text>
          <Text style={estilos.texto}>
            Ajuste de cintas atascadas, cambio de manillas y engrase de cerraduras domésticas. Llevo mis propias…
          </Text>

          <View style={estilos.filaDatos}>
            <Text style={estilos.duracion}>2 h (2 créditos)</Text>
            <Text style={estilos.textoChico}>Solo Presencial</Text>
          </View>

          <View style={estilos.pie}>
            <View style={estilos.botonDetalle}>
              <Text style={estilos.textoBoton}>Ver detalles</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <BarraInferior tipo="miembro" />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#F4F8F7',
    paddingTop: 30,
  },
  contenido: {
    padding: 16,
  },
  saldo: {
    backgroundColor: '#0F7B75',
    borderRadius: 20,
    padding: 18,
    marginBottom: 14,
  },
  saldoGrande: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buscador: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 50,
    justifyContent: 'center',
    marginBottom: 14,
  },
  entrada: {
    flex: 1,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 10,
  },
  tarjeta: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },
  usuarioDetalle: {
    marginLeft: 12,
  },
  usuario: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  textoChico: {
    fontSize: 12,
    color: '#64748B',
  },
  tituloServicio: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#0F172A',
    marginTop: 12,
  },
  texto: {
    fontSize: 14,
    color: '#334155',
    marginTop: 4,
  },
  filaDatos: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  duracion: {
    backgroundColor: '#E6F4EE',
    color: '#006B49',
    fontWeight: 'bold',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginRight: 8,
  },
  pie: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  botonDetalle: {
    backgroundColor: '#006B49',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 14,
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
  },
});