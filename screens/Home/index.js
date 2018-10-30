import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends Component {

  static navigationOptions = ({navigation}) => ({
    title: 'Home',
    headerRight: (
      <Button
        onPress={()=>{
          navigation.navigate('MyModal')
        }}
        title="更多"
      />
    )
  })

  state = {
    count: 0
  }

  increaseCount = () => {
    this.setState(prevState=>({
      count: prevState.count + 1
    }))
  }

  componentDidMount() {
    this.props.navigation.setParams({
      increaseCount: this.increaseCount
    })
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>Home page</Text>
        <Text>{this.state.count}</Text>
        <Button
          title="Go to Details"
          onPress={ () => {
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything'
            })
          } }
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
