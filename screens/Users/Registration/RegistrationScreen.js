import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, Picker, View, ActivityIndicator, StatusBar } from 'react-native';
import DatePicker from 'react-native-datepicker';

import Math from '../../../utilities/Math';
import Resources from '../../../utilities/Resources';

const styles = require('../../../styles/RegistrationScreen');

export default class RegistrationScreen extends React.Component {

    state = {
        ...require('./../../../lang/es.json'),
        countries: null,
        isLoading: true,
        dateInput: null
    };

    constructor(props) {
        super(props);

        this._getAllCountries();
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <StatusBar hidden />
                    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                        <View style={styles.getStartedContainer}>
                            <Text style={styles.title}>{this.state.registration.title}</Text>
                            <Text style={styles.subtitle}>{this.state.registration.subtitle}</Text>
                            <Text style={styles.subtitle}>{this.state.registration.sstitle}</Text>
                        </View>
                        <View style={styles.registrationForm}>
                            <TextInput
                                style={styles.input}
                                placeholder={this.state.registration.user.fullname}
                                onChangeText={fullnameInput => { this.setState({ fullnameInput }); }}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder={this.state.registration.user.email}
                                onChangeText={emailInput => { this.setState({ emailInput }); }}
                            />

                            <TextInput
                                secureTextEntry={true}
                                style={styles.input}
                                placeholder={this.state.registration.user.password}
                                onChangeText={passwordInput => { this.setState({ passwordInput }); }}
                            />

                            <DatePicker
                                style={styles.dateInput}
                                placeholder={this.state.registration.user.dob}
                                mode="date"
                                maxDate={Math.getYearsAgo(18)}
                                onDateChange={date => this.setState({ dateInput: date })}
                                date={this.state.dateInput}
                                customStyles={{
                                    dateInput: {
                                        borderColor: 'gray',
                                        borderWidth: 1,
                                        borderRadius: 5,
                                        paddingLeft: 15,
                                        paddingRight: 15,
                                        width: 270,
                                        height: 50,
                                        marginTop: 10,
                                        marginBottom: 10,
                                        textAlign: 'left',
                                        textAlignment: 'left'
                                    }
                                }}
                                showIcon={false}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder={this.state.registration.user.address}
                                onChangeText={addressInput => { this.setState({ addressInput }); }}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder={this.state.registration.user.zipcode}
                                onChangeText={zipCodeInput => { this.setState({ zipCodeInput }); }}
                                onBlur={this._searchZipCode}
                            />

                            <Picker
                                selectedValue={this.state.countryInput}
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#000000'
                                }}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ countryInput: itemValue })
                                }
                            >
                                {this.state.countries.map((item, key) => (
                                    <Picker.Item label={item.name} value={item.numericCode} key={key} />)
                                )}
                            </Picker>
                            <TouchableOpacity
                                style={styles.registerButton}
                                onPress={this._onRegisterPress} >
                                <Text style={styles.registerButtonText}>{this.state.register}</Text>
                            </TouchableOpacity >
                        </View>
                    </ScrollView>
                </View >
            );
        }
    }

    _getAllCountries = async () => {
        const resources = new Resources();
        resources.getCountries().then(countries => {
            this.setState({ isLoading: false, countries: JSON.parse(countries._bodyInit) })
        });
    }

    _searchZipCode = () => {

    }
    _onRegisterPress = () => {

    }
}