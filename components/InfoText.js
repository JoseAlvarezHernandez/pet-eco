import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: '#F4F5F4',
  },
  infoText: {
    fontSize: 16,
    marginLeft: 20,
    color: 'gray',
    fontWeight: '500',
  },
});

export default class InfoText extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text {...this.props} style={styles.infoText} >{this.props.text}</Text>
      </View>)
  }
}
