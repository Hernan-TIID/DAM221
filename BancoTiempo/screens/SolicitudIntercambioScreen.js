import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function SolicitudIntercambioScreen() {
  return (
    <View style={{ flex: 1 }}>

        <View style={estilos.ventana}>

          <View style={estilos.filaArriba}>
            <View style={{ flex: 1 }}>
              <Text style={estilos.titulo}>Enviar Solicitud de Intercambio</Text>
            </View>
            <Pressable style={estilos.botonCerrar}>
              <Text>x</Text>
            </Pressable>
          </View>

          <View style={estilos.resumen}>
            <View style={{ flex: 1 }}>
              <Text style={estilos.servicio}>Acompañamiento en Trámites</Text>
              <Text style={estilos.textoChico}>Con Marcos Ruiz</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={estilos.textoChico}>Costo total</Text>
              <Text style={estilos.costo}>1 crédito (1h)</Text>
            </View>
          </View>

          <View style={estilos.saldoSuficiente}>
            <View>
              <Text style={estilos.saldoTitulo}>Tienes saldo suficiente</Text>
              <Text style={estilos.saldoTexto}>(Te quedarán 3 créditos tras el servicio)</Text>
            </View>
          </View>

          <Text style={estilos.label}>Fecha y hora propuesta</Text>
          <View style={estilos.fecha}>
            <Text style={{ flex: 1 }}> Sábado 18 de Mayo, 10:30 AM</Text>
          </View>

          <Pressable style={estilos.botonEnviar}>
            <Text style={estilos.textoBoton}> Confirmar y Enviar Solicitud</Text>
          </Pressable>
          <Text style={estilos.aviso}>El crédito se descontará únicamente al finalizar la sesión con conformidad.</Text>
        </View>
      </View>
  );
}

const estilos = StyleSheet.create({
  
  ventana: {
    backgroundColor: 'white',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 20,
    paddingBottom: 30,
    paddingTop:200,
  },
  filaArriba: { flexDirection: 'row', marginBottom: 14 },
  titulo: { fontSize: 22, fontWeight: 'bold', color: '#0F172A' },
  botonCerrar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#F1F5F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resumen: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F8F7',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  cajaIcono: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#CFEDEA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  servicio: { fontSize: 16, fontWeight: 'bold', color: '#0F172A' },
  textoChico: { fontSize: 12, color: '#64748B' },
  costo: { fontSize: 17, fontWeight: 'bold', color: '#9A4A00' },
  saldoSuficiente: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6F4EE',
    borderRadius: 14,
    padding: 12,
    marginVertical: 14,
  },
  saldoTitulo: { fontWeight: 'bold', color: '#006B49' },
  saldoTexto: { fontSize: 12, color: '#006B49' },
  label: { fontSize: 14, fontWeight: 'bold', color: '#0F172A', marginBottom: 6 },
  fecha: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F4EF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 6,
  },
  botonEnviar: { backgroundColor: '#0F7B75', padding: 15, borderRadius: 14, alignItems: 'center', marginTop: 14 },
  textoBoton: { color: 'white', fontWeight: 'bold', fontSize: 15 },
  aviso: { textAlign: 'center', fontSize: 12, color: '#64748B', marginTop: 12 },
});
