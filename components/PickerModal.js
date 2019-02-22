import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import { Overlay, ListItem } from 'react-native-elements';
import { Icon } from 'expo';
//{...this.props} 
const lang = require('./../lang/es.json');

export default class PickerModal extends React.Component {

    render() {
        return <Overlay
            height={310}
            isVisible={this.props.isVisible}
            onBackdropPress={this.props.onBackdropPress}>
            <ListItem
                bottomDivider
                titleStyle={{
                    textAlign: 'center',
                    alignSelf: 'stretch',
                    height: 30,
                    fontSize: 24
                }}
                title={lang.pick}
            />
            <ScrollView>
                <FlatList
                    data={this.props.items}
                    renderItem={
                        ({ item }) => <ListItem
                            bottomDivider
                            leftIcon={
                                <Icon.Ionicons
                                    color="green"
                                    size={24}
                                    name={this.props.icon} />}
                            key={item.key}
                            title={item.label}
                            onPress={() => {
                                this.setState({ isVisible: false });
                                this.props.onItemSelected(item.key, item.label);
                            }} />
                    }
                />
            </ScrollView>
        </Overlay>

    }
}
