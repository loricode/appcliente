import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Card = ({ nombre, apellido, celular })=> {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{ nombre }</Text>
        <Text style={styles.text}>{ apellido }</Text>
        <Text style={styles.text}>{ celular }</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
   
    text: {
      fontSize: 27,
    },
     item: {
      backgroundColor: '#EBEAEA',
      borderRadius:12,
      height: 150,
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
  
  
  });


 export default Card 