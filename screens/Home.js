import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import
 { StyleSheet,
   View, 
   Text,
   Alert,
   SafeAreaView, 
   VirtualizedList, 
   Modal,
   TouchableHighlight
 } from 'react-native';

import axios from 'axios';
import Card from '../components/Card';


const baseURL = 'http://192.168.1.5:8000/';

const Home = () => {

  const [ id, setId ] = useState('')
  const [listCliente, setListCliente] = useState([])
  const [modalVisible, setModalVisible] = useState(false);


  useEffect(() => {
    getlistCliente()
  }, [])


  const getlistCliente = async () => {

    const { data } = await axios.get(baseURL + 'clientes/')
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

  const deleteCliente = async() => {
      const { data } = await axios.get(baseURL + `clientes/${id}`)
      Alert.alert(
        'Registro Eliminado',
         data.msg,
        [
          {
            text: 'Cancel',
            onPress: () => null,
          },
          { text: 'OK', onPress: () => null }
        ],
        { cancelable: false }
      );
      setModalVisible(false)
      getlistCliente()
  }

  const openModal = (id) => {
    setModalVisible(true)
    setId(id)
  }


  const renderItem = ({ item }) => (
    <Card
      id={item.id} 
      nombre={item.nombre}
      apellido={item.apellido}
      celular={item.celular}
      openModal={openModal} />
  );


  return (

    <SafeAreaView style={styles.container}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>¿Seguro que quieres eliminar?</Text>
          
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancelar</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "blue" }}
              onPress={deleteCliente}
            >
              <Text style={styles.textStyle}>Aceptar</Text>
            </TouchableHighlight>

          </View>
        </View>
      </Modal> 
      
       <VirtualizedList
          initialNumToRender={4}
          data={listCliente}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
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
   modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width:89,
    margin:12
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:17
    
  }


});

export default Home;