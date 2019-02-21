
const React = require('react-native');
const { StyleSheet } = React;

module.exports = StyleSheet.create({
    icon: {
        paddingTop: 7
    },
    registerButton: {
        zIndex: 1000,
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 60,
        height: 60,
        flex: 1,
        justiftyContent: "center",
        alignItems: "center",
        backgroundColor: '#68a0cf',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#68a0cf'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
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