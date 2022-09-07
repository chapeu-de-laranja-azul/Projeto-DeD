import * as React from 'react';
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import RolagemDados from './screens/RolagemDados';
import Iniciativa from './screens/Iniciativa';
import Monstros from './screens/Monstros';

function RolagemDadosScreen() {
  return(
  <RolagemDados></RolagemDados>
  );
}

function IniciativaScreen() {
  return(
    <Iniciativa></Iniciativa>
  );
}

function MonstrosScreen() {
  return(
    <Monstros></Monstros>
  );
}
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName='MonstrosScreem'>
      <Drawer.Screen name="Rolagem Dados" component={RolagemDadosScreen} />
      <Drawer.Screen name="Monstros" component={MonstrosScreen}/>
      <Drawer.Screen name="Iniciativa" component={IniciativaScreen}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}