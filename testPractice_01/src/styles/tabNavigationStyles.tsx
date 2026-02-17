import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

export const tabScreenOptions: BottomTabNavigationOptions = {
  
  headerShown: true,

  headerStyle: {
    backgroundColor: '#0D47A1',
  },
  headerTintColor: '#ffffff',
  headerTitleAlign: 'center',

  tabBarStyle: {
    backgroundColor: '#ffffff',
    height: 65,
    paddingBottom: 8,
    paddingTop: 5,
  },

  tabBarActiveTintColor: '#0D47A1',
  tabBarInactiveTintColor: '#999999',
  tabBarShowLabel: false,
};