import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View, ActivityIndicator, StatusBar } from 'react-native';
import { Location } from 'expo';

const styles = require('../../../styles/RegistrationPhoneNumberConfirmationScreen');

export default class RegistrationPhoneNumberConfirmationScreen extends React.Component {

    constructor(props) {
        super(props);
        this.focusNextField = this.focusNextField.bind(this);
        this.inputs = {};
        this.state = {
            ...require('./../../../lang/es.json'),
            isLoading: false,
            form: {}
        };
    }


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
                            <Text style={styles.title}>{this.state.registration.phone.confirmation}</Text>
                            <Text style={styles.subtitle}>{this.state.registration.phone.Csubtitle}</Text>
                        </View>
                        <View style={styles.registrationForm}>
                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                minLength={1}
                                maxLength={1}
                                value={this.state.form.first}
                                onKeyPress={() => this.focusNextField('two')}
                                ref={input => {
                                    this.inputs['one'] = input;
                                }}
                            ></TextInput>
                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                minLength={1}
                                returnKeyType={"next"}
                                maxLength={1}
                                value={this.state.form.second}
                                onKeyPress={() => this.focusNextField('three')}
                                ref={input => this.inputs['two'] = input}
                            ></TextInput>
                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                minLength={1}
                                maxLength={1}
                                value={this.state.form.third}
                                onKeyPress={() => this.focusNextField('four')}
                                ref={input => this.inputs['three'] = input}
                            ></TextInput>
                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                minLength={1}
                                maxLength={1}
                                value={this.state.form.fourth}
                                ref={input => this.inputs['four'] = input}
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

    focusNextField(key) {
        this.inputs[key].focus();
    }

    _onRegisterPress = async () => {
        this.props.navigation.navigate('UserMenuScreen');
        /* 
        try {
            let location = await Location.getCurrentPositionAsync({});
            console.log(location);
            return userLocation || {};
        } catch (e) {
            console.log(e);
            return {};
        }
        /** */
    }
}