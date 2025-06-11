import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import MoodSelectionScreen from './screens/MoodSelectionScreen';
import ResultScreen from './screens/ResultScreen';

export type RootStackParamList = {
  Login: undefined;
  Humor: undefined;
  Resultado: { humorEscolhido: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Humor" component={MoodSelectionScreen} />
        <Stack.Screen name="Resultado" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
