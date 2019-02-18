
const React = require('react-native');
const { StyleSheet } = React;

module.exports = StyleSheet.create({
    requestButton: {
        height: 50,
        marginTop: 20,
        marginBottom: 30,
        justifyContent: 'center',
        backgroundColor: '#68a0cf',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#68a0cf'
    },
    requestButtonText: {
        textAlign: 'center',
        color: '#ffffff',
        paddingLeft: 80,
        paddingRight: 80,
        paddingTop: 2,
        paddingBottom: 2,
        fontSize: 20,
        justifyContent: 'center'
    },
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
});
