import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, FlatList, Modal } from 'react-native';
import { taskStyle } from './taskStyle'
import apiIdeas from '../../services/ideias-api';
import { FontAwesome, MaterialIcons } from 'react-native-vector-icons'

class Tasks extends Component {

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
      'rejected': "Reprovado"
    }

    this.statusDicColor = {
      'pending': "#27C7F9",
      'aproved': "#2F835B",
      'rejected': "#696969"
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
      onGoBack: async () => {
        // inicia a tela
        let res = await apiIdeas.getIdeas();
        if (res.data && res.data.ideas) this.setState({ ideas: res.data.ideas });
        console.log(this.state.ideas.length)
      }
    })
  }

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.setState({ selectedIdea: item, visibleIdeaModal: true })} style={taskStyle.item} >
      <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
        <FontAwesome name="user" size={20} color="black" />
        <Text style={taskStyle.person}>{item.name}</Text>
      </View>

      <View style={{ borderLeftWidth: 1, borderLeftColor: '#696969', borderRightColor: '#696969', width: '80%', height: '100%', padding: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
          <Text style={{...taskStyle.idea, width: '70%'}}>{item.title}</Text>
          <Text style={{ ...taskStyle.stateIdea, backgroundColor: this.statusDicColor[item.status] }}>
            {this.statusDic[item.status]}
          </Text>
        </View>
        <Text numberOfLines={3} ellipsizeMode='tail'>{item.description}</Text>
      </View>

    </TouchableOpacity>
  );

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>

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

          <View style={{ margin: 10 }}>
            <FontAwesome name="arrow-left" size={20} color="black" onPress={() => { this.setState({ visibleIdeaModal: false }) }} />
          </View>

          <View>
            <Image style={{ marginTop: 30, alignSelf: 'center' }} source={require('../../assets/Img/logo.png')} />
          </View>

          <View style={taskStyle.modalIdea}>
            <View style={taskStyle.ideaTitle}>
              <Text style={{ width: '80%',fontSize: 16, fontWeight: 'bold' }}>
                {this.state.selectedIdea.title}
              </Text>

              <Text
                style={{ ...taskStyle.stateIdea, backgroundColor: this.statusDicColor[this.state.selectedIdea.status] }}>
                {this.statusDic[this.state.selectedIdea.status]}
              </Text>
            </View>

            <View style={taskStyle.userIdea}>

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
        </Modal>

      </View>
    );
  }
}

export default Tasks;