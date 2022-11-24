//https://webdesignemfoco.com/cursos/react-js/meu-primeiro-app-com-react-native-04-css
// TouchableOpacity: faz com que uma View responda apropriadamente a toques. Ao ser clicado, a opacidade da View é diminuída, mas de maneira gradual, diminuindo assim a sua intensidade.

import React, { Component } from 'react';
import { KeyboardAvoidingView, Platform, Image, TouchableOpacity, Text, View, TextInput, ToastAndroid } from 'react-native';
import { loginStyle } from '../Login/styles';
import { FontAwesome } from 'react-native-vector-icons';
import apiLogin from '../../services/login-api';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  // falta limpar o campo após o login
  login = async () => {

    if (this.state.email.trim().length == 0 || this.state.password.trim().length == 0) {
      ToastAndroid.showWithGravity("Preencha e-mail e senha", ToastAndroid.LONG, ToastAndroid.TOP);
      return;
    }

    let res = await apiLogin.login({ email: this.state.email, password: this.state.password });
    console.log(res);
    if (res.status == 200) {
      this.props.navigation.navigate('Tasks');
    } else {
      // colocar mensagem de erro
      ToastAndroid.showWithGravity("Erro de login", ToastAndroid.LONG, ToastAndroid.TOP);
    }

    this.setState({ email: "", password: "" });

  }

  onGoBack = () => {
    this.props.route.params.refreshIdeas();
    this.props.navigation.goBack();
  }

  render() {
    return (
      <KeyboardAvoidingView behavior={Platform.OS == 'android' ? 'padding' : 'height'} style={[loginStyle.container, loginStyle.darkbg]}>

        <View style={{ width: '100%', margin: 30, padding: 10 }}>
          <FontAwesome name="arrow-left" size={25} color="black" onPress={this.onGoBack} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 10 }}>
          <Image style={{ width: 50, height: 50 }} source={require('../../assets/Img/lampada.png')} />
          <Text style={{ fontWeight: "bold", fontSize: 30, alignSelf: "center" }}>Efetue o Login</Text>
        </View>

        <View style={loginStyle.login__form}>
          <TextInput style={loginStyle.login__input} value={this.state.email} onChangeText={(text) => { this.setState({ email: text }) }} placeholder='E-mail:' />
          <TextInput style={loginStyle.login__input} value={this.state.password} onChangeText={(text) => { this.setState({ password: text }) }} placeholder='Senha:' secureTextEntry={true} />
        </View>

        <View>
          <TouchableOpacity onPress={this.login} style={loginStyle.login__button}>
            <Text style={loginStyle.login__buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    );
  }
}

export default Login;