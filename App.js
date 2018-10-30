/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// 库
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

// 组件
import MovieList from './components/MovieList';
export default class App extends Component {
  render() {
    return (<MovieList />);
  }
}

const styles = StyleSheet.create({
 
});
