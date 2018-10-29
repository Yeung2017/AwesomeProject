import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Greeting extends Component {
  render() {
    return (
      <View>
        <Text style={styles.greeting}>Hello {this.props.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  greeting: {
    
  },
});
