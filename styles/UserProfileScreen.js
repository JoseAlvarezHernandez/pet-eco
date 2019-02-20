
const React = require('react-native');
const { StyleSheet } = React;

module.exports = StyleSheet.create({
    name: {
        fontSize: 16
    },
    email: {
        color: 'gray',
        fontSize: 16,
    },
    scroll: {
        backgroundColor: 'white',
    },
    userRow: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 12,
    },
    userNameText: {
        color: '#5B5A5A',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    userBioRow: {
        marginLeft: 40,
        marginRight: 40,
    },
    userNameText: {
        color: '#5B5A5A',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    userBioText: {
        color: 'gray',
        fontSize: 13.5,
        textAlign: 'center',
    },
    userImage: {
        marginTop: 15,
        marginBottom: 10
    },
    listContainer: {
        marginBottom: 0,
        marginTop: 0,
        borderTopWidth: 0,
    },
    listItemContainer: {
        borderBottomColor: '#ECECEC',
    }
});