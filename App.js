/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// 库
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert, Button, ScrollView, SectionList, FlatList } from 'react-native';

// 组件
import LotsOfGreetings from './components/LotsOfGreetings';
import Blink from './components/Blink';
import PizzaTranslator from './components/PizzaTranslator';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const len = 50000;

const flatListData = new Array(len).fill('').map((item, index)=> ({
  key: `item${len - index}`
}));
export default class App extends Component {

  hanldeButtonPress = () => {
    Alert.alert('You tapped button')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={ styles.h2 }>FlatList</Text>
        <FlatList data={ flatListData }
          renderItem={ ({ item }) => {
            return (<Text style={ styles.item }>{ item.key }</Text>)
          }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  h2: {
    fontSize: 20,
    backgroundColor: '#eee'
  },
  item: {
    fontSize: 18,
    textAlign: 'center',
    height: 220,
    borderBottomWidth: 1,
  }
});
