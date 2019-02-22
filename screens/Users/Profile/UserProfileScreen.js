import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Icon, ImagePicker } from 'expo';
import { Avatar, ListItem } from 'react-native-elements';

import InfoText from './../../../components/InfoText';
import PickerModal from '../../../components/PickerModal';

const styles = require('./../../../styles/UserProfileScreen');

export default class UserProfileScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    state = {
        ...require('../../../lang/es.json'),
        pushNotifications: true,
        isVisible: false,
        avatar: 'https://www.w3schools.com/w3images/avatar2.png',
        currencies: [
            { label: 'USD', currency: '001' },
            { label: 'MXN', currency: '002' },
            { label: 'EUR', currency: '003' },
            { label: 'CAD', currency: '004' },
        ],
        currency: 'MXN'
    }

    render() {
        return (
            <ScrollView style={styles.scroll}>
                <PickerModal
                    items={this.state.currencies}
                    isVisible={this.state.isVisible}
                    onItemSelected={this.callBack}
                    key="currency"
                    label="label" />

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
                <InfoText text={this.state.config.account} />
                <ListItem
                    title={this.state.config.notification}
                    switch={
                        {
                            onValueChange: this.onChangePushNotifications,
                            value: this.state.pushNotifications
                        }
                    }
                    containerStyle={styles.listItemContainer}
                    bottomDivider
                    leftIcon={
                        <Icon.Ionicons
                            style={{
                                backgroundColor: '#2aa9c5',
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                                paddingTop: 3,
                                textAlign: 'center',
                                alignItems: 'center',

                            }}
                            color="white"
                            size={24}
                            name="md-notifications" />
                    }
                />
                <ListItem
                    title={this.state.config.currency}
                    bottomDivider
                    onPress={() => this.onPressOptions()}
                    rightTitle={this.state.currency}
                    rightTitleStyle={styles.rightTitle}
                    leftIcon={
                        <Icon.Ionicons
                            style={{
                                backgroundColor: '#007c35',
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                                paddingTop: 3,
                                textAlign: 'center',
                                alignItems: 'center',

                            }}
                            color="white"
                            size={24}
                            name="md-cash" />
                    }
                    rightIcon={
                        <Icon.Ionicons
                            color="rgba(211, 211, 211, 0.6)"
                            size={24}
                            name="md-arrow-dropright" />
                    }
                />

                <ListItem
                    title={this.state.config.card}
                    rightTitle="**123"
                    rightTitleStyle={styles.rightTitle}
                    bottomDivider
                    onPress={() => this.onPressOptions()}
                    leftIcon={
                        <Icon.Ionicons
                            style={{
                                backgroundColor: 'purple',
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                                paddingTop: 3,
                                textAlign: 'center',
                                alignItems: 'center',

                            }}
                            color="white"
                            size={24}
                            name="md-card" />
                    }
                    rightIcon={
                        <Icon.Ionicons
                            color="rgba(211, 211, 211, 0.6)"
                            size={24}
                            name="md-arrow-dropright" />
                    }
                />
                <ListItem
                    title={this.state.config.lang}
                    rightTitle="ES"
                    rightTitleStyle={styles.rightTitle}
                    onPress={() => this.onPressOptions()}
                    leftIcon={
                        <Icon.Ionicons
                            style={{
                                backgroundColor: 'pink',
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                                paddingTop: 3,
                                textAlign: 'center',
                                alignItems: 'center',

                            }}
                            color="white"
                            size={24}
                            name="md-globe" />
                    }
                    rightIcon={
                        <Icon.Ionicons
                            color="rgba(211, 211, 211, 0.6)"
                            size={24}
                            name="md-arrow-dropright" />
                    }
                />
                <InfoText text={this.state.config.more} />
                <ListItem
                    title={this.state.config.about}
                    bottomDivider
                    onPress={() => this.onPressOptions()}
                    leftIcon={
                        <Icon.Ionicons
                            color="gray"
                            size={34}
                            name="md-information-circle" />
                    }
                />
                <ListItem
                    title={this.state.config.logout}
                    bottomDivider
                    onPress={() => this.onPressOptions()}
                    leftIcon={
                        <Icon.Ionicons
                            style={{
                                backgroundColor: '#f06868',
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                                paddingTop: 3,
                                textAlign: 'center',
                                alignItems: 'center',

                            }}
                            size={24}
                            name="md-log-out"
                            color='white'
                        />
                    }
                />
            </ScrollView >
        );
    }

    onPressOptions = () => {
        this.setState({ isVisible: true });
    }

    onChangePushNotifications = () => {
        this.setState({ pushNotifications: !this.state.pushNotifications })
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

    closeModal = () => {
        this.setState({ isVisible: false });
    }

    callBack = (key, label) => {
        this.setState({ isVisible: false, currency: label });
        console.log(`seleccione ${key}`);
    }
} 