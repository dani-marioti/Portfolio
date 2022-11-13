import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { taskStyle } from './taskStyle'
import apiIdeas from '../../services/ideias-api';
import { FontAwesome } from 'react-native-vector-icons'

class Tasks extends Component {

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
    
    renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => this.setState({ selectedIdea: item, visibleIdeaModal: true })} style={taskStyle.item} >
        <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
          <FontAwesome name="user" size={20} color="black" />
          <Text>{item.name}</Text>
        </View>
  
        <View style={{ width: '60%', height: '100%', padding: 10 }}>
          <Text style={taskStyle.idea}>{item.title}</Text>
          <Text numberOfLines={3} ellipsizeMode='tail'>{item.description}</Text>
        </View>
  
        <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
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
 
        </View>
      );
    }
  }

export default Tasks;