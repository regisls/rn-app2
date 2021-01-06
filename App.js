// Imports
import React from 'react';
//import {Text, View, Button} from 'react-native';
import {Text, View, TouchableOpacity, Image, Alert} from 'react-native';

//Formatações
const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16
  }
}

const gerarNovaFrase = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);
  
  var frases = Array();
  frases[0] = 'frase 1';
  frases[1] = 'frase 2';
  frases[2] = 'frase 3';
  frases[3] = 'frase 4';
  frases[4] = 'frase 5';

  //alert(frases[numeroAleatorio]);
  Alert.alert(frases[numeroAleatorio]);
}

// Criar o componente
const App = () => {
  const {principal, botao, textoBotao} = Estilos;

  return (
    <View style={principal}>
      <Image source={require('./imgs/logo.png')} />
      <TouchableOpacity
        onPress={gerarNovaFrase}
        style={botao}>
        <Text style={textoBotao}>Nova frase</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
