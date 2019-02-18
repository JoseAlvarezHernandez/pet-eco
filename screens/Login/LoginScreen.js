import React from 'react';
import { TouchableOpacity, StatusBar, ScrollView, Text, TextInput, View } from 'react-native';

const styles = require('./../../styles/LoginScreen');
export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...require('../../lang/es.json'),
            form: {}
        };
        this._onLoginPress = this._onLoginPress.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden />
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.getStartedContainer}>
                        <Text style={styles.title}>{this.state.login.title}</Text>
                        <Text style={styles.subtitle}>{this.state.login.subtitle}</Text>
                    </View>
                    <View style={styles.loginForm}>
                        <TextInput
                            style={styles.input}
                            placeholder={this.state.login.username}
                            onChangeText={username => {
                                form = { ...this.state.form, username };
                                this.setState({ form });
                            }}
                        />
                        <TextInput
                            secureTextEntry={true}
                            style={styles.input}
                            placeholder={this.state.login.password}
                            onChangeText={password => {
                                form = { ...this.state.form, password };
                                this.setState({ form });
                            }}
                        />
                        <TouchableOpacity
                            style={styles.loginButton}
                            onPress={this._onloginPress} >
                            <Text style={styles.loginButtonText}>{this.state.login.submit}</Text>
                        </TouchableOpacity >
                    </View>
                </ScrollView >
            </View >
        );
    }

    _onLoginPress() {
        this.props.navigation.navigate('UserMenuScreen');
    }
}