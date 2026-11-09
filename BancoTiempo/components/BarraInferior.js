import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

// Barra de abajo (solo se ve, no navega)
export default function BarraInferior({ tipo }) {
  let botones = ['Servicios', 'Solicitudes', 'Créditos', 'Mis Habilidades'];

  if (tipo === 'admin') {
    botones = ['Usuarios', 'Supervisión', 'Reportes', 'Miembro'];
  }

  return (
    <View style={estilos.barra}>
      {botones.map((nombre) => (
        <Pressable
          key={nombre}
          style={estilos.boton}
        >
          <Text style={estilos.texto}>{nombre}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const estilos = StyleSheet.create({
  barra: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  boton: { alignItems: 'center', padding: 8, borderRadius: 20 },
  botonActivo: { alignItems: 'center', padding: 8, borderRadius: 20 },
  texto: { fontSize: 11, color: '#334155' },
  textoActivo: { fontSize: 11, color: 'white', fontWeight: 'bold' },
});
