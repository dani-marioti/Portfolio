import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import { ideaStyle } from './styles';
import apiIdeias from '../../services/ideias-api';
import { SafeAreaView } from 'react-native-safe-area-context';

class Idea extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      name: '',
      email: '',
      statu: 'Peding'
    };
  }

  sendIdea = async () => {
    let idea = {
      title: this.state.title,
      description: this.state.description,
      name: this.state.name,
      email: this.state.email
    }
    console.log(idea)
    let data = await apiIdeias.sendIdea(idea);
    console.log("RES: ", data)

    this.props.route.params.onGoBack();
    this.props.navigation.goBack();
    // let data = await apiIdeas.sendIdea(idea);
  }

  render() {
    return (
      <KeyboardAvoidingView style={[ideaStyle.container, ideaStyle.darkbg]}>

        <View style={{ flex: 0, backgroundColor: 'white' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
            <Image style={ideaStyle.Image} source={require('../../assets/Img/lampada.png')} />
            <Text style={ideaStyle.ideaText}>Compartilhe sua ideia</Text>
          </View>
          <SafeAreaView>
            <TextInput onChangeText={(text) => {
              // console.log(text);
              this.setState({ title: text })
            }
            } style={ideaStyle.idea__input} placeholder='Qual sua ideia?' />
            <TextInput multiline={true} onChangeText={(text) => this.setState({ description: text })} style={ideaStyle.idea__inputDescription} placeholder='Descreva como seria este recurso...' />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 14 }}>
              <TextInput onChangeText={(text) => this.setState({ name: text })} style={ideaStyle.name} placeholder='Nome' />
              <TextInput onChangeText={(text) => this.setState({ email: text })} style={ideaStyle.email} placeholder='E-mail' />
            </View>
            <TouchableOpacity onPress={() => this.sendIdea()} style={ideaStyle.idea__button}>
              <Text style={ideaStyle.idea__buttonText}>Enviar ideia</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Idea;