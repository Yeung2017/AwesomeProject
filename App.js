import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './pages/Home';
import DetailsScreen from './pages/Details'

const RootStack = createStackNavigator(
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
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}