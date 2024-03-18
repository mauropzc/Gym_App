
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

//Screens
import Login from './screens/login';

const Main = () => {
  // ...
};

export default function App() {
  return(
    <Login />
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
