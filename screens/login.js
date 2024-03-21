import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, Button, View, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Button_login } from '../components/buttons';


//Screen
//import Perfil from './perfil';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

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

  const onPress = () => {
    //
  };


  return (
    <View style={styles.container}>

        <Image source={require('D:/Semestre 9/Software 3/Gym_App/assets/img/logo_azul (1).png')} style={styles.logo}></Image>
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

        <CheckBox
          title= "Remember me"
          checked={rememberMe}
          onPress={() => setRememberMe(!rememberMe)}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.text}
        />

      <View style={styles.row}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.text_pass}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPress}>
          <Text style={styles.text_sign}>Sign Up</Text>
        </TouchableOpacity>
      </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'left'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    padding: 15,
    marginTop: 40
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: '90%',
    alignSelf: 'center'
  },
  labels: {
    fontSize: 20,
    marginLeft: 15,
    fontWeight: 'bold'
  },
  logo: {
    marginTop: 50,
    width: '100%',
    height: '45%',
    resizeMode: 'cover',
  },
  checkboxContainer: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    marginTop: -20,
    marginLeft: 15
    
  },
  text_pass: {
    fontSize: 18,
    paddingHorizontal: 15,
    marginTop: 20,
    marginLeft: 15
  },
  text_sign: {
    fontSize: 18,
    textAlign: 'right',
    fontWeight: 'bold',
    paddingHorizontal: 15,
    marginTop: 20,
    marginRight: 15
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default Login;