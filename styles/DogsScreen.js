
const React = require('react-native');
const { StyleSheet } = React;

module.exports = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'black'
    },
    name: {
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#d3d3d3',
    },
    card: {
        marginTop: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
            height: 1,
            width: -2
        },
        elevation: 2,
        paddingTop: 10
    },
    dogsProfile: {
        width: 300,
        height: 250,
        marginBottom: 20,
    },
    scrollContainer: {
        flex: 1,
    },
    container: {
        padding: 20,
    },
});