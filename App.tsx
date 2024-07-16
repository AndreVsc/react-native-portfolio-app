import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabsRoutes } from './src/routes/tabs.routes';
import { View , Text, StyleSheet } from 'react-native';

export default function App() {
  return (
      <NavigationContainer>
        <TabsRoutes />
      </NavigationContainer>
  );
}
