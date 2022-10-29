import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { ideaStyle } from './styles';
import apiIdeas, { ideaApi } from '../../services/ideias-api';

class Idea extends Component {

    sendIdea = async (idea) => {
        console.log(idea)
        let data = await apiIdeas.sendIdea(idea);
    }

    render() {
        return (

            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View>
                    <Text style={ideaStyle.ideaText}>Compartilhe sua ideia</Text>
                </View>
                <View style={ideaStyle.idea__form}>
                    <TextInput style={ideaStyle.idea__input} placeholder='Qual sua ideia?' />
                    <TextInput style={ideaStyle.idea__inputDescription} placeholder='Descreva como seria este recurso' />
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <TextInput style={ideaStyle.name} placeholder='Nome' />
                        <TextInput style={ideaStyle.email} placeholder='E-mail' />
                    </View>
                    <TouchableOpacity onPress={() => this.sendIdea("IDEIA: NOVO BOTAO")} style={ideaStyle.idea__button}>
                        <Text style={ideaStyle.idea__buttonText}>Enviar ideia</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

export default Idea;