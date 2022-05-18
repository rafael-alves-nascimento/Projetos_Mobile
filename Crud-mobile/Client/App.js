import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, CheckBox,TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios'

function HomeScreen({ navigation }) {
  const [isSelected, setSelection] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  
  const loginn = () => {
    let login = ["rafael@gmail.com","1234567"]
    if (email === login[0] && senha === login[1]){
      console.log("logado")
      navigation.navigate('Componente')
    }
    else {
      console.log("nao logado")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
      <Text style={styles.login} > LOGIN </Text>
      <hr  style={{backgroundColor:'black',width:250}} ></hr>
      <Text style={styles.texto} >Seu email:</Text>
      <TextInput
          style={styles.input}
            placeholder='Insira seu email'
            keyboardType={'email-address'}
            onChangeText={email => setEmail(email)}
        />
        <Text style={styles.texto} >Sua senha:</Text>
        <TextInput
            style={styles.input}
            placeholder='Insira sua senha'
            keyboardType={'visible-password'}     
            onChangeText={senha => setSenha(senha)}
        />

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Manter-me logado</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={loginn} >
        <Text style={{color:'#fff'}} >Logar</Text>
      </TouchableOpacity>

      <Text style={{padding:3 , fontWeight: 700, margin:10,fontSize:17}} onClick={() => navigation.navigate('Cadastro')}>Cadastrar-se</Text>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}


function DetailsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text>Próxima página</Text>
        <StatusBar style="auto" />
         
      </View>
  </View>
  );
}

function Cadastro({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
      <Text style={styles.login} > Cadastro </Text>

      <hr  style={{backgroundColor:'black',width:250}} ></hr>
      
      <Text style={styles.texto} >Seu nome:</Text>
      <TextInput
          style={styles.input}
            placeholder='insira seu nome de usuário'
            keyboardType={'phone-pad'}
        />

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

      <TouchableOpacity style={styles.button} >
        <Text style={{color:'#fff'}} >Cadastrar</Text>
      </TouchableOpacity>

      <Text style={{marginTop:20,padding:5,fontWeight:700,fontSize:17 }} onClick={() => navigation.navigate('Home')}>Fazer login</Text>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Componente" component={DetailsScreen} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
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
    color:'black',
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
    backgroundColor: "black",
    padding: 10,
    width:250,
  },
  container2:{
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:7,
    borderColor:'black',
    padding:50,
    backgroundColor:"#white",
  }
});