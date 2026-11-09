import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, Switch, Pressable, StyleSheet } from 'react-native';

export default function PublicarServicioScreen() {
  return (
    <SafeAreaView style={estilos.contenedor}>
      <ScrollView contentContainerStyle={estilos.scroll}>
        <Text style={estilos.tituloPantalla}>Publicar o Editar Servicio</Text>

        {/* Servicio activo */}
        <View style={estilos.tarjeta}>
          <View style={estilos.fila}>
            <View style={{ flex: 1 }}>
              <Text style={estilos.subtitulo}>Servicio Activo / Visible</Text>
            </View>
            <Switch value={true} trackColor={{ true: '#006B49' }} />
          </View>
          <Text style={estilos.texto}>Los vecinos de tu comunidad pueden encontrar este intercambio en el catálogo.</Text>
        </View>

        {/* Título */}
        <View style={estilos.tarjeta}>
          <Text style={estilos.subtitulo}>Título del servicio *</Text>
          <Text style={estilos.ayuda}>Describe brevemente qué talento o ayuda vas a compartir con tu vecindario.</Text>
          <TextInput style={estilos.input} placeholder="Escribe aqui" />
        </View>

        {/* Categoría */}
        <View style={estilos.tarjeta}>
          <Text style={estilos.subtitulo}>Categoría *</Text>
          <Text style={estilos.ayuda}>Facilita que las personas encuentren tu oferta en el banco de tiempo.</Text>
          <View style={estilos.selector}>
            <Text style={{ flex: 1, color: '#64748B' }}>Selecciona una opción</Text>
            <Text>⌄</Text>
          </View>
        </View>

        {/* Descripción */}
        <View style={estilos.tarjeta}>
          <Text style={estilos.subtitulo}>Descripción detallada *</Text>
          <Text style={estilos.ayuda}>
            Explica qué incluye la actividad y qué ingredientes o materiales debe aportar el solicitante.
          </Text>
          <TextInput style={estilos.inputGrande} placeholder="Escribe aqui" multiline={true} />
          <View style={estilos.filaEntre}>
            <Text style={estilos.textoChico}>Mínimo 50 caracteres</Text>
            <Text style={estilos.textoChico}>284 / 600</Text>
          </View>
        </View>

        {/* Duración */}
        <View style={estilos.tarjeta}>
          <Text style={estilos.subtitulo}>Duración estimada *</Text>
          <Text style={estilos.ayuda}>1 hora = 1 crédito </Text>
          <View style={estilos.fila}>
            <Pressable style={estilos.duracion}>
              <Text style={estilos.duracionTitulo}>1 hora</Text>
              <Text style={estilos.textoChico}>1 crédito</Text>
            </Pressable>
            <Pressable style={estilos.duracion}>
              <Text style={estilos.duracionTitulo}>2 horas</Text>
              <Text style={estilos.textoChico}>2 créditos</Text>
            </Pressable>
            <Pressable style={estilos.duracion}>
              <Text style={estilos.duracionTitulo}>3 horas</Text>
              <Text style={estilos.textoChico}>3 créditos</Text>
            </Pressable>
          </View>
        </View>

        {/* Disponibilidad */}
        <View style={estilos.tarjeta}>
          <Text style={estilos.subtitulo}>Disponibilidad horaria sugerida *</Text>
          <Text style={estilos.ayuda}>Indica los momentos habituales en los que puedes prestar el servicio.</Text>

          <Pressable style={estilos.opcion}>
            <View style={{ flex: 1 }}>
              <Text style={estilos.opcionTitulo}>Fines de semana </Text>
            </View>
          </Pressable>

          <Pressable style={estilos.opcion}>
            <View style={{ flex: 1 }}>
              <Text style={estilos.opcionTitulo}>Entre semana</Text>
            </View>
          </Pressable>

          <Pressable style={estilos.opcion}>
            <View style={{ flex: 1 }}>
              <Text style={estilos.opcionTitulo}>Horario flexible a convenir</Text>
              <Text style={estilos.textoChico}>Coordinación mediante chat interno</Text>
            </View>
          </Pressable>
        </View>

        <Pressable style={estilos.botonGuardar}>
          <Text style={estilos.textoBotonGuardar}> Guardar y Publicar Servicio</Text>
        </Pressable>
        <Pressable style={estilos.botonDesactivar}>
          <Text style={estilos.textoNaranja}> Desactivar este servicio</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#F4F8F7', paddingTop: 30 },
  scroll: { padding: 16 },
  tituloPantalla: { textAlign: 'center', fontSize: 17, fontWeight: 'bold', color: '#0F172A', marginBottom: 14 },
  tarjeta: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  fila: { flexDirection: 'row', alignItems: 'center' },
  filaEntre: { flexDirection: 'row', justifyContent: 'space-between' },
  subtitulo: { fontSize: 17, fontWeight: 'bold', color: '#0F172A' },
  texto: { fontSize: 13, color: '#334155' },
  ayuda: { fontSize: 13, color: '#334155', marginVertical: 6 },
  textoChico: { fontSize: 12, color: '#64748B' },
  textoNaranja: { color: '#9A4A00', fontWeight: 'bold' },
  enCurso: {
    alignSelf: 'flex-start',
    backgroundColor: '#E6F4EE',
    color: '#006B49',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    marginTop: 4,
  },
  input: {
    backgroundColor: '#F5F4EF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 50,
  },
  inputGrande: {
    backgroundColor: '#F5F4EF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    padding: 12,
    height: 110,
    textAlignVertical: 'top',
    marginBottom: 8,
  },
  selector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F4EF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 50,
  },
  duracion: {
    flex: 1,
    backgroundColor: '#F5F4EF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    padding: 12,
    alignItems: 'center',
    marginRight: 8,
  },
  duracionTitulo: { fontWeight: 'bold', fontSize: 16, color: '#0F172A' },
  opcion: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F4EF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    padding: 12,
    marginTop: 8,
  },
  opcionTitulo: { fontWeight: 'bold', color: '#0F172A' },
  botonGuardar: { backgroundColor: '#006B49', padding: 15, borderRadius: 14, alignItems: 'center', marginBottom: 10 },
  textoBotonGuardar: { color: 'white', fontWeight: 'bold', fontSize: 15 },
  botonDesactivar: {
    borderWidth: 1,
    borderColor: '#9A4A00',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 14,
    alignItems: 'center',
  },
});
