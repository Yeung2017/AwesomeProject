// 库
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// 组件
import Greeting from '../Greeting';

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  lotsOfGreetings: {
    color: 'red'
  },
});
