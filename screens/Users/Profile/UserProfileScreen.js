import React from 'react';
import { Text, View } from 'react-native';

export default class UserProfileScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    
    render() {
        return (
            <View>
                <Text>El Perfil</Text>
            </View>
        );
    }
}