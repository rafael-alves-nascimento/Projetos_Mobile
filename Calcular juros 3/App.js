import { StyleSheet, Text, View, Button, TextInput,Image  } from 'react-native';
import React,{useState} from 'react';



export default function App() {

  const [capital,setCapital] = useState ('');
  const [taxa,setTaxa] = useState ('');
  const [tempo,setTempo] = useState ('');
  const [juros,setJuros] = useState ('');

function calcularJuros(){
    if(capital > 0 && taxa > 0 && tempo > 0){
      setJuros(( parseFloat(capital) * parseFloat(taxa / 100) ) * parseFloat(tempo));
    } 
    else{
      setJuros("Favor Informe valores positivios")
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

    
    <TextInput placeholder="informe a capital" 
        style={{ height:30,width:200, textAlign:"center",borderColor:"white", borderWidth:1,padding:5}}
        keyboardType={'numeric'}
        onChangeText={capital =>  setCapital(capital)} 
      />
      <Text> </Text>
      <Text> </Text>

      <TextInput placeholder="informe a taxa" 
        style={{height:30,width:200, textAlign:"center",borderColor:"white", borderWidth:1,padding:5}}
        keyboardType={'numeric'}
        onChangeText={taxa =>  setTaxa(taxa)} 
      />
      <Text> </Text>
      <Text> </Text>

      <TextInput placeholder="informe o tempo" 
        style={{height:30, width:200, textAlign:"center",borderColor:"white", borderWidth:1,borderRadius:10,padding:5}}
        keyboardType={'numeric'}
        onChangeText={tempo =>  setTempo(tempo)} 
      />
      <Text> </Text>
      <Text> </Text>

    

      <Button 
        title="calcular"
        onPress={calcularJuros}
        />
      
      <Text></Text>

      <Text>
        {juros}
      </Text>
      
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
