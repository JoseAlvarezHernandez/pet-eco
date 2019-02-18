import React from 'react';
import { Text, View } from 'react-native';

export default class UserDogsScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    
    render() {
        return (
            <View>
                <Text>Los Dogs</Text>
            </View>
        );
    }
}