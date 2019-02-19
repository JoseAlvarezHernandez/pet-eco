import React from 'react';
import { Text, View, ScrollView, Image, Platform } from 'react-native';
import { LinearGradient, Icon } from 'expo';
const styles = require('../../../styles/UserProfileScreen');

export default class UserProfileScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <ScrollView style={styles.scrollContainer}>
                <LinearGradient
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    style={styles.profile}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'http://www.free-avatars.com/data/media/37/cat_avatar_0597.jpg' }}>
                    </Image>
                    <View style={styles.data}>
                        <Text style={styles.name}>Jose de Jesus Alvarez</Text>
                        <Text style={styles.email}>alvarez_3993@hotmail.com</Text>
                    </View>
                </LinearGradient>
                <View style={styles.scrollContainer}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Cuenta</Text>
                    </View>
                    <View style={styles.item}>
                        <Icon.Ionicons
                            name={Platform.OS === 'ios' ? 'ios-call' : 'md-call'}
                            size={30}
                            color='green'
                        />
                        <Text style={styles.phoneNumber}>+52 (55) - 269 - 91207</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}