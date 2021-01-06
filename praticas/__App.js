// Imports
import React from 'react';
//import {Text, View, Button} from 'react-native';
import {Text, View, TouchableOpacity, Image} from 'react-native';

//Formatações
// const Estilos = {
//   estiloTexto: {
//     fontSize: 30,
//     backgroundColor: '#08509B',
//     height: 60,
//     width: 60
//     //paddingTop: 30,
//     //paddingLeft: 30,
//     //paddingBottom: 30,
//     //paddingRight: 30,
//     //padding: 5,
//     //margin: 30,
//     //marginHorizontal: 10
//     //marginVertical: 10
//     //textShadowColor: '#000',
//     // textShadowOffset: {
//     //   width: 15,
//     //   height: 10
//     // },
//     //textShadowRadius: 20,
//     //color: '#fff',
//     //fontStyle: 'normal',
//     //fontWeight: 'bold', //entre 100 e 900 também pode ser
//     //textAlign: 'center',
//     //textDecorationLine: 'underline'
//   },
//   estiloTexto2: {
//     fontSize: 30,
//     backgroundColor: '#9A88FA',
//     height: 60,
//     width: 60
//   },
//   estiloView: {
//     backgroundColor: 'skyblue',
//     height: 300,
//     justifyContent: 'space-around', // alinhamento vertical
//     alignItems: 'center', // alinhamento horizonal
//     flexDirection: 'row'
//   }
// };

// Proporções usando flexbox
// const Estilos = {
//   principal: {
//     flex: 1,
//     backgroundColor: 'cornflowerblue'
//   },
//   topo: {
//     flex: 2,
//     backgroundColor: 'brown'
//   },
//   conteudo: {
//     flex: 8,
//     backgroundColor: 'yellowgreen'
//   },
//   rodape: {
//     flex: 1,
//     backgroundColor: 'orangered'
//   }
// }

const Estilos = {
  principal: {
    paddingTop: 40
  },
  botao: {
    backgroundColor: '#48bbec',
    padding: 10,
    borderColor: '#2d9eb8',
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  imagem: {
    alignSelf: 'center',
    marginTop: 10
  }
}

const botaoPressionado = () => {
  alert('Botão pressionado');
}

// Criar o componente
const App = () => {
  //const {principal, topo, conteudo, rodape} = Estilos;
  const {principal, botao, textoBotao, imagem} = Estilos;

  return (
    <View style={principal}>
      <TouchableOpacity style={botao}>
        <Text style={textoBotao}>Clique aqui</Text>
      </TouchableOpacity>
      
      <Image source={require('./imgs/uvas.png')} style={imagem} />

      {/* <Button 
        title="Clique aqui"
        onPress={botaoPressionado} 
        color="#ff00af" 
        accessibilityLabel="Clique para ver as notícias" /> */}
      {/* <Text style={topo}>Topo</Text>
      <Text style={conteudo}>Conteudo</Text>
      <Text style={rodape}>Rodapé</Text> */}
    </View>
  );
};

export default App;
