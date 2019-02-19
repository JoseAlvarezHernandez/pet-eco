import React from 'react';
import { Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Location } from 'expo';

const styles = require('../../../styles/MapScreen');

export default class UserMapScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            ...require('../../../lang/es.json'),
            user: {
                latitudeDelta: 0.03,
                longitudeDelta: 0.03,
                latitude: null,
                longitude: null
            },
            isLoading: true
        };
        this._getLocation();
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: this.state.user.latitude,
                            longitude: this.state.user.longitude,
                            latitudeDelta: this.state.user.latitudeDelta,
                            longitudeDelta: this.state.user.longitudeDelta
                        }}>
                        <Marker
                            draggable
                            coordinate={this.state.startMarker}
                            title='Mi posición'
                            description='Mi posición para solicitar un paseo para mi perro'
                            onDragEnd={(e) => this.setState({ startMarker: e.nativeEvent.coordinate })}
                        />
                    </MapView>
                    <TouchableOpacity
                        style={styles.requestButton}
                        onPress={this._onRequestPress} >
                        <Text style={styles.requestButtonText}>{this.state.map.request}</Text>
                    </TouchableOpacity >
                </View>
            );
        }
    }

    _getLocation = async () => {
        try {
            const userLocation = await Location.getCurrentPositionAsync({});
            const user = {
                ...this.state.user,
                latitude: userLocation.coords.latitude,
                longitude: userLocation.coords.longitude
            };
            this.setState({
                startMarker: user,
                user,
                isLoading: false
            });
        } catch (e) {
            return {};
        }
    }
}