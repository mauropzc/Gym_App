
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

//Screens
import Login from './screens/login';
import Perfil from './screens/perfil';



const Main = () => {
  // ...
};

export default function App() {
  return(
    <Login />
    //<Perfil />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
