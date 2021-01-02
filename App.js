import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, VirtualizedList } from 'react-native';

import axios from 'axios';

import  Card from './components/Card';

const baseURL = "http://192.168.1.10:8000/"; 

const App = () =>  {
    
  const [ listCliente, setListCliente ] = useState([])

  useEffect(() => {
      getlistCliente()
  }, [])


  const getlistCliente = async() => {
    
     const { data } = await axios.get(baseURL+'clientes/')
     const { clientes } = data 
     setListCliente(clientes)
     console.log(clientes)
      
  }

  const getItemCount = () => {
    return listCliente.length;
  }

  const getItem = (data, index) => {
    const item = data[index]
    return { ...item }
  }

  const renderItem = ({ item } ) => ( 
     <Card nombre={item.nombre} apellido={item.apellido} celular={item.celular}  />
  );


  return (
    
    <SafeAreaView style={styles.container}>

      <VirtualizedList
        initialNumToRender={4}
        data={listCliente}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />

    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 22,
    
  },
  

});

export default App;