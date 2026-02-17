import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Welcome from './src/views/WelcomeView';
import PlayList from './src/views/PlayListView.tsx';
import { tabScreenOptions } from './src/styles/tabNavigationStyles';

const Tab = createBottomTabNavigator();

const HomeIcon = ({ color, size }: { color: string; size: number }) => (
  <Ionicons name="home-outline" size={size} color={color} />
);

const ListIcon = ({ color, size }: { color: string; size: number }) => (
  <Ionicons name="list-outline" size={size} color={color} />
);

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={tabScreenOptions}>
        <Tab.Screen
          name="Home"
          component={Welcome}
          options={{
            tabBarIcon: HomeIcon,
          }}
        />
        <Tab.Screen
          name="Lista de Lugares"
          component={PlayList}
          options={{
            tabBarIcon: ListIcon,
          }}
        />
        {/* Aquí se pueden agregar más pantallas */}

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
