import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Demo extends Component {
  render() {
    return (
      <View style={styles.demo}>
        <Text>demo component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  demo: {
    color: 'red'
  },
});
