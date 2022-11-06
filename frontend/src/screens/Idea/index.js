import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import { ideaStyle } from './styles';
import apiIdeas, { ideaApi } from '../../services/ideias-api';
import { SafeAreaView } from 'react-native-safe-area-context';

class Idea extends Component {

  sendIdea = async (idea) => {
    console.log(idea)
    let data = await apiIdeas.sendIdea(idea);
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
            <TextInput style={ideaStyle.idea__input} placeholder='Qual sua ideia?' />
            <TextInput style={ideaStyle.idea__inputDescription} placeholder='Descreva como seria este recurso...' />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 14 }}>
              <TextInput style={ideaStyle.name} placeholder='Nome' />
              <TextInput style={ideaStyle.email} placeholder='E-mail' />
            </View>
            <TouchableOpacity onPress={() => this.sendIdea("IDEIA: NOVO BOTAO")} style={ideaStyle.idea__button}>
              <Text style={ideaStyle.idea__buttonText}>Enviar ideia</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Idea;