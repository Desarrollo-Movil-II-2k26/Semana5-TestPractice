import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Welcome from './src/views/WelcomeView';
import PlayList from './src/views/PlayListView';
import DetailsView from './src/views/DetailsView';
import { tabScreenOptions } from './src/styles/tabNavigationStyles';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Iconos de las tabs
const HomeIcon = ({ color, size }: { color: string; size: number }) => (
  <Ionicons name="home-outline" size={size} color={color} />
);

const ListIcon = ({ color, size }: { color: string; size: number }) => (
  <Ionicons name="list-outline" size={size} color={color} />
);

// Stack que contiene la lista y la pantalla de detalles
function PlayListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PlayList"
        component={PlayList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailsView"
        component={DetailsView}
        options={{ title: 'Detalles' }}
      />
    </Stack.Navigator>
  );
}

// App principal con tabs
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={tabScreenOptions}>
        <Tab.Screen
          name="Home"
          component={Welcome}
          options={{ tabBarIcon: HomeIcon }}
        />
        <Tab.Screen
          name="Lista de Lugares"
          component={PlayListStack} // Aquí ponemos el stack
          options={{ tabBarIcon: ListIcon }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;