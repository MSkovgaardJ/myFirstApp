import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {Header} from 'react-native-elements';

export default class TopNav extends Component {
    render(){
        return(
            <View>
                <Header 
                containerStyle={styles.headerContainer}
                    rightComponent={{icon: 'menu', color: '#000'}}
                    centerComponent={{text:'Paradis øer'}}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
headerContainer:{
opacity: .5,
backgroundColor: 'gold',
},

});