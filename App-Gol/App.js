// import Rotas from './routes/rotas';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { ScrollView,StyleSheet, Text, View, Image, TouchableOpacity, TextInput, CheckBox } from 'react-native';
import React, { useState } from "react"


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name="Options" component={Options} options={{ title: 'options' }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro' }} />
        <Stack.Screen name="Passagem" component={Passagem} options={{ title: 'Passagem' }} />
        <Stack.Screen name="Destinos" component={Destinos} options={{ title: 'Destinos' }} />
        <Stack.Screen name="Cadastro_conta" component={Cadastro_conta} options={{ title: 'Cadastro de conta' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home({ navigation }) {
  return (
    <View style={stylesHome.container}>
      <Image
        style={{ width: 270, height: 120, backgroundColor: "#FF6C01", margin: 20 }}
        source={require('./assets/gol.png')}
      />
       <Text style={stylesHome.texto}>Bem Vindo Ao app da GOL</Text>


      <Text style={{ fontWeight: 700, fontSize: 23, borderWidth: 2, borderColor: "#fff", padding: 7, borderRadius: 10, marginTop: 50, marginBottom: 100, color: "#fff" }} onClick={() => navigation.navigate("Cadastro_conta")}  > Clique aqui para Continuar</Text>
      <StatusBar style="auto" />
    </View>

  );
}

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FF6C01"
  },
  texto: {
    fontSize: 25,
    color: "#fff",
    marginBottom: 10,
  },
  input: {
    height: 30,
    width: 300,
    textAlign: "center",
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: '#fff',

  },
});

function Options({ navigation }) {
  return (
    <View style={stylesOptions.container}>
      <View style={stylesOptions.container2}>
        <Image
          style={{ width: 200, height: 81, marginBottom: 50 }}
          source={require('./assets/gol-logo-mobile.png')}
        />
        <Text style={{ padding: 20, textAlign: "center", fontWeight: 700, fontSize: 17 }}>Escolha uma das opções abaixo :</Text>
      </View>

      <TouchableOpacity style={stylesOptions.Button} >
        <Text style={{ color: '#fff' }} onClick={() => navigation.navigate("Destinos")} >1 - Destinos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={stylesOptions.Button} >
        <Text style={{ color: '#fff' }} onClick={() => navigation.navigate("Home")} >2 - Home</Text>
      </TouchableOpacity>


      <TouchableOpacity style={stylesOptions.Button} >
        <Text style={{ color: '#fff' }} onClick={() => navigation.navigate("Passagem")} >3 - Comprar passagens</Text>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}


const stylesOptions = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff"
  },
  Button: {
    alignItems: "center",
    backgroundColor: "#FF6C01",
    padding: 10,
    width: 250,
    margin: 20,
  },
  container2: {
    display: "flex",
    alignItems: "center",
    justifyContent: 'center'
  }
})




function Cadastro({ navigation }) {
  return (
    <View style={stylesCadastro.container}>
      <Text style={stylesCadastro.Cadastro} > Informações Pessoais </Text>
      <Text style={stylesCadastro.texto} >Seu Nome:</Text>
      <TextInput
        style={stylesCadastro.input}
        placeholder='Insira seu Nome'
        keyboardType={"phone-pad"}
      />
      <Text style={{ marginRight: 140, color: "#fff" }} >Data Nascimento:</Text>
      <TextInput
        style={stylesCadastro.input}
        placeholder='Insira sua data de nascimento'
        keyboardType={"phone-pad"}
      />
      <Text style={{ marginRight: 225, color: "#fff" }} >Cpf:</Text>
      <TextInput
        style={stylesCadastro.input}
        placeholder='Insira seu Cpf'
        keyboardType={"numeric"}
      />
      <Text style={stylesCadastro.texto} >Endereço:</Text>
      <TextInput
        style={stylesCadastro.input}
        placeholder='Insira seu endereço'
        keyboardType={"phone-pad"}
      />
      <View style={stylesCadastro.container2}>

        <TouchableOpacity style={{ backgroundColor: "black", padding: 10, width: 250, margin: 5, alignItems: "center" }} >
          <Text style={{ color: '#fff', fontWeight: 700, fontSize: 17 }}  >Cadastrar-se</Text>
        </TouchableOpacity>

        <TouchableOpacity style={stylesCadastro.Button} >
          <Text style={{ color: '#black', fontWeight: 700, fontSize: 17 }} onClick={() => navigation.navigate("Home")} >Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={stylesCadastro.Button} >
          <Text style={{ color: '#black', fontWeight: 700, fontSize: 17 }} onClick={() => navigation.navigate("Options")} >Options</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


const stylesCadastro = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6C01',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    display: "flex",
    justifyContent: "space-around"
  },
  input: {
    height: 30,
    width: 250,
    textAlign: "center",
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: '#fff'
  },
  texto: {
    marginRight: 190,
    color: "#fff"
  },
  Cadastro: {
    color: "#fff",
    fontSize: 30,
    fontWeight: 600,
  },
  Button: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    width: 250,
    margin: 5,
  },
})

function Passagem({ navigation }) {
  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  return (
    <View style={stylesPassagem.container}>
      <Text style={stylesPassagem.Cadastro} > Passagens: </Text>

      <Text style={{ marginRight: 175, color: "#fff" }} >Seu Destino:</Text>
      <TextInput
        style={stylesPassagem.input}
        placeholder='Insira seu Nome'
        keyboardType={"phone-pad"}
      />
      <Text style={{ marginRight: 210, color: "#fff" }} >Origem</Text>
      <TextInput
        style={stylesPassagem.input}
        placeholder='Insira seu pais origem '
        keyboardType={"phone-pad"}
      />
      <Text style={{ marginRight: 170, color: "#fff" }} >Data viagem:</Text>
      <TextInput
        style={stylesPassagem.input}
        placeholder='Insira a data da sua viagem'
        keyboardType={"numeric"}
      />
      <Text style={{ marginRight: 150, color: "#fff" }} >Horário do voo:</Text>
      <TextInput
        style={stylesPassagem.input}
        placeholder='Insira o horário do voo'
        keyboardType={"phone-pad"}
      />

      <Text style={{ color: "#fff", fontWeight: 700, fontSize: 15 }} >Forma de pagamento:</Text>

      <View style={stylesPassagem.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={stylesPassagem.checkbox}
        />
        <Text style={{ color: "#fff", fontSize: 15 }}>Débito</Text>
        <CheckBox
          value={isSelected2}
          onValueChange={setSelection2}
          style={stylesPassagem.checkbox}
        />
        <Text style={{ color: "#fff", fontSize: 15 }}>Crédito</Text>
      </View>


      <View style={stylesPassagem.container2}>
        <TouchableOpacity style={stylesPassagem.Button} >
          <Text style={{ color: '#black', fontWeight: 700, fontSize: 17 }} onClick={() => navigation.navigate("Home")} >Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={stylesPassagem.Button} >
          <Text style={{ color: '#black', fontWeight: 700, fontSize: 17 }} onClick={() => navigation.navigate("Options")} >options</Text>
        </TouchableOpacity>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const stylesPassagem = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6C01',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    display: "flex",
    justifyContent: "space-around"
  },
  input: {
    height: 30,
    width: 250,
    textAlign: "center",
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: '#fff'
  },
  texto: {
    marginRight: 190,
    color: "#fff"
  },
  Cadastro: {
    color: "#fff",
    fontSize: 30,
    fontWeight: 600,
  },
  Button: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    width: 250,
    margin: 5,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 10,
  },
  checkbox: {
    alignSelf: "center",
    marginLeft: 8,
  },
})



function Cadastro_conta({navigation}) {
  // const [email, setEmail] = useState("");
  // const [senha, setSenha] = useState("");
    
  // const loginn = () => {
  //   let login = ["rafael@gmail.com","1234567"]
  //   if (email === login[0] && senha === login[1]){
  //     console.log("logado")
  //     navigation.navigate("Options")
  //   }
  //   else {
  //     console.log("nao logado")
  //   }
  // }

  
  return (
    <View style={stylesCadastro_conta.container}>
      <View style={stylesCadastro_conta.container2}>
        <Text style={{color:'#FF6C01',fontWeight:650,fontSize:40}}>Conta Gol</Text>
        <Image
          style={{ width: 200, height: 200 }}
          source={require('./assets/viagem.png')}
        />

        <Text style={{ marginRight: 260, color: "#FF6C01",fontSize:17 }} >Email:</Text>
        <TextInput
          style={stylesCadastro_conta.input}
          placeholder='insira seu email'
          keyboardType={"phone-pad"}
          // onChangeText={email => setEmail(email)}
        />
        <Text style={{ marginRight: 260, color: "#FF6C01",fontSize:17 }} >Senha:</Text>
        <TextInput
          style={stylesCadastro_conta.input}
          placeholder='Insira sua senha'
          keyboardType={"phone-pad"}
          // onChangeText={senha => setSenha(senha)}
        />
        <TouchableOpacity style={stylesCadastro_conta.Button} >
          <Text style={{ color: '#FF6C01', fontWeight: 700, fontSize: 17}} onClick={() => navigation.navigate("Options")} >Criar conta</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const stylesCadastro_conta = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 30,
    width: 300,
    textAlign: "center",
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  Button: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
    width: 250,
    margin: 5,
    marginTop:30,
  },

})





function Destinos({navigation}) {
  return (   
      <ScrollView >
        <View style={stylesDestinos.container}>
        <Text style={{color:"#fff",fontSize:25,fontWeight:700,margin:20}}>Destinos em Catálogo:</Text>
        <hr style={{width:400,backgroundColor:"black"}}/>
        <Text style={stylesDestinos.texto}>Maldivas</Text>
          <Image
            style={{ width: 200, height: 200, marginBottom:10 }}
            source={require('./assets/Maldivas.jpg')}
          />
          <hr style={{width:400,backgroundColor:"#fff"}}/>
          <Text style={stylesDestinos.texto}>Rio de janeiro</Text>
          <Image
            style={{ width: 200, height: 200, marginBottom:10}}
            source={require('./assets/rio de janeiro.jpg')}
          />
          <hr style={{width:400,backgroundColor:"#fff"}}/>
          <Text style={stylesDestinos.texto}>Paris</Text>
          <Image
            style={{ width: 200, height: 200, marginBottom:10}}
            source={require('./assets/paris.jpg')}
          />
          <hr style={{width:400,backgroundColor:"#fff"}}/>
          <Text style={stylesDestinos.texto}>Roma</Text>
          <Image
            style={{ width: 200, height: 200, marginBottom:10}}
            source={require('./assets/Roma.jpg')}
          />
          <hr style={{width:400,backgroundColor:"#fff"}}/>

          <TouchableOpacity style={stylesDestinos.Button} >
          <Text style={{ color: '#fff', fontWeight: 700, fontSize: 17}} onClick={() => navigation.navigate("Passagem")} >Passagem</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const stylesDestinos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF6C01",
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize:17,
    fontWeight:500,
    margin:10,
    color:"#fff"
  }, 
  Button: {
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
    width: 250,
    margin: 30,
    marginTop:10,
  },
})