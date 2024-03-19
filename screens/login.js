import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, Button, View, Image } from 'react-native';
import { Button_login } from '../components/buttons';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Implementar la lógica de autenticación
    // Enviar credenciales al servidor y manejar la respuesta
    if (username === 'usuario' && password === 'contraseña') {
      console.log('Inicio de sesión exitoso!');
      // Navegar a la pantalla principal de la aplicación
    } else {
      console.log('Inicio de sesión fallido.');
      // Mostrar mensaje de error al usuario
    }
  };

  return (
    <View style={styles.container}>

        <Image source={require('D:/Semestre 9/Software 3/Gym_App/assets/img/logo_login.png')} style={styles.logo}></Image>
        <Text style={styles.title}> Sign In</Text>
        <Text style={styles.labels}>   Username</Text>
        <TextInput
            style={styles.input}
            placeholder="name@example.com"
            onChangeText={setUsername}
            value={username}
        />
        <Text style={styles.labels}>   Password</Text>
        <TextInput
            style={styles.input}
            placeholder="*******"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
        />
        <Button_login />

        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: '95%',
  },
  labels: {
    fontSize: 20,
  },
  logo: {
    width: '100%',
    height: '45%',
    resizeMode: 'cover',
    //marginBottom: 20,
  }
});

export default Login;