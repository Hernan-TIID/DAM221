import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StyleSheet,} from 'react-native';
import BarraInferior from '../components/BarraInferior';

export default function CarteraScreen() {
  return (
    <SafeAreaView style={estilos.contenedor}>
      <ScrollView contentContainerStyle={estilos.contenido}>
        <View style={estilos.filaEntre}>
          <Text style={estilos.etiquetaVerde}>BILLETERA DE TIEMPO</Text>
          <Text style={estilos.etiquetaGris}> 1h = 1 Crédito</Text>
        </View>

        <Text style={estilos.titulo}>Cartera de créditos</Text>

        <View style={estilos.tarjetaSaldo}>
          <Text style={estilos.saldo}>12.5 Horas / Créditos</Text>
        </View>

        <Text style={estilos.subtitulo}>Resumen de Actividad</Text>

        <View style={estilos.filaBotones}>
          <View style={estilos.cuadroResumen}>
            <Text style={estilos.numeroVerde}>+4.0 h</Text>
            <Text style={estilos.texto}>Horas aportadas</Text>
          </View>

          <View style={estilos.cuadroResumen}>
            <Text style={estilos.numeroGris}>-2.0 h</Text>
            <Text style={estilos.texto}>Horas recibidas</Text>
          </View>
        </View>

        <View>
          <Text style={estilos.subtitulo}>Historial de movimientos</Text>
        </View>

        <Text style={estilos.mesSeccion}>Noviembre</Text>

        <View style={estilos.movimiento}>
          <View style={estilos.detalleMovimiento}>
            <Text style={estilos.tituloMovimiento}>Taller de panadería</Text>
            <Text style={estilos.textoChico}>18 Nov • Mariana G.</Text>
          </View>
          <View style={estilos.datosMovimiento}>
            <Text style={[estilos.monto, { color: '#64748B' }]}>-2.0 h</Text>
            <Text style={estilos.textoChico}>Consumido</Text>
          </View>
        </View>

        <View style={estilos.movimiento}>
          <View style={estilos.detalleMovimiento}>
            <Text style={estilos.tituloMovimiento}>Reparación de cerradura</Text>
            <Text style={estilos.textoChico}>14 Nov • Carlos R.</Text>
          </View>
          <View style={estilos.datosMovimiento}>
            <Text style={[estilos.monto, { color: '#006B49' }]}>+1.5 h</Text>
            <Text style={[estilos.textoChico, { color: '#006B49' }]}>Aportado</Text>
          </View>
        </View>

        <View style={estilos.movimiento}>
          <View style={estilos.detalleMovimiento}>
            <Text style={estilos.tituloMovimiento}>Clase de español básico</Text>
            <Text style={estilos.textoChico}>08 Nov • Lucía M.</Text>
          </View>
          <View style={estilos.datosMovimiento}>
            <Text style={[estilos.monto, { color: '#006B49' }]}>+2.0 h</Text>
            <Text style={[estilos.textoChico, { color: '#006B49' }]}>Aportado</Text>
          </View>
        </View>

        <View style={estilos.movimiento}>
          <View style={estilos.detalleMovimiento}>
            <Text style={estilos.tituloMovimiento}>Bono de bienvenida comunitario</Text>
            <Text style={estilos.textoChico}>01 Nov • Banco de Tiempo</Text>
          </View>
          <View style={estilos.datosMovimiento}>
            <Text style={[estilos.monto, { color: '#006B49' }]}>+2.0 h</Text>
            <Text style={[estilos.textoChico, { color: '#006B49' }]}>Crédito inicial</Text>
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
    paddingTop: 30,
  },
  filaEntre: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filaBotones: {
    flexDirection: 'row',
    marginTop: 14,
    marginBottom: 6,
  },
  etiquetaVerde: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#006B49',
  },
  etiquetaGris: {
    backgroundColor: '#E8EBFA',
    color: '#334155',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  subtitulo: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#0F172A',
    marginVertical: 10,
  },
  texto: {
    fontSize: 14,
    color: '#334155',
  },
  textoChico: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 4,
  },
  tarjetaSaldo: {
    backgroundColor: '#EAF8F1',
    borderRadius: 20,
    padding: 16,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#9DE8C6',
  },
  disponible: {
    backgroundColor: '#006B49',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  saldo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#006B49',
    marginVertical: 8,
  },
  botonVerde: {
    flex: 1,
    backgroundColor: '#006B49',
    padding: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginRight: 10,
  },
  textoBotonVerde: {
    color: 'white',
    fontWeight: 'bold',
  },
  botonBlanco: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  textoBotonBlanco: {
    color: '#1D4ED8',
    fontWeight: 'bold',
  },
  cuadroResumen: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 14,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
  },
  mes: {
    backgroundColor: '#E6F4EE',
    color: '#006B49',
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  numeroVerde: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#006B49',
    marginVertical: 8,
  },
  numeroGris: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#64748B',
    marginVertical: 8,
  },
  filtros: {
    flexDirection: 'row',
    backgroundColor: '#E8EBFA',
    borderRadius: 14,
    padding: 4,
    marginBottom: 12,
  },
  filtro: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  filtroActivo: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textoFiltro: {
    fontWeight: 'bold',
    color: '#334155',
    fontSize: 13,
  },
  textoFiltroActivo: {
    fontWeight: 'bold',
    color: '#006B49',
    fontSize: 13,
  },
  mesSeccion: {
    color: '#64748B',
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 4,
  },
  movimiento: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 14,
    borderBottomWidth: 1,
    borderColor: '#E2E8F0',
  },
  detalleMovimiento: {
    flex: 1,
  },
  datosMovimiento: {
    alignItems: 'flex-end',
    marginLeft: 8,
  },
  tituloMovimiento: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  monto: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});