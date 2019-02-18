import React from 'react';
import { Text, View } from 'react-native';

export default class UserMapScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    
    render() {
        return (
            <View>
                <Text>El Mapa</Text>
            </View>
        );
    }
}