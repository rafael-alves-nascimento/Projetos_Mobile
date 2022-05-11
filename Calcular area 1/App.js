import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput,Image} from 'react-native';
import React,{useState} from 'react';

export default function App() {

const [base,setBase] = useState('');
const [altura,setAltura] = useState('');
const [area,setArea] = useState('');


function calcularArea(){
  if (base > 0 && altura > 0){
    setArea((parseFloat(base) * parseFloat(altura))/2);
  }
  else {
    setArea ('Favor preencher com valores positivos');
  }
}

  return (
    <View style={styles.container}>
      <Image
        source={require('../primeiro_app/assets/calcular-area-triangulo.png')}
      />
      <Text> </Text>
      <Text>Informe valores abaixo para o cálculo da área do triângulo</Text>
      <Text> </Text>
      <TextInput
          placeholder=' Base '
          style={{height:30, textAlign:"center", borderWidth:1, marginBottom:10}}
          keyboardType={'numeric'}
          onChangeText={base => setBase(base)}
      />
      <TextInput
          placeholder='Altura'
          style={{height:30, textAlign:"center", borderWidth:1, marginBottom:10}}
          keyboardType={'numeric'}
          onChangeText={altura => setAltura(altura)}
      />
{/*  */}
      <Button
        title="Calcular"
        onPress={calcularArea}
      />
    <Text> </Text>
    <Text>{area}</Text>

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