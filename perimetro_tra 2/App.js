import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput,Image} from 'react-native';
import React,{useState} from 'react';

export default function App() {

const [basemenor,setBasemenor] = useState('');
const [basemaior,setBasemaior] = useState('');
const [lado1,setLado1] = useState('');
const [lado2,setLado2] = useState('');
const [perimetro,setPerimetro] = useState('');


function calcularPerimetro(){
  if (basemenor > 0 && basemaior > 0 && lado1 > 0 && lado2 > 0){
    setPerimetro((parseFloat(basemenor) + parseFloat(basemaior) + parseFloat(lado1) + parseFloat(lado2) ));
  }
  else {
    setPerimetro('Favor preencher com valores positivos');
  }
}

  return (
    <View style={styles.container}>
      <Image
        source={require('../perimetro_tra/assets/trapezio_escaleno.png')}
      />
      <Text> </Text>
      <Text>Informe valores abaixo para o cálculo o perímetro do trapézio</Text>
      <Text> </Text>
      <TextInput
          placeholder=' Base menor '
          style={{height:30, textAlign:"center", borderWidth:1, marginBottom:10}}
          keyboardType={'numeric'}
          onChangeText={basemenor => setBasemenor(basemenor)}
      />
      <TextInput
          placeholder=' Base maior'
          style={{height:30, textAlign:"center", borderWidth:1, marginBottom:10}}
          keyboardType={'numeric'}
          onChangeText={basemaior => setBasemaior(basemaior)}
      />

      <TextInput
          placeholder=' primeiro lado '
          style={{height:30, textAlign:"center", borderWidth:1, marginBottom:10}}
          keyboardType={'numeric'}
          onChangeText={lado1 => setLado1(lado1)}
      />
      <TextInput
          placeholder= ' segundo lado '
          style={{height:30, textAlign:"center", borderWidth:1, marginBottom:10 }}
          keyboardType={'numeric'}
          onChangeText={lado2 => setLado2(lado2)}
      />

      <Button
        title="Calcular"
        onPress={calcularPerimetro}
      />
    <Text> </Text>
    <Text>{perimetro}</Text>

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
});