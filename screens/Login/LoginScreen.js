import React from 'react';
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    Button,
    View,
    StyleSheet
} from 'react-native';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        const language = require('../lang/es.json');
        this.state = {
            ...language,
            inputPassword: '',
            inputUsername: '',
            message: 'start'
        };
        this._onLoginPress = this._onLoginPress.bind(this);
    }

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
                        <Text style={styles.title}>{this.state.login}</Text>
                        <TextInput
                            style={styles.username}
                            placeholder={this.state.username}
                            onChangeText={(inputUsername) => this.setState({ inputUsername })}
                            value={this.state.inputUsername}
                            keyboardType='email-address'
                        />
                        <TextInput
                            secureTextEntry={true}
                            style={styles.password}
                            placeholder={this.state.password}
                            onChangeText={(inputPassword) => this.setState({ inputPassword })}
                            value={this.state.inputPassword}
                        />
                        <Button
                            onPress={this._onLoginPress}
                            title="Submit" />
                    </View>
                    <View >
                    </View>
                    <Text>{this.state.message}</Text>
                    <View style={styles.loginOptions}>
                        <Image
                            source={require('../assets/images/facebook.png')}
                            style={styles.facebook}
                        />
                    </View>
                    <View style={styles.footer}>
                        <Text>2018 Copy</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }

    _onLoginPress(state) {
        this.setState({ message: 'Pressed' });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        color: '#fff'
    },
    loginOptions: {
        flex: 2,
        flexDirection: 'row'
    },
    footer: {
        flex: 3,
        position: 'absolute',
        bottom: 0
    },
    title: {
        textAlign: 'center',
        width: 80
    },
    contentContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center'
    },
    welcomeContainer: {

    },
    welcomeImage: {
        marginTop: 100
    },
    facebook: {
        height: 20
    },
    getStartedContainer: {

    },
    username: {
        height: 40,
        width: 100
    },
    password: {
        width: 100,
        height: 60
    }
});