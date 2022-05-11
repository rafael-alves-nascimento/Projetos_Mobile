import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [valor_1,setValor_1] = useState('');
  const [valor_2,setvalor_2] = useState('');
  const [valor_3,setvalor_3] = useState('');
  const [valor_4,setvalor_4] = useState('');
  const [valor_5,setvalor_5] = useState('');
  const [resultado,setResultado] = useState('');
  
  
  function calcularResultado(){
    if (valor_1 > 0 && valor_2 > 0 && valor_3 > 0 && valor_4 > 0 && valor_5 > 0) {
      setResultado((parseFloat(valor_1) + parseFloat(valor_2) + parseFloat(valor_3) + parseFloat(valor_4) + parseFloat(valor_5))/5);
    }
    else{
      setResultado("Favor digitar valores positivos")
    }
  }
  
    return (
      <View style={styles.container}>
        <Image
          style={{height:200,width:200}}
          source={require('./assets/Logo.png')}
        />
        <Text> </Text>
        <Text>Informe os valores para o calculo da media</Text>
        <Text> </Text>
        <TextInput
          style={styles.input}
            placeholder='Primeiro valor'
            keyboardType={'numeric'}
            onChangeText={valor_1 => setValor_1(valor_1)}
        />
        <TextInput
            style={styles.input}
            placeholder='Segundo valor'
            keyboardType={'numeric'}
            onChangeText={valor_2 => setvalor_2(valor_2)}
        />
  
        <TextInput
            style={styles.input}
            placeholder=' Terceiro valor '
            keyboardType={'numeric'}
            onChangeText={valor_3 => setvalor_3(valor_3)}
        />
        <TextInput
            style={styles.input}
            placeholder= ' Quarto valor '
            keyboardType={'numeric'}
            onChangeText={valor_4 => setvalor_4(valor_4)}
        />
        <TextInput
            style={styles.input}
            placeholder= ' Quinto valor '
            keyboardType={'numeric'}
            onChangeText={valor_5 => setvalor_5(valor_5)}
        />
  
        <Button
          style={styles.botao}
          title="Calcular"
          onPress={calcularResultado}
        />
      <Text></Text>
      <Text>O resultado da média dos valores é: {resultado}</Text>
  
        <StatusBar style="auto" />
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
    borderRadius:10,
    color: 'red' ,
    height: 30,
    width:150, 
    textAlign:"center", 
    borderWidth:1, 
    marginBottom:10
  },
  botao:{
    backgroundColor:'red'
  }
});
