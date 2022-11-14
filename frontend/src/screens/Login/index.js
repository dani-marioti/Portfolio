//https://webdesignemfoco.com/cursos/react-js/meu-primeiro-app-com-react-native-04-css
// TouchableOpacity: faz com que uma View responda apropriadamente a toques. Ao ser clicado, a opacidade da View é diminuída, mas de maneira gradual, diminuindo assim a sua intensidade.

import React, { Component } from 'react';
import { KeyboardAvoidingView, Platform, Image, TouchableOpacity, Text, View, TextInput } from 'react-native';
import { loginStyle } from '../Login/styles'

class Login extends Component {
  goToTasks = () => {
    this.props.navigation.navigate('Tasks')
  }

  render() {
    return (
      <KeyboardAvoidingView behavior={Platform.OS == "android" ? "padding" : "height"} style={[loginStyle.container, loginStyle.darkbg]}>
        
        <View style={{ flex: 0, backgroundColor: 'white' }}>
          <Image source={require('../../assets/Img/logo.png')} />
        </View>

        <View style={loginStyle.login__form}>
          <TextInput style={loginStyle.login__input} placeholder='Usuário:' />
          <TextInput style={loginStyle.login__input} placeholder='Senha:' secureTextEntry={true} />
        </View>

        <View>
          <TouchableOpacity onPress={this.goToTasks} style={loginStyle.login__button}>
            <Text style={loginStyle.login__buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    );
  }
}

export default Login;