import React from 'react';
import {SafeAreaView, View, Text, TextInput, ScrollView, Image, StyleSheet,} from 'react-native';
import BarraInferior from '../components/BarraInferior';

export default function AdminSupervisionScreen() {
  return (
    <SafeAreaView style={estilos.contenedor}>
      <View style={estilos.barraArriba}>
        <Text style={estilos.nombreApp}>Banco de Tiempo</Text>
      </View>

      <ScrollView contentContainerStyle={estilos.contenido}>
        <View style={estilos.buscador}>
          <Text style={{ marginRight: 8 }}></Text>
          <TextInput
            editable={false}
            style={{ flex: 1 }}
            placeholder="Buscar por participantes, actividad o ID..."
          />
        </View>

        <ScrollView horizontal style={{ marginBottom: 14 }}>
          <View style={estilos.filtroActivo}>
            <Text style={estilos.textoFiltroActivo}>Todos 14</Text>
          </View>
          <View style={estilos.filtro}>
            <Text style={estilos.textoFiltro}> En proceso</Text>
          </View>
          <View style={estilos.filtro}>
            <Text style={estilos.textoFiltro}> Completado</Text>
          </View>
        </ScrollView>

        <View style={estilos.filaEntre}>
          <Text style={estilos.subtitulo}>Registros bajo supervisión</Text>
        </View>

        <View style={[estilos.tarjeta]}>
          <View style={estilos.filaEntre}>
            <Text style={[estilos.textoChico]}>INTERCAMBIO #5055470</Text>
            <Text style={[estilos.estado, { color: '#1F7A3A', backgroundColor: '#E3F5E9' }]}>
               Completado y calificado
            </Text>
          </View>
          <Text style={estilos.titulo}>Clases de Guitarra Española</Text>
          <View style={estilos.personas}>
            <View style={{ flex: 1, marginLeft: 8 }}>
              <Text style={estilos.textoChico}>Prestador</Text>
              <Text style={estilos.nombre}>Elena Morales</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 8 }}>
              <Text style={estilos.textoChico}>Solicitante</Text>
              <Text style={estilos.nombre}>Carlos Méndez</Text>
            </View>
          </View>
          <View style={estilos.filaEntre}>
            <Text style={estilos.dato}> 1 hora transferida</Text>
            <Text style={estilos.textoChico}> 23 de Mayo 2024</Text>
          </View>
          <View style={estilos.botonAuditar}>
            <Text style={estilos.textoAuditar}> Auditar tiempos y trazabilidad</Text>
            <Text style={{ color: '#3F4C8F' }}>›</Text>
          </View>
        </View>

        <View style={[estilos.tarjeta, { borderLeftColor: '#0F7B75' }]}>
          <View style={estilos.filaEntre}>
            <Text style={[estilos.textoChico, { flex: 1 }]}>INTERCAMBIO #5053572</Text>
            <Text style={[estilos.estado, { color: '#0F7B75', backgroundColor: '#DDF3F1' }]}>
               En curso / Acordado
            </Text>
          </View>
          <Text style={estilos.titulo}>Acompañamiento en Trámites Digitales</Text>
          <View style={estilos.personas}>
            <View style={{ flex: 1, marginLeft: 8 }}>
              <Text style={estilos.textoChico}>Prestador</Text>
              <Text style={estilos.nombre}>Marcos Ruiz</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 8 }}>
              <Text style={estilos.textoChico}>Solicitante</Text>
              <Text style={estilos.nombre}>Carmen Soto</Text>
            </View>
          </View>
          <View style={estilos.filaEntre}>
            <Text style={estilos.dato}> Duración pactada: 1 hora</Text>
            <Text style={estilos.textoChico}>Inicio: Hoy, 11:30</Text>
          </View>
          <View style={estilos.botonAuditar}>
            <Text style={estilos.textoAuditar}> Auditar tiempos y trazabilidad</Text>
            <Text style={{ color: '#3F4C8F' }}>›</Text>
          </View>
        </View>

        <View style={[estilos.tarjeta, { borderLeftColor: '#F38B2C' }]}>
          <View style={estilos.filaEntre}>
            <Text style={[estilos.textoChico, { flex: 1 }]}>OFERTA DE CATÁLOGO #PUB-1092</Text>
            <Text style={[estilos.estado, { color: '#0F7B75', backgroundColor: '#DDF3F1' }]}>
               Activo en catálogo
            </Text>
          </View>
          <Text style={estilos.titulo}>Taller de Huerto Urbano</Text>
          <View style={estilos.personas}>
            <View style={{ flex: 1, marginLeft: 8 }}>
              <Text style={estilos.textoChico}>Publicado por</Text>
              <Text style={estilos.nombre}>Andrés Valero</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 8 }}>
              <Text style={estilos.textoChico}>Categoría</Text>
              <Text style={estilos.nombre}>Medio Ambiente</Text>
            </View>
          </View>
          <View style={estilos.filaEntre}>
            <Text style={estilos.dato}>Valor hora: 1 credito</Text>
            <Text style={estilos.textoChico}>Publicado hace 4 días</Text>
          </View>
          <View style={estilos.botonAuditar}>
            <Text style={estilos.textoAuditar}> Auditar tiempos y trazabilidad</Text>
            <Text style={{ color: '#3F4C8F' }}>›</Text>
          </View>
        </View>
      </ScrollView>

      <BarraInferior tipo="admin" />
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
    backgroundColor: 'white',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  nombreApp: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3F4C8F',
  },
  subnombre: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#64748B',
  },
  filaEntre: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buscador: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 14,
  },
  filtro: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 10,
    borderRadius: 20,
    marginRight: 8,
  },
  filtroActivo: {
    backgroundColor: '#3F4C8F',
    padding: 10,
    borderRadius: 20,
    marginRight: 8,
  },
  textoFiltro: {
    fontWeight: 'bold',
    color: '#334155',
    fontSize: 13,
  },
  textoFiltroActivo: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 13,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 10,
  },
  textoChico: {
    fontSize: 12,
    color: '#64748B',
  },
  tarjeta: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    marginBottom: 14,
  },
  estado: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    overflow: 'hidden',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0F172A',
    marginVertical: 8,
  },
  personas: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F8F7',
    borderRadius: 14,
    padding: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  nombre: {
    fontWeight: 'bold',
    color: '#0F172A',
    fontSize: 14,
  },
  dato: {
    backgroundColor: '#FFEDE3',
    color: '#9A4A00',
    fontWeight: 'bold',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    overflow: 'hidden',
  },
  botonAuditar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F4F8F7',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    padding: 12,
    marginTop: 12,
  },
  textoAuditar: {
    color: '#3F4C8F',
    fontWeight: 'bold',
  },
});