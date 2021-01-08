import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import React from 'react';

const Card = ({ id, nombre, apellido, celular , openModal}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{nombre}</Text>
      <Text style={styles.text}>{apellido}</Text>
      <Text style={styles.text}>{celular}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={openModal.bind(this, id)}
      >
        <Text style={{color:'#fff'}}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  text: {
    fontSize: 27,
  },
  item: {
    backgroundColor: '#EBEAEA',
    borderRadius: 12,
    height: 160,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }, 
  button: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
    width:70,
    borderRadius:6

  }


});


export default Card 