import React, { Component } from 'react';
import { Platform, StyleSheet, Text, ImageBackground, View } from 'react-native';

import Header from './components/TopNav';
import StartContent from './components/StartContent';
import Bahamas from './components//DestinationCards/Bahamas';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    let backgroundImage = {uri:'https://i.pinimg.com/originals/64/00/90/64009069bd0b0ea8ac1e8eda17243791.jpg'};
    return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={{width:'100%', height:'100%'}}>
          <Header />
          <StartContent />
          <Bahamas/>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold',
  },
});
