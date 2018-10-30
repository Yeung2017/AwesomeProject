import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Details extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text>Details page</Text>
        <Button
          title="Go to Details... again"
          onPress={ () => this.props.navigation.push('Details') }
        />
        <Button
          title="Go to Home"
          onPress={ () => this.props.navigation.navigate('Home') }
        />
        <Button
          title="Go back"
          onPress={ () => this.props.navigation.goBack() }
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
