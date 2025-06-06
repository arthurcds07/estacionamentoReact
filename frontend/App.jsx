import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from './src/screens/LoginScreen'
import VagasScreen from './src/screens/VagasScreen'
// import SegundaVagas from './src/screens/SegundaVagas.jsx'
import CadastroScreen from './src/screens/CadastroScreen.jsx'

const Stack = createNativeStackNavigator()

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Vagas">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Cadastro" component={CadastroScreen} />
                <Stack.Screen name="Vagas" component={VagasScreen} />
                {/* <Stack.Screen name="EditUser" component={EditUserScreen} /> */}
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}