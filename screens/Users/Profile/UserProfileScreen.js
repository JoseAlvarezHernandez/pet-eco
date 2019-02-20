import React from 'react';
import { Text, View, ScrollView, Image, Platform } from 'react-native';
import { Icon, ImagePicker } from 'expo';
import { Avatar, List, ListItem } from 'react-native-elements';
import InfoText from './../../../components/InfoText';

const styles = require('./../../../styles/UserProfileScreen');

export default class UserProfileScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    state = {
        pushNotifications: true,
        avatar: 'https://www.w3schools.com/w3images/avatar2.png'
    }

    render() {
        return (
            <ScrollView style={styles.scroll}>
                <View style={styles.userRow}>
                    <View style={styles.userImage}>
                        <Avatar
                            size="xlarge"
                            rounded
                            showEditButton
                            onEditPress={this.onChangeAvatar}
                            source={{
                                uri: this.state.avatar,
                            }}
                        />
                    </View>
                    <View style={styles.userNameRow}>
                        <Text style={styles.userNameText}>Jose Alvarez</Text>
                    </View>
                    <View style={styles.userBioRow}>
                        <Text style={styles.userBioText}>alvarez_3993@hotmail.com</Text>
                    </View>
                </View>
                <InfoText text="Cuenta" />
            </ScrollView>
        );
    }

    onPressOptions = () => {
        this.props.navigation.navigate('options')
    }

    onChangePushNotifications = () => {
        this.setState(state => ({
            pushNotifications: !state.pushNotifications,
        }))
    }

    onChangeAvatar = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 4],
        });
        if (!result.cancelled) {
            this.setState({ avatar: result.uri });
        }
    };
} 