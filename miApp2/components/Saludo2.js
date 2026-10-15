import { Text , Image, Button, View} from "react-native";

export const Saludo2=()=>{
    return(
        <View>  

            <Text>  Hola RN: Soy un componente Compuesto</Text>
            <Image source={require('../assets/wave.png')} />
            <Button title="Pesiona para Saludar"/>
            
        </View>
        
    )
}