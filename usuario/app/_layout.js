import { Stack } from "expo-router";

export default function RootLayout()
{
    return (
    <Stack>
    <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
    <Stack.Screen name="detalle" options={{title:"Detalle Usuario"}}/>
    <Stack.Screen name="actualizar" options={{title:"Actualizar Usuario"}}/>
    </Stack>
);
    

}
