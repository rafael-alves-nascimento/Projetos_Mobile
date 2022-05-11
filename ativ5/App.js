import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput,Image } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [valor_atual, setValor_atual] = useState('');
  const [valor_antigo, setValor_antigo] = useState('');

  function CalcularDesconto() {
    if (valor_atual > 0) {
      setValor_antigo((parseFloat(valor_atual * 0.8 )));
    }
    else {
      setValor_antigo("Favor Informe valores positivios")
    }
  }

  return (
    <View style={styles.container}>
    <Image
      style={{height:200,width:200}}
      source={require("./assets/Logo.png")}
    />

    <Text>Informe valores a baixo para calcular o desconto</Text>
    <Text> </Text>

    <TextInput placeholder="informe o produto" 
      style={{height:30,width:250, textAlign:"center", borderWidth:1,padding:5}}
      keyboardType={'text'} 
    />
  <Text></Text>
    <TextInput placeholder="informe o valor atual do produto" 
      style={{height:30,width:250, textAlign:"center", borderWidth:1,padding:5}}
      keyboardType={'numeric'}
      onChangeText={valor_atual =>  setValor_atual(valor_atual)} 
    />
    <Text> </Text>

    <Button 
      title="calcular"
      onPress={CalcularDesconto}
      />
    
    <Text></Text>

    <Text >valor novo após o desconto: {valor_antigo}</Text>
    <Text></Text>
    <Text></Text>
    <Text></Text>
    <Text></Text>
    <Text style={{color:'black',alignItems:'center',justifyContent:'center'}} > Email para contato: Loja@gmail.com</Text>
      <StatusBar style="auto" />
    </View >

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
