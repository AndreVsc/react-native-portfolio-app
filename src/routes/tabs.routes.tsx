import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Perfil } from '../screens/Perfil/Perfil';
import Projetos from '../screens/Projetos/Projetos';
import { Skills } from '../screens/Skills/Skills';

const { Screen, Navigator } = createMaterialTopTabNavigator();

export function TabsRoutes() {
  return (
    <>
      <Navigator 
        initialRouteName="Perfil" 
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIndicatorStyle: { backgroundColor: '#2F2F2F' },
          tabBarStyle: { backgroundColor: '#fff' }, 
        }}
      >
        <Screen name="Perfil" component={Perfil} />
        <Screen name="Projetos" component={Projetos} />
        <Screen name="Skills" component={Skills} />
      </Navigator>
    </>
  );
}

