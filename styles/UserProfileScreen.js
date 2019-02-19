
const React = require('react-native');
const { StyleSheet } = React;

module.exports = StyleSheet.create({
    scrollContainer: {
        flex: 1,
    },
    profile: {
        paddingTop: 10,
        backgroundColor: '#FDD7E4',
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        flexDirection: 'row',
        height: 150
    },
    image: {
        marginLeft: 15,
        borderRadius: 60,
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: '#68a0cf'
    },
    title: {
        alignSelf: 'stretch',
        backgroundColor: '#192f6a',
        paddingTop: 15,
        paddingBottom: 15
    },
    titleText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#ffffff'
    },
    data: {

    },
    email: {
        paddingLeft: 5,
        color: '#c2c2c2',
        fontSize: 14
    },
    name: {
        paddingLeft: 5,
        paddingTop: 30,
        color: '#ffffff',
        fontSize: 20
    },
    phone: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        backgroundColor: '#ffffff'
    },
    phoneNumber: {
        fontSize: 30,
        color: '#2c2c2c'
    }
});