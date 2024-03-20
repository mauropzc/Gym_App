import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, Image } from 'react-native';

const Perfil = () => {
        const [nombre, setNombre] = useState('');
        const [apellido, setApellido] = useState('');
        const [edad, setEdad] = useState('');
        const [email, setEmail] = useState('');
        const [usuario, setUsuario] = useState('');
        const [password, setPassword] = useState('');
      
        const handleEdit = () => {
          // TODO: Implementar la lógica para actualizar la información del usuario
          // Enviar la información actualizada al servidor y manejar la respuesta
          console.log('Información actualizada!');
        };
      
        return (
          <View style={styles.container}>
            <Text style={styles.title}>Editar perfil</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              onChangeText={setNombre}
              value={nombre}
            />
            <TextInput
              style={styles.input}
              placeholder="Apellido"
              onChangeText={setApellido}
              value={apellido}
            />
            <TextInput
              style={styles.input}
              placeholder="Edad"
              onChangeText={setEdad}
              value={edad}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={setEmail}
              value={email}
            />
            <TextInput
              style={styles.input}
              placeholder="Usuario"
              onChangeText={setUsuario}
              value={usuario}
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              onChangeText={setPassword}
              value={password}
            />
            <Button title="Editar" onPress={handleEdit} />
          </View>
        );
      };
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        title: {
          fontSize: 20,
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
      });

export default Perfil;