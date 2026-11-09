import React from 'react';
import {SafeAreaView, ScrollView, View,Text, TextInput, Image,StyleSheet, Switch,} from 'react-native';
import BarraInferior from '../components/BarraInferior';

export default function AdminGestionScreen() {
  return (
    <SafeAreaView style={estilos.contenedor}>
      <View style={estilos.barraArriba}>
        <Text style={estilos.nombreApp}>Banco de Tiempo</Text>
        <Text style={estilos.admin}>ADMIN</Text>
      </View>

      <ScrollView contentContainerStyle={estilos.contenido}>
        <View style={estilos.tarjeta}>
          <View style={estilos.fila}>
            <View style={estilos.textoFlexible}>
              <Text style={estilos.tituloTarjeta}>Nueva Clasificación</Text>
              <Text style={estilos.textoChico}>Añade categorías al banco </Text>
            </View>
            <View style={estilos.botonCrear}>
              <Text style={estilos.textoCrear}>+ Crear</Text>
            </View>
          </View>
        </View>

        <Text style={estilos.titulo}>Gestión de categorías</Text>

        <View style={estilos.tarjeta}>
          <View style={estilos.fila}>
            <View style={estilos.textoFlexible}>
              <Text style={estilos.tituloTarjeta}>Educación y Aprendizaje</Text>
              <Text style={estilos.textoChico}> 45 servicios vinculados</Text>
            </View>
            <Text style={estilos.estadoActivo}> Activa</Text>
          </View>
          <Text style={estilos.texto}>
            Intercambio de saberes, idiomas, refuerzo escolar, talleres de música y formación digital intergeneracional.
          </Text>
          <View style={estilos.pie}>
            <View style={estilos.fila}>
              <View style={estilos.botonEditar}>
                <Text style={estilos.textoEditar}> Editar</Text>
              </View>
            </View>
            <View style={estilos.fila}>
              <Text style={estilos.textoChico}>Desactivar</Text>
              <View>
                <Switch value={true} trackColor={{ true: '#006B49' }} />
              </View>
            </View>
          </View>
        </View>

        <View style={estilos.tarjeta}>
          <View style={estilos.fila}>
            <View style={estilos.textoFlexible}>
              <Text style={estilos.tituloTarjeta}>Hogar y Mantenimiento</Text>
              <Text style={estilos.textoChico}> 38 servicios</Text>
            </View>
            <Text style={estilos.estadoActivo}> Activa</Text>
          </View>
          <Text style={estilos.texto}>
            Reparaciones menores, fontanería básica, jardinería comunitaria, montaje de muebles y pintura solidaria.
          </Text>
          <View style={estilos.pie}>
            <View style={estilos.fila}>
              <View style={estilos.botonEditar}>
                <Text style={estilos.textoEditar}> Editar</Text>
              </View>
            </View>
            <View style={estilos.fila}>
              <Text style={estilos.textoChico}>Desactivar</Text>
              <Switch value={true} trackColor={{ true: '#006B49' }} />
            </View>
          </View>
        </View>

        <Text style={estilos.titulo}>Gestión de usuarios</Text>

        <View style={estilos.buscador}>
          <Text style={estilos.lupa}>🔍</Text>
          <TextInput
            editable={false}
            style={estilos.entrada}
            placeholder="Buscar por participantes, actividad o ID..."
          />
        </View>

        <View style={[estilos.tarjeta]}>
          <View style={estilos.fila}>
            <View style={estilos.textoFlexibleConMargen}>
              <Text style={estilos.tituloTarjeta}>Carlos Méndez</Text>
              <Text style={estilos.estadoActivo}> Activo</Text>
              <Text style={estilos.textoChico}>carlos.mendez@comunidad.org</Text>
            </View>
            <Text style={estilos.horas}> 3.5h</Text>
          </View>
          <Text style={estilos.textoChicoSeparado}> 14 intercambios</Text>
          <View style={estilos.pie}>
            <View style={estilos.botonPerfil}>
              <Text style={estilos.textoPerfil}> Ver Perfil</Text>
            </View>
            <View style={estilos.botonGestionar}>
              <Text style={estilos.textoGestionar}> Gestionar Estado</Text>
            </View>
          </View>
        </View>

        <View style={[estilos.tarjeta]}>
          <View style={estilos.fila}>
            <View style={estilos.textoFlexibleConMargen}>
              <Text style={estilos.tituloTarjeta}>Elena Morales</Text>
              <Text style={estilos.estadoActivo}> Verificada</Text>
              <Text style={estilos.textoChico}>elena.morales@talleres.net</Text>
            </View>
            <Text style={estilos.horas}> 4.5h</Text>
          </View>
          <Text style={estilos.textoChicoSeparado}> 19 intercambios</Text>
          <View style={estilos.pie}>
            <View style={estilos.botonPerfil}>
              <Text style={estilos.textoPerfil}> Ver Perfil</Text>
            </View>
            <View style={estilos.botonGestionar}>
              <Text style={estilos.textoGestionar}> Gestionar Estado</Text>
            </View>
          </View>
        </View>

        <View style={[estilos.tarjeta]}>
          <View style={estilos.fila}>
            <View style={estilos.textoFlexibleConMargen}>
              <Text style={estilos.tituloTarjeta}>Roberto Peña</Text>
              <Text style={estilos.estadoRojo}> Suspendido</Text>
              <Text style={estilos.textoChico}>roberto.p@barrio.es</Text>
            </View>
            <Text style={estilos.horas}> 0.0h</Text>
          </View>
          <Text style={estilos.textoChicoSeparado}> 2 intercambios</Text>
          <View style={estilos.pie}>
            <View style={estilos.botonPerfil}>
              <Text style={estilos.textoPerfil}> Ver Historial</Text>
            </View>
            <View style={estilos.botonSuspension}>
              <Text style={estilos.textoSuspension}> Revisar Suspensión</Text>
            </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 12,
  },
  nombreApp: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3F4C8F',
  },
  admin: {
    backgroundColor: '#E8EBFA',
    color: '#3F4C8F',
    fontWeight: 'bold',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    overflow: 'hidden',
  },
  horasArriba: {
    backgroundColor: '#F4F8F7',
    color: '#006B49',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    overflow: 'hidden',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0F172A',
    marginTop: 8,
    marginBottom: 12,
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
  textoFlexible: {
    flex: 1,
  },
  textoFlexibleConMargen: {
    flex: 1,
    marginLeft: 12,
  },
  tituloTarjeta: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  texto: {
    fontSize: 13,
    color: '#334155',
    marginTop: 10,
  },
  textoChico: {
    fontSize: 12,
    color: '#64748B',
  },
  textoChicoSeparado: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 8,
  },
  cajaIcono: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#EFE6FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  icono: {
    fontSize: 22,
  },
  estadoActivo: {
    alignSelf: 'flex-start',
    backgroundColor: '#E6F4EE',
    color: '#006B49',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: 3,
  },
  estadoRojo: {
    alignSelf: 'flex-start',
    backgroundColor: '#FDECEC',
    color: '#C62828',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: 3,
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
    backgroundColor: '#E8EBFA',
    padding: 10,
    borderRadius: 12,
  },
  textoEditar: {
    color: '#3F4C8F',
    fontWeight: 'bold',
  },
  botonCrear: {
    backgroundColor: '#7C3AED',
    padding: 10,
    borderRadius: 12,
  },
  textoCrear: {
    color: 'white',
    fontWeight: 'bold',
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
  lupa: {
    marginRight: 8,
  },
  entrada: {
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  iniciales: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoIniciales: {
    fontWeight: 'bold',
    color: '#64748B',
    fontSize: 16,
  },
  horas: {
    backgroundColor: '#FFEDE3',
    color: '#9A4A00',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    overflow: 'hidden',
  },
  botonPerfil: {
    flex: 1,
    backgroundColor: '#F4F8F7',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    marginRight: 10,
  },
  textoPerfil: {
    color: '#0F172A',
    fontWeight: 'bold',
  },
  botonGestionar: {
    flex: 1.2,
    backgroundColor: '#E8EBFA',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  textoGestionar: {
    color: '#3F4C8F',
    fontWeight: 'bold',
  },
  botonSuspension: {
    flex: 1.2,
    backgroundColor: '#C62828',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  textoSuspension: {
    color: 'white',
    fontWeight: 'bold',
  },
  iconoOjo: {
    marginLeft: 12,
    fontSize: 18,
  },
  switchPunto: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: 'white',
  },
  bordeVerde: {
    borderLeftWidth: 6,
    borderLeftColor: '#006B49',
  },
  bordeRojo: {
    borderLeftWidth: 6,
    borderLeftColor: '#C62828',
  },
});