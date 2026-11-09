import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import BarraInferior from '../components/BarraInferior';

export default function MisHabilidadesScreen() {
  return (
    <SafeAreaView style={estilos.contenedor}>
      <View style={estilos.barraArriba}>
        <Text style={estilos.nombreApp}>Banco de Tiempo</Text>
        <Text style={estilos.creditos}>0 Créditos</Text>
      </View>

      <ScrollView contentContainerStyle={estilos.contenido}>
        <View style={estilos.tarjeta}>
          <Text style={estilos.etiquetaVerde}>PERFIL DE ‘NOMBRE USUARIO’</Text>
          <Text style={estilos.titulo}>Mis Habilidades y Talentos</Text>
          <Text style={estilos.texto}>
            Gestiona las destrezas que puedes compartir con tus vecinos para acumular y transferir tiempo mutuo.
          </Text>
        </View>

        <View style={estilos.filaEntre}>
          <Text style={estilos.subtitulo}>Habilidades activas (1)</Text>
          <Text style={estilos.textoChico}>1h servicio = 1 crédito</Text>
        </View>

        <View style={estilos.botonAgregar}>
          <Text style={estilos.textoBoton}>+ Agregar nueva habilidad</Text>
        </View>

        <View style={estilos.tarjeta}>
          <View style={estilos.fila}>
            <View style={estilos.detalle}>
              <Text style={estilos.categoria}>MÚSICA Y CULTURA</Text>
              <Text style={estilos.tituloHabilidad}>Clases de Guitarra Española</Text>
            </View>
            <Text style={estilos.estadoActivo}>Activo</Text>
          </View>

          <Text style={estilos.texto}>
            Iniciación a acordes flamencos, postura clásica, ritmo por rumbas y lectura básica de tablaturas para todas las…
          </Text>

          <View style={estilos.pie}>
            <Text style={estilos.textoChico}>4 intercambios completados</Text>
            <View style={estilos.fila}>
              <View style={estilos.botonEditar}>
                <Text style={estilos.textoEditar}>Editar</Text>
              </View>
              <View style={estilos.botonEliminar}>
                <Text style={estilos.textoEliminar}>Eliminar</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={estilos.tarjeta}>
          <View style={estilos.fila}>
            <View style={estilos.detalle}>
              <Text style={estilos.categoria}>REPARACIONES Y HOGAR</Text>
              <Text style={estilos.tituloHabilidad}>Reparación de Bicicletas</Text>
            </View>
            <Text style={estilos.estadoInactivo}>Inactivo</Text>
          </View>

          <Text style={estilos.texto}>
            Ajuste de frenos mecánicos, parchado de cámaras, engrase de cadena y calibración de cambios en taller…
          </Text>

          <View style={estilos.pie}>
            <Text style={estilos.textoChico}>2 intercambios completados</Text>
            <View style={estilos.fila}>
              <View style={estilos.botonEditar}>
                <Text style={estilos.textoEditar}>Editar</Text>
              </View>
              <View style={estilos.botonEliminar}>
                <Text style={estilos.textoEliminar}>Eliminar</Text>
              </View>
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
  barraArriba: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 12,
  },
  nombreApp: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006B49',
  },
  creditos: {
    backgroundColor: '#FFEDE3',
    color: '#9A4A00',
    fontWeight: 'bold',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  tarjeta: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  etiquetaVerde: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#006B49',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0F172A',
    marginVertical: 6,
  },
  subtitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  texto: {
    fontSize: 14,
    color: '#334155',
  },
  textoChico: {
    fontSize: 12,
    color: '#64748B',
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filaEntre: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  botonAgregar: {
    backgroundColor: '#0F7B75',
    padding: 15,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 14,
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  cajaIcono: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#F1F5F4',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  icono: {
    fontSize: 20,
  },
  detalle: {
    flex: 1,
  },
  categoria: {
    fontSize: 11,
    color: '#64748B',
    fontWeight: 'bold',
  },
  tituloHabilidad: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  estadoActivo: {
    backgroundColor: '#E6F4EE',
    color: '#006B49',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 12,
  },
  estadoInactivo: {
    backgroundColor: '#FFF6D6',
    color: '#8A6A00',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 12,
  },
  pie: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  botonEditar: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    padding: 8,
    marginRight: 8,
  },
  textoEditar: {
    color: '#006B49',
    fontWeight: 'bold',
  },
  botonEliminar: {
    backgroundColor: '#FDECEC',
    borderRadius: 12,
    padding: 8,
  },
  textoEliminar: {
    color: '#C62828',
    fontWeight: 'bold',
  },
});