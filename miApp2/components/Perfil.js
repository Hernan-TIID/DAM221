import { Text, View, Button, Image } from 'react-native';

export const Perfil = () => {
  return (
    <View>
      <Image source={require('../assets/images.png')} />
      
      <Button title="Nombre:" />
      <Text>Hernan</Text>
      <Button title="Carrera: " />
      <Text>Ingeniería en Tecnologías de la Información e Innovacion Digital</Text>
      <Button title="Materia: " />
      <Text>Desarrollo Móvil</Text>
      <Button title="Cuatrimestre: " />
      <Text>Cuarto Cuatrimestre</Text>
      <Image source={require('../assets/wave.png')} />
    </View>
  );
};