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
      <View style={{ borderRightWidth: 1, width: '20%', justifyContent: 'center', alignItems: 'center' }}>
        <FontAwesome name="user" size={20} color="black" />
        <Text style={taskStyle.person}>{item.name}</Text>
      </View>

      <View style={{ width: '60%', height: '100%', padding: 10 }}>
        <Text style={taskStyle.idea}>{item.title}</Text>
        <Text numberOfLines={3} ellipsizeMode='tail'>{item.description}</Text>
      </View>

      <View style={{ borderLeftWidth: 1, borderColor: "black", width: '20%', justifyContent: 'center', alignItems: 'center' }}>
        <FontAwesome name="thumbs-up" size={20} color="black" />
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

          <View><Image style={{ marginTop: 30, alignSelf: 'center' }} source={require('../../assets/Img/logo.png')} /></View>

          <View style={{ elevation: 30, padding: 10, backgroundColor: '#ededed', marginVertical: 8, marginHorizontal: 20, borderRadius: 7 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#C0C0C0', paddingVertical: 7 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                {this.state.selectedIdea.title}
              </Text>
              <Text
                style={{
                  borderRadius: 7,
                  paddingHorizontal: 5,
                  paddingVertical: 2,
                  fontSize: 12,
                  color: 'white',
                  backgroundColor: this.statusDicColor[this.state.selectedIdea.status]
                }}>
                {this.statusDic[this.state.selectedIdea.status]}
              </Text>

            </View>


            <View style={{ marginVertical: 8, flexDirection: 'row', justifyContent: 'space-between' }}>

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
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
          <Text style={taskStyle.aproved}>Aprovar</Text>
          <Text style={taskStyle.rejected}>Reprovar</Text>
        </TouchableOpacity>
        </Modal>

        



      </View>
    );
  }
}

export default Tasks;