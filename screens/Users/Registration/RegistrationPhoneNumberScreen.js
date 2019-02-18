import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View, ActivityIndicator, StatusBar } from 'react-native';

const styles = require('../../../styles/RegistrationPhoneNumberScreen');

export default class RegistrationPhoneNumberScreen extends React.Component {

    state = {
        ...require('./../../../lang/es.json'),
        isLoading: false
    };

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <StatusBar hidden />
                    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                        <View style={styles.getStartedContainer}>
                            <Text style={styles.title}>{this.state.registration.phone.title}</Text>
                            <Text style={styles.subtitle}>{this.state.registration.phone.subtitle}</Text>
                            <Text style={styles.subtitle}>{this.state.registration.phone.sstitle}</Text>
                        </View>
                        <View style={styles.registrationForm}>
                            <TextInput
                                style={styles.input}
                                placeholder={this.state.registration.phone.phone}
                                keyboardType="numeric"
                                maxLength={10}
                            ></TextInput>
                            <TouchableOpacity
                                style={styles.registerButton}
                                onPress={this._onRegisterPress} >
                                <Text style={styles.registerButtonText}>{this.state.registration.phone.send}</Text>
                            </TouchableOpacity >
                        </View>
                        <View>
                            <Text>{this.state.registration.phone.bottom}</Text>
                        </View>
                    </ScrollView>
                </View >
            );
        }
    }

    _onRegisterPress = () => {
        this.props.navigation.navigate('RegistrationPhoneNumberConfirmationScreen');
    }
}