
const React = require('react-native');
const { StyleSheet } = React;

module.exports = StyleSheet.create({
    backArrow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    returnButton: {
        justifyContent: 'flex-end',
        fontSize: 32,
        color: '#33ddff'
    },
    picker: {
        borderColor: 'gray',
        borderWidth: 1,
        width: 270
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
    registrationForm: {
        paddingBottom: 20,
        paddingTop: 20
    },
    dateInput: {
        width: 270,
        marginTop: 10,
        marginBottom: 10
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 15,
        paddingRight: 15,
        width: 270,
        height: 50,
        marginTop: 10,
        marginBottom: 10
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingTop: 10,
        color: '#000000'
    },
    subtitle: {
        textAlign: 'center',
        color: '#606060'
    },
    container: {
        marginTop: 10,
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
});