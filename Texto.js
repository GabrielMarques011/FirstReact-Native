import react, { Component } from "react";
import { View, Text, TextInput } from "react-native";

class Texto extends Component {
  // Definindo a propriedade do elemento
  static propriedade = {
    limit: "",
  };
  // Manipulado estadi e uma String
  state = {
    numberQtd: "",
  };
  
  // Criando função para limitar a quantidade de carateres de acordo com a propriedade 'limit' do componente 'Texto'
  alterar = (numberQtd) => {
    if (numberQtd.length < 101) {
        this.setState({numberQtd});
    }
  }

  render() {
    const { state, props } = this;
    return (
      <View>
        <TextInput
          multiline={true}
          numberOfLines={2}
          value={state.numberQtd}
          onChangeText={this.alterar}
          style={{ borderColor: "#000000", borderWidth: 1 }}
        />
        <Text>
          Total: {state.numberQtd.length}/{props.limit}
        </Text>
      </View>
    );
  }
}
export default Texto;