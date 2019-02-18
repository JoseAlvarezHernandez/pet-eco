import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import { Permissions } from 'expo';


const styles = require('../styles/StartScreen');

export default class StartScreen extends React.Component {

    state = { ...require('../lang/es.json') };

    constructor(props) {
        super(props);

        Permissions
            .askAsync(Permissions.LOCATION, Permissions.CALENDAR, Permissions.CAMERA, Permissions.CAMERA_ROLL, Permissions.NOTIFICATIONS, Permissions.REMINDERS, Permissions.CONTACTS)
            .then(this.successPermision);
    }

    successPermision(status) {
        if(status.status != 'granted')
            return true;
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden />
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