import 'react-native-gesture-handler';
import React from 'react';

// Views y Components
import Inicio from './views/Inicio';
import NuevoCliente from './views/NuevoCliente';
import DetallesCliente from './views/DetallesCliente';
// import BarraSuperior from './components/ui/BarraSuperior';

// Framework UI paper
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Defino la navegacion de tipo stack o pila
const Stack = createStackNavigator();

// Defino el tema
const theme = {
  // Realizo la copia del tema completo
  ...DefaultTheme,
  // Accedo al objeto colors y realizo una copia de todas sus propiedades y puedo reescribir sus propiedades
  colors: {
    ...DefaultTheme.colors,
    onBackground: '#1774F2',
    accent: '#0655BF'
  }
}

// console.log(theme);

const App = () => {

  return (
    <>
    <PaperProvider theme={ theme }>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
          screenOptions={{ 
            headerBackTitleStyle: 'bold',
            headerStyle: { 
              backgroundColor: theme.colors.onBackground
            },
            headerTitleAlign: 'center',
            headerTintColor: theme.colors.surface
          }}
        >

          <Stack.Screen 
            name="Inicio" 
            component={ Inicio } 
          />

          <Stack.Screen 
            name="NuevoCliente" 
            component={ NuevoCliente } 
            options={{ title: 'Nuevo Cliente'}}
          />

          <Stack.Screen 
            name="DetallesCliente" 
            component={ DetallesCliente } 
            options={{ title: 'Detalles Cliente'}}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    </>
  );
};

export default App;
