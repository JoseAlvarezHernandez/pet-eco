import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const styles = require('../styles/StartScreen');

export default class StartScreen extends React.Component {

    state = { ...require('../lang/es.json') };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.welcomeContainer}>
                        <Image
                            source={require('../assets/images/logo.png')}
                            style={styles.welcomeImage}
                        />
                    </View>
                    <View style={styles.getStartedContainer}>
                        <TouchableOpacity
                            style={styles.registerButton}
                            onPress={this._onRegisterPress} >
                            <Text style={styles.registerButtonText}>{this.state.register}</Text>
                        </TouchableOpacity >
                    </View>
                    <View style={styles.users}>
                        <TouchableOpacity>
                            <Text style={styles.underline}>{this.state.haveAccount}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.walkers}>
                        <TouchableOpacity onPress={this._onLoginPress} >
                            <Text style={styles.underline}>{this.state.awalker}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View >
        );
    }

    _onRegisterPress = () => {
        this.props.navigation.navigate('Registration');
    }

    _onLoginPress = state => {
        this.setState({ message: 'Pressed' });
    }
}