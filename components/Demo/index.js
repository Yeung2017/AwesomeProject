import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Demo extends Component {
  render() {
    return (
      <View>
        <Text style={styles.demo}>demo component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  demo: {
    color: 'red'
  },
});
