import React from 'react';
import { Text, View } from 'react-native';
import { Overlay, ListItem } from 'react-native-elements';
//{...this.props} 
const lang = require('./../lang/es.json');

export default class PickerModal extends React.Component {
    render() {
        return <Text>Mi Picker Modal</Text>
        /*
        return <View>
            <Overlay
                isVisible={this.props.isVisible}
                height="300"
                onBackdropPress={this.closeModal}
            >
                <Text style={{
                    textAlign: 'center',
                    alignSelf: 'stretch',
                    height: 30,
                    fontSize: 24
                }}>{lang.pick}</Text>
                {
                    this.props.items.map(item => {
                        return <ListItem title={item[this.props.key]} onPress={() => {
                            this.setState({ isVisible: false });
                            this.props.onItemSelected(item[this.props.key], item[this.props.value])
                        }} />
                    })
                }
            </Overlay>
        </View>
        */
    }

    closeModal = () => {
        this.setState({ isVisible: false });
    }
}
