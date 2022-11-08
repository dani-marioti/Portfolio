import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, FlatList, Modal } from 'react-native';
import { homeStyle } from './styles';
import apiIdeas from '../../services/ideias-api';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      ideas: [],
      selectedIdea: null,
      visibleIdeaModal: false
    };
  }

  async componentDidMount() {
    // inicia a tela
    let res = await apiIdeas.getIdeas();
    if (res.data && res.data.ideas) this.setState({ ideas: res.data.ideas });
    console.log(this.state.ideas.length)
  }

  goToIdea = () => {
    this.props.navigation.navigate('Idea', {
      onGoBack: async () => {
        // inicia a tela
        let res = await apiIdeas.getIdeas();
        if (res.data && res.data.ideas) this.setState({ ideas: res.data.ideas });
        console.log(this.state.ideas.length)
      }
    })
  }

  goToLogin = () => {
    this.props.navigation.navigate('Login')
  }

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.setState({ selectedIdea: item, visibleIdeaModal: true })} style={homeStyle.item} >
      <View style={{width: '20%', backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
        <Text>{item.name}</Text>
      </View>

      <View style={{width: '60%', height: '100%', backgroundColor: 'blue', padding: 10}}>
        <Text style={homeStyle.idea}>{item.title}</Text>
        <Text numberOfLines={3} ellipsizeMode='tail'>{item.description}</Text>
      </View>

      <View style={{width: '20%', backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}>
        <Text>HEHEH</Text>
      </View>


    </TouchableOpacity>
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

        <Modal
          visible={this.state.visibleIdeaModal}
          onRequestClose={() => { this.setState({ visibleIdeaModal: false }) }}
        >
          <View>
            <Text>{JSON.stringify(this.state.selectedIdea)}</Text>

            <Image style={{ marginTop: 30, alignSelf: 'center' }} source={require('../../assets/Img/logo.png')} />

          </View>
        </Modal>

      </View>
    );
  }
}

export default Home;