import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput,Image } from 'react-native';
import React,{useState} from 'react';

export default function App() {

  const [valor_atual,setValor_atual] = useState ('');
  const [valor_antigo,setValor_antigo] = useState ('');

function CalcularJuros(){
  if (valor_atual > 0 ){
    setValor_antigo((parseFloat(valor_atual / 1.2)));
  }
  else{
    setValor_antigo("Favor Informe valores positivios")
  }
}

  return (
    <View style={styles.container}>


    <Text> </Text>
    <Text> </Text>
    <Text> </Text>
    <Text> </Text>

    <Text>Informe valores a baixo para calcular o juros</Text>
    <Text> </Text>
    <Text> </Text>

    <TextInput placeholder="informe o valor atual" 
      style={{height:30,width:200, textAlign:"center", borderWidth:1,padding:5}}
      keyboardType={'numeric'}
      onChangeText={valor_atual =>  setValor_atual(valor_atual)} 
    />
    <Text> </Text>
    <Text> </Text>



    <Button 
      title="calcular"
      onPress={CalcularJuros}
      />
    
    <Text></Text>

    <Text>{valor_antigo}</Text>
    
    <StatusBar style="auto" />
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6495ED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});