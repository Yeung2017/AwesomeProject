import React,{Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home page</Text>
        <Button
          title="Go to Details"
          onPress={()=>{
            this.props.navigation.navigate('Details')
          }}
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
