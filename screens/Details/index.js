import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Details extends Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      headerStyle: {
        ...navigationOptions.headerStyle,
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    }
  }

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={ styles.container }>
        <Text>Details page</Text>
        <Text>itemId: { JSON.stringify(itemId) }</Text>
        <Text>otherParam: { JSON.stringify(otherParam) }</Text>
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
