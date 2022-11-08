import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { homeStyle } from './styles';
import apiIdeas from '../../services/ideias-api';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      ideas: []
    };
  }

  async componentDidMount() {
    // inicia a tela
    let res = await apiIdeas.getIdeas();
    console.log("LALAALA: ", res.data);
    if (res.data && res.data.ideas) this.setState({ ideas: res.data.ideas });
    console.log(this.state.ideas.length)
  }

  goToIdea = () => {
    this.props.navigation.navigate('Idea', {
      onGoBack: () => {
        // carregar lista novamente
      }
    })
  }

  goToLogin = () => {
    this.props.navigation.navigate('Login')
  }

  renderItem = ({ item }) => (
    <View style={homeStyle.item}>
      <Text style={homeStyle.idea}>{item.title}</Text>
      <Text style={homeStyle.idea}>{item.description}</Text>
    </View>
  );

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
          <TouchableOpacity onPress={this.goToIdea} style={homeStyle.button}>
            <Text style={homeStyle.buttonText}>Enviar Ideia</Text>
          </TouchableOpacity>
          <Text
            style={homeStyle.button2}
            variant="link"
            className="mt-4 full"
            type="button"
            onPress={this.goToLogin}>Entrar
          </Text>
        </View>
        
        <Image style={{ marginTop: 30, alignSelf: 'center' }} source={require('../../assets/Img/logo.png')} />

        <FlatList
          data={this.state.ideas}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
        />

      </View>
    );
  }
}

export default Home;