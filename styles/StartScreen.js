
const React = require('react-native');
const { StyleSheet } = React;

module.exports = StyleSheet.create({
    underline: {
        textDecorationLine: 'underline'
    },
    walkers: {
        marginTop: 10,
        flex: 1
    },
    users: {
        marginTop: 10,
        flex: 1
    },
    registerButtonText: {
        textAlign: 'center',
        color: '#ffffff',
        paddingLeft: 80,
        paddingRight: 80,
        paddingTop: 2,
        paddingBottom: 2,
        fontSize: 20,
        justifyContent: 'center'
    },
    registerButton: {
        height: 50,
        marginTop: 50,
        marginBottom: 30,
        justifyContent: 'center',
        backgroundColor: '#68a0cf',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#68a0cf'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        color: '#fff'
    },
    contentContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center'
    },
    welcomeImage: {
        marginTop: 100
    }
});