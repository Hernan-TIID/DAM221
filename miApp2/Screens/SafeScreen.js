
// 1. Zona de importaciones 

import { StyleSheet, Text, View, Image , ScrollView, SafeAreaView} from 'react-native';

// 2. Zona render o Main

export default function SafeScreen() {
  
    const canciones=[
      '1','2','3','4','5','6','7','8','9,'

    ]
    return(
      <SafeAreaView>
        style= {styles.container}
       <Text style={styles.titulo}> MUSICA</Text>

       <View >  
       style = {styles.reproductor}
       <Text style={styles.titulo}> Lista de musica</Text>
      <Text>La musica mas escuchada</Text>
       </View>

      <Text style = {styles.subtitulo}>Canciones disponibles </Text>
      <ScrollView contentContainerStyle ={styles.contenidoLista} showsVerticalScrollIndicator={true}>
      {canciones.map((item, index)=>(
        <View key = {index} style={styles.tarjeta}>
          <Text style = {styles.textoLista}>{item}</Text>

        </View>

      )
      )
      }
      </ScrollView>

  </SafeAreaView>   
 );


}
// 3. Zona de estilos y posicionamientos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20
  },
  titulo:{
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  reproductor:{
    backgroundColor: '#ffffff',
    padding:20,
    borderRadius:15,
    alignItems: 'center'
  },
  texto:{
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom:10
  },
 subtitulo:{
  fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom:10,
    textAlign: 'center'
 },
 lista:{
  flex:1
 },

 tarjeta:{
  backgroundColor: '#ffffff',
  padding:20,
  marginBottom: 10,
  borderRadius:15
 },
 textoLista:{
  fontSize:18,
  textAlign:'center'
 },

});
