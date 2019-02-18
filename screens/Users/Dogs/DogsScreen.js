import React from 'react';
import { Text, ScrollView, View, Image } from 'react-native';

const styles = require('./../../../styles/DogsScreen');

export default class UserDogsScreen extends React.Component {
    static navigationOptions = {
        title: 'Mis Mascotas'
    };

    state = {
        ...require('../../../lang/es.json'),
        myDogs: [
            {
                image: './../../../assets/images/mydog.jpeg',
                name: 'Tyson'
            },
            {
                image: './../../../assets/images/bethoven.jpg',
                name: 'Beethoven'
            },
            {
                image: './../../../assets/images/laika.jpg',
                name: 'Laika'
            }
        ]
    };

    render() {
        return (
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <View style={styles.card}>
                        <Image style={styles.dogsProfile} source={require('./../../../assets/images/bethoven.jpg')} ></Image>
                        <Text style={styles.name}>Bethoven</Text>
                    </View>
                    <View style={styles.card}>
                        <Image style={styles.dogsProfile} source={require('./../../../assets/images/laika.jpg')}></Image>
                        <Text style={styles.name}>Laika</Text>
                    </View>
                    <View style={styles.card}>
                        <Image style={styles.dogsProfile} source={require('./../../../assets/images/mydog.jpeg')} ></Image>
                        <Text style={styles.name}>Tyson</Text>
                    </View>
                </View >
            </ScrollView >
        );
    }
}