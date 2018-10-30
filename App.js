import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';
import ModalScreen from './screens/Modal';

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        height: 44,
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '300',
      }
    },
  }
);

const RootStack = createStackNavigator({
  Main: MainStack,
  MyModal: ModalScreen,
},{
  mode: 'modal',
  headerMode: 'none',
})

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}