import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa tus pantallas
import Welcome from './src/views/welcome';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Pantalla de bienvenida */}
        <Stack.Screen 
          name="Welcome" 
          component={Welcome} 
          options={{ title: 'Bienvenida' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;