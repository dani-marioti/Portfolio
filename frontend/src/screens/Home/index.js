import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { homeStyle } from './styles';

class Home extends Component {

  goToIdea = () => {
    this.props.navigation.navigate('Idea')
  }

  goToLogin = () => {
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Image style={{position: 'absolute', marginTop: 30, alignSelf: 'center'}} source={require('../../assets/Img/logo.png')} />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
          <TouchableOpacity style={homeStyle.button}>
            <Text onPress={this.goToIdea} style={homeStyle.buttonText}>Enviar Ideia</Text>
          </TouchableOpacity>
          <Text
            style={homeStyle.button2}
            variant="link"
            className="mt-4 full"
            type="button"
            onPress={this.goToLogin}>Entrar
          </Text>
        </View>
        

      </View>
    );
  }
}

export default Home;