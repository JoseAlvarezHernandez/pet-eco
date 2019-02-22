import React from 'react';
import { Text, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'expo';

const styles = require('./../../../styles/DogsScreen');
const lang = require('../../../lang/es.json');

export default class UserDogsScreen extends React.Component {
    static navigationOptions = {
        title: lang.dogs.title,
        headerStyle: { backgroundColor: '#285caf' },
        headerTitleStyle: { fontSize: 30, flex: 1, color: '#ffffff', textAlign: 'center', alignItems: 'center', alignSelf: 'center' },
    };

    state = {
        ...lang,
        myDogs: [
            {
                image: 'https://www.ecured.cu/images/thumb/a/a4/Perros1.jpg/260px-Perros1.jpg',
                name: 'Tyson'
            }, {
                image: 'https://images.spot.im/v1/production/phj6czto7p709vbh7kel',
                name: 'Beethoven'
            }, {
                image: 'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg',
                name: 'Laika'
            }
        ]
    };

    render() {
        return (
            <View style={styles.scrollContainer}>
                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={this._onRegisterPress} >
                    <Icon.Ionicons
                        style={styles.icon}
                        name="md-add"
                        size={40}
                        color="#ffffff"
                    />
                </TouchableOpacity >
                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.container}>
                        {
                            this.state.myDogs.map((dog, key) => (
                                <View style={styles.card} key={key}>
                                    <Image style={styles.dogsProfile} source={{ uri: dog.image }} ></Image>
                                    <Text style={styles.name}>{dog.name}</Text>
                                </View>
                            ))
                        }
                    </View >
                </ScrollView>
            </View >
        );
    }
}