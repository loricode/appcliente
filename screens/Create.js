import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { post } from 'axios';

const baseURL = 'http://192.168.1.10:8000/';

const Create = () => {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [celular, setCelular] = useState('')
    
    
    const addCliente = async() => {
    
      const obj = new FormData()
      obj.append("nombre", nombre)
      obj.append("apellido",apellido)
      obj.append("celular", celular)
      const { data } = await post(baseURL+'clientes/add',obj)
      console.log(data)
      clearInput()
    }

    const clearInput = () => {
        setNombre('')
        setApellido('')
        setCelular('')
    }

    return (
        <View style={styles.container}>

            <TextInput
                placeholder="Nombre"
                style={styles.input}
                onChangeText={setNombre}
                value={nombre}
            />

            <TextInput
                placeholder="Apellido"
                style={styles.input}
                onChangeText={setApellido}
                value={apellido}
            />

            <TextInput
                placeholder="Celular"
                style={styles.input}
                onChangeText={setCelular}
                value={celular}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={addCliente}
            >
                <Text>Aceptar</Text>
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 40,

    },
    input: {
        fontSize: 23,
        margin: 10,
        padding: 10,
        borderBottomWidth: 1

    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      },


});

export default Create;