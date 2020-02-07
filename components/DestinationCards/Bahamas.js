import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

let bahamas = {uri:'https://www.fodors.com/wp-content/uploads/2018/03/Ultimate-Things-To-Do-Bahamas-Hero.jpg'}
export default class Bahamas extends Component {
    render() {
      return (
          <View>
        <Card
        title='Turen går til bahamas'
        image={(bahamas)}>
            <Text>Bahamas er en ø hvor der bor svømmende grise</Text>
                <Button
                icon={<Icon name='read' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Læs mere' />
        </Card>
    </View>
      );}}