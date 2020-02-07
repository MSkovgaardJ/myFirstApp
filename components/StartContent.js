import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class StartContent extends Component {
  render() {
    return (
      <View>
          <Text style={styles.welcome}>Velkommen til pardise øer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 100,
    color: '#fff'
  }
});
