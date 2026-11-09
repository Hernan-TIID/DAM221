import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import BarraInferior from '../components/BarraInferior';

export default function AdminReportesScreen() {
  return (
    <SafeAreaView style={estilos.contenedor}>
      <ScrollView contentContainerStyle={estilos.scroll}>
        <View style={estilos.filaEntre}>
          <View>
            <Text style={estilos.etiquetaAzul}>GOBERNANZA COMUNAL</Text>
            <Text style={estilos.nombreApp}>Banco de Tiempo</Text>
          </View>
          <Text style={estilos.admin}> ADMIN</Text>
        </View>

        {/* Cuadros de números */}
        <View style={estilos.cuadros}>
          <View style={estilos.cuadro}>
            <View style={estilos.filaEntre}>
              <Text style={estilos.mini}>+32 este mes</Text>
            </View>
            <Text style={estilos.textoChico}>Usuarios totales</Text>
            <Text style={estilos.numero}>854 miembros</Text>
          </View>
          <View style={estilos.cuadro}>
            <View style={estilos.filaEntre}>
              <Text style={estilos.miniGris}>14 categorías</Text>
            </View>
            <Text style={estilos.textoChico}>Servicios publicados</Text>
            <Text style={estilos.numero}>312 activos</Text>
          </View>
          <View style={estilos.cuadro}>
            <View style={estilos.filaEntre}>
              <Text style={estilos.mini}>86% aceptadas</Text>
            </View>
            <Text style={estilos.textoChico}>Solicitudes enviadas</Text>
            <Text style={estilos.numero}>487 peticiones</Text>
          </View>
          <View style={estilos.cuadro}>
            <View style={estilos.filaEntre}>
              <Text style={estilos.miniNaranja}>100% recíproco</Text>
            </View>
            <Text style={estilos.textoChico}>Intercambios completados</Text>
            <Text style={estilos.numero}>418 horas</Text>
          </View>
        </View>

        {/* Categorías */}
        <View style={estilos.tarjeta}>
          <Text style={estilos.subtitulo}>Distribución por Categoría</Text>
          <Text style={estilos.texto}>Proporción de oferta de talentos comunales</Text>

          <View style={estilos.filaCategorias}>
            <View style={{ flex: 1, marginLeft: 16 }}>
              <View style={estilos.filaLeyenda}>
                <Text style={estilos.leyenda}>Educación</Text>
                <Text style={estilos.porcentaje}>28%</Text>
              </View>
              <View style={estilos.filaLeyenda}>
                <Text style={estilos.leyenda}>Cuidados</Text>
                <Text style={estilos.porcentaje}>24%</Text>
              </View>
              <View style={estilos.filaLeyenda}>
                <Text style={estilos.leyenda}>Reparaciones</Text>
                <Text style={estilos.porcentaje}>20%</Text>
              </View>
              <View style={estilos.filaLeyenda}>
                <Text style={estilos.leyenda}>Sostenibilidad</Text>
                <Text style={estilos.porcentaje}>18%</Text>
              </View>
              <View style={estilos.filaLeyenda}>
                <Text style={estilos.leyenda}>Otros</Text>
                <Text style={estilos.porcentaje}>10%</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Satisfacción */}
        <View style={estilos.tarjeta}>
          <Text style={estilos.subtitulo}>Satisfacción y Confianza Vecinal</Text>

            <View style={estilos.filaEntre}>
              <Text style={estilos.leyenda}>★ 5 estrellas</Text>
              <Text style={estilos.porcentaje}>92%</Text>
            </View>

            <View style={estilos.filaEntre}>
              <Text style={estilos.leyenda}>★ 4 estrellas</Text>
              <Text style={estilos.porcentaje}>6%</Text>
            </View>

            <View style={estilos.filaEntre}>
              <Text style={estilos.leyenda}>☆ Otros (≤ 3 estrellas)</Text>
              <Text style={estilos.porcentaje}>2%</Text>
            </View>
        </View>
          
      </ScrollView>

      <BarraInferior tipo="admin" />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#F4F8F7', paddingTop: 30 },
  scroll: { padding: 16 },
  filaEntre: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  etiquetaAzul: { fontSize: 11, fontWeight: 'bold', color: '#3F4C8F' },
  nombreApp: { fontSize: 24, fontWeight: 'bold', color: '#006B49', paddingBottom:20},
  admin: { backgroundColor: '#E8EBFA', color: '#3F4C8F', fontWeight: 'bold', paddingHorizontal: 12, paddingVertical: 5, borderRadius: 20, overflow: 'hidden' },
  periodos: { flexDirection: 'row', backgroundColor: '#E6ECEA', borderRadius: 14, padding: 4, marginVertical: 14 },
  periodo: { flex: 1, padding: 10, borderRadius: 10, alignItems: 'center' },
  periodoActivo: { flex: 1, padding: 10, borderRadius: 10, alignItems: 'center', backgroundColor: 'white' },
  textoPeriodo: { fontWeight: 'bold', color: '#334155', fontSize: 12 },
  textoPeriodoActivo: { fontWeight: 'bold', color: '#3F4C8F', fontSize: 12 },
  cuadros: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  cuadro: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  mini: { backgroundColor: '#C9F1EA', color: '#006B49', fontSize: 11, fontWeight: 'bold', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 12, overflow: 'hidden' },
  miniGris: { backgroundColor: '#F1F5F4', color: '#334155', fontSize: 11, fontWeight: 'bold', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 12, overflow: 'hidden' },
  miniNaranja: { backgroundColor: '#FFEDE3', color: '#9A4A00', fontSize: 11, fontWeight: 'bold', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 12, overflow: 'hidden' },
  textoChico: { fontSize: 12, color: '#64748B', marginTop: 10 },
  numero: { fontSize: 20, fontWeight: 'bold', color: '#0F172A', marginTop: 2 },
  tarjeta: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  subtitulo: { flex: 1, fontSize: 18, fontWeight: 'bold', color: '#0F172A' },
  texto: { fontSize: 13, color: '#334155', marginTop: 4 },
  grafica: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 320,
    marginVertical: 14,
  },
  columna: { width: '17%', alignItems: 'center', justifyContent: 'flex-end' },
  barra: { width: '100%', backgroundColor: '#9CF1EA', borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  barraMayo: { width: '100%', height: 285, backgroundColor: '#0F7B75', borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  valorMayo: { fontSize: 11, fontWeight: 'bold', color: '#0F172A', marginBottom: 4 },
  mes: { fontSize: 12, color: '#64748B', marginTop: 6 },
  mesMayo: { fontSize: 12, color: '#0F172A', fontWeight: 'bold', marginTop: 6 },
  filaCategorias: { flexDirection: 'row', alignItems: 'center', marginTop: 14 },
  circulo: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 18,
    borderColor: '#0F7B75',
    borderRightColor: '#3F4C8F',
    borderBottomColor: '#E8731A',
    borderLeftColor: '#1F7A3A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numeroCirculo: { fontSize: 24, fontWeight: 'bold', color: '#0F172A' },
  filaLeyenda: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
  punto: { width: 12, height: 12, borderRadius: 6, marginRight: 8 },
  leyenda: { flex: 1, fontSize: 14, color: '#0F172A' },
  porcentaje: { fontWeight: 'bold', color: '#0F172A' },
  fondoBarra: { height: 10, backgroundColor: '#E2E8F0', borderRadius: 5, marginTop: 6, marginBottom: 12 },
  relleno: { height: 10, borderRadius: 5 },
});
