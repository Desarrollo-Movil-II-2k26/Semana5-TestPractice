import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';
import store from './src/components/Store';

// Importación de vistas principales
import Welcome from './src/views/WelcomeView';
import PlayList from './src/views/PlayListView';
import DetailsView from './src/views/DetailsView';

// Estilos de la barra de navegación inferior
import { tabScreenOptions } from './src/styles/tabNavigationStyles';

// Creación del navegador de tabs y del stack
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Ícono para la pestaña de inicio
const HomeIcon = ({ color, size }: { color: string; size: number }) => (
  <Ionicons name="home-outline" size={size} color={color} />
);

// Ícono para la pestaña de lista de lugares
const ListIcon = ({ color, size }: { color: string; size: number }) => (
  <Ionicons name="list-outline" size={size} color={color} />
);

// Stack Navigator que contiene la lista de lugares y la pantalla de detalles
// Permite navegar de PlayList → DetailsView al seleccionar un lugar
function PlayListStack() {
  return (
    <Stack.Navigator>
      {/* Pantalla principal con la lista de lugares turísticos */}
      <Stack.Screen
        name="PlayList"
        component={PlayList}
        options={{ headerShown: false }}
      />
      {/* Pantalla de detalles del lugar seleccionado */}
      <Stack.Screen
        name="DetailsView"
        component={DetailsView}
        options={{ title: 'Detalles' }}
      />
    </Stack.Navigator>
  );
}

// Componente principal de la aplicación
// Provider envuelve todo para que Redux esté disponible en toda la app
function App() {
  return (
    <Provider store={store}>
      {/* Contenedor principal de navegación */}
      <NavigationContainer>
        {/* Barra de navegación inferior con 2 pestañas */}
        <Tab.Navigator screenOptions={tabScreenOptions}>
          {/* Pestaña de inicio / bienvenida */}
          <Tab.Screen
            name="Home"
            component={Welcome}
            options={{ tabBarIcon: HomeIcon }}
          />
          {/* Pestaña de lista de lugares con stack interno */}
          <Tab.Screen
            name="Lista de Lugares"
            component={PlayListStack}
            options={{ tabBarIcon: ListIcon }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;