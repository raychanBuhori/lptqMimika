import 'react-native-gesture-handler';
import * as React from 'react';
import MyApp from './src';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <MyApp />
    </NavigationContainer>
  );
}
