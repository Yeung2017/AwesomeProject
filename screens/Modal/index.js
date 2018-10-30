import React,{Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Modal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Modal page</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="取消"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
