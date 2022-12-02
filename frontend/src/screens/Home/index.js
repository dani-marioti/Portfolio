import React, { Component } from 'react';
import { Image, ScrollView,Text, View, TouchableOpacity, FlatList, Modal } from 'react-native';
import { homeStyle } from './styles';
import apiIdeas from '../../services/ideias-api';
import { FontAwesome, MaterialIcons } from 'react-native-vector-icons'

class Home extends Component {

  constructor() {
    super();
    this.state = {
      ideas: [],
      selectedIdea: {},
      visibleIdeaModal: false
    };

    this.statusDic = {
      'pending': "Pendente",
      'aproved': "Aprovado",
      'rejected': "Reprovado",
      'delivered': "Entregue"
    }

    this.statusDicColor = {
      'pending': "#27C7F9",
      'aproved': "#2F835B",
      'rejected': "#FF0000",
      'delivered': "#000"
    }

  }

  async componentDidMount() {
    // inicia a tela
    let res = await apiIdeas.getIdeas();
    if (res.data && res.data.ideas) this.setState({ ideas: res.data.ideas });
    console.log(this.state.ideas.length)
  }

  goToIdea = () => {
    this.props.navigation.navigate('Idea', {
      refreshIdeas: async () => {
        // inicia a tela
        let res = await apiIdeas.getIdeas();
        if (res.data && res.data.ideas) this.setState({ ideas: res.data.ideas });
        console.log("Veio do IDEA: ", this.state.ideas.length)
      }
    })
  }

  goToLogin = () => {
    this.props.navigation.navigate('Login', {
      refreshIdeas: async () => {
        // inicia a tela
        let res = await apiIdeas.getIdeas();
        if (res.data && res.data.ideas) this.setState({ ideas: res.data.ideas });
        console.log("Veio do Login: ", this.state.ideas.length)
      }
    })
  }

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.setState({ selectedIdea: item, visibleIdeaModal: true })} style={homeStyle.item} >
      <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
        <FontAwesome name="user" size={20} color="black" />
        <Text style={homeStyle.person}>{item.name}</Text>
      </View>

      <View style={{ borderLeftWidth: 1, borderRightWidth: 1, borderLeftColor: '#696969', borderRightColor: '#696969', width: '60%', height: '100%', padding: 10 }}>
        <Text style={homeStyle.idea}>{item.title}</Text>
        <Text numberOfLines={3} ellipsizeMode='tail'>{item.description}</Text>
      </View>

      <View style={{ borderColor: "black", width: '20%', alignItems: 'center' }}>
        <Text style={{ borderRadius: 7, position: 'absolute', paddingHorizontal: 5, paddingVertical: 2, fontSize: 12, color: 'white', backgroundColor: this.statusDicColor[item.status] }} >{this.statusDic[item.status]}</Text>
        <View style={{ height: "100%", justifyContent: 'center' }}>
          <FontAwesome name="thumbs-up" size={20} color="black" />
        </View>
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
          <ScrollView>

            <View style={{ margin: 10 }}>
              <FontAwesome name="arrow-left" size={20} color="black" onPress={() => { this.setState({ visibleIdeaModal: false }) }} />
            </View>

            <View>
              <Image style={{ marginTop: 30, alignSelf: 'center' }} source={require('../../assets/Img/logo.png')} />
            </View>

            <View style={homeStyle.modalIdea}>
              <View style={homeStyle.ideaTitle}>
                <Text style={{ width: '80%', fontSize: 16, fontWeight: 'bold' }}>
                  {this.state.selectedIdea.title}
                </Text>

                <Text
                  style={{ ...homeStyle.stateIdea, backgroundColor: this.statusDicColor[this.state.selectedIdea.status] }}>
                  {this.statusDic[this.state.selectedIdea.status]}
                </Text>
              </View>

              <View style={homeStyle.userIdea}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <MaterialIcons name="person" size={20} color="black" />
                  <Text style={{ fontSize: 14, color: "#8B008B", marginLeft: 5 }}>
                    {this.state.selectedIdea.name}
                  </Text>
                </View>

                <Text style={{ fontSize: 14, color: "#696969", alignItems: 'center' }}>
                  {this.state.selectedIdea.email}
                </Text>

              </View>

              <Text>{this.state.selectedIdea.description}</Text>

            </View>
          </ScrollView>
        </Modal>

      </View>
    );
  }
}

export default Home;