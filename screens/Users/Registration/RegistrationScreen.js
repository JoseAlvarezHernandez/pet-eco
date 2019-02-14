import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, Picker, View, ActivityIndicator, StatusBar } from 'react-native';
import DatePicker from 'react-native-datepicker';

import Math from '../../../utilities/Math';

const styles = require('../../../styles/RegistrationScreen');

export default class RegistrationScreen extends React.Component {

    state = {
        ...require('./../../../lang/es.json'),
        countries: null,
        states: null,
        isLoading: true,
        dateInput: null,
        form: {}
    };

    constructor(props) {
        super(props);
        this._getAllData();
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
                                onChangeText={fullname => {
                                    form = { ...this.state.form, fullname };
                                    this.setState({ form });
                                }}
                            />

                            <TextInput
                                keyboardType="email-address"
                                autoComplete="email"
                                style={styles.input}
                                placeholder={this.state.registration.user.email}
                                onChangeText={email => {
                                    form = { ...this.state.form, email };
                                    this.setState({ form });
                                }}
                            />

                            <TextInput
                                secureTextEntry={true}
                                style={styles.input}
                                placeholder={this.state.registration.user.password}
                                onChangeText={password => {
                                    form = { ...this.state.form, password };
                                    this.setState({ form });
                                }}
                            />

                            <DatePicker
                                style={styles.dateInput}
                                placeholder={this.state.registration.user.dob}
                                mode="date"
                                maxDate={Math.getYearsAgo(18)}
                                onDateChange={dob => {
                                    form = { ...this.state.form, dob };
                                    this.setState({ form });
                                }}
                                format="DD-MM-YYYY"
                                date={this.state.form.dob}
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
                                        marginBottom: 10
                                    }
                                }}
                                showIcon={false}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder={this.state.registration.user.address}
                                onChangeText={address => {
                                    form = { ...this.state.form, address };
                                    this.setState({ form });
                                }}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder={this.state.registration.user.zipcode}
                                onChangeText={zipcode => {
                                    form = { ...this.state.form, zipcode };
                                    this.setState({ form });
                                }}
                            />

                            <Picker
                                selectedValue={this.state.form.country}
                                style={styles.picker}
                                onValueChange={country => {
                                    form = { ...this.state.form, country };
                                    this.setState({ form });
                                }}
                            >
                                {this.state.countries.map((item, key) => (
                                    <Picker.Item label={item.name} value={item.code} key={key} />)
                                )}
                            </Picker>

                            <Picker
                                selectedValue={this.state.form.state}
                                style={styles.picker}
                                onValueChange={state => {
                                    form = { ...this.state.form, state };
                                    this.setState({ form });
                                }}
                            >
                                {this.state.states.map((item, key) => (
                                    <Picker.Item label={item.name} value={item.code} key={key} />)
                                )}
                            </Picker>

                            <Picker
                                selectedValue={this.state.form.city}
                                style={styles.picker}
                                onValueChange={city => {
                                    form = { ...this.state.form, city };
                                    this.setState({ form });
                                }}
                            >
                                {this.state.cities.map((item, key) => (
                                    <Picker.Item label={item.name} value={item.code} key={key} />)
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

    _getAllData = () => {
        setTimeout(() => {
            this.setState({
                countries: [{ name: 'País', code: '000' }, { name: 'México', code: '052' }],
                states: [{ name: 'Estado', code: '000' }, { name: 'Veracruz', code: '352' }],
                cities: [{ name: 'Ciudad', code: '000' }, { name: 'Boca del rio', code: '355' }],
                isLoading: false
            });
        }, 3000);
    }
    _onRegisterPress = () => {
        console.log(this.state.form);
        this.props.navigation.navigate('RegistrationPhoneNumberScreen');
    }
}