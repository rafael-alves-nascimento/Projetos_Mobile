import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, CheckBox,TouchableOpacity } from 'react-native';
import React, { useState } from 'react';



export default function App() {
  
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
      <Text style={styles.login} > LOGIN </Text>

      <hr  style={{backgroundColor:'blue',width:250}} ></hr>

      <Text style={styles.texto} >Seu email:</Text>
      <TextInput
          style={styles.input}
            placeholder='Insira seu email'
            keyboardType={'email-address'}
        />
        <Text style={styles.texto} >Sua senha:</Text>
        <TextInput
            style={styles.input}
            placeholder='Insira sua senha'
            keyboardType={'visible-password'}     
        />
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Manter-me logado</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={{color:'#fff'}} >Logar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height: 30,
    width:250, 
    textAlign:"center", 
    borderWidth:1, 
    marginBottom:10,
    backgroundColor:'#fff'
  },
  texto:{
    marginRight: 190,
  },
  login:{
    color:'blue',
    fontSize:30,
    fontWeight:600,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
    marginRight:110,
  },
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    width:250,
  },
  container2:{
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:7,
    borderColor:'#F7F2E0',
    padding:50,
    backgroundColor:"#f1ecd8",
  }

});
