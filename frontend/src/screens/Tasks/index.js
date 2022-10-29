import React, { Component } from 'react';
import { Image, View } from 'react-native';

class Tasks extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 0, backgroundColor: 'white' }}>
                    <Image source={require('../../assets/Img/logo.png')} />
                </View>
            </View>
        );
    }
}

export default Tasks;