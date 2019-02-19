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
            </ScrollView >
        );
    }
}