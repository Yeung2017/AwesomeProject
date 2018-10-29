import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleChangeText = (text = '') => {
    this.setState({
      text
    })
  }

  render() {
    return (
      <View style={ styles.pizzaTranslator }>
        <TextInput
          style={ {
            height: 40
          } }
          placeholder="Type here to translate!"
          onChangeText={ this.handleChangeText } />
        <Text>
          {
            this.state.text.split(' ').map((word) => word && '🍕').join('-')
          }
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pizzaTranslator: {
    color: 'red'
  },
});
