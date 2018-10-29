import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true
    }
    this.intervalTimer = [];
  }

  componentDidMount() {
    // 每1000毫秒对showText状态做一次取反操作
    this.intervalTimer.push(setInterval(() => {
      this.setState(prevState => ({
        showText: !prevState.showText
      }));
    }, 1000));
  }

  componentWillUnmount() {
    this.intervalTimer.forEach(timer => {
      clearInterval(timer);
    });
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    const display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{ display }</Text>
    )
  }
}

const styles = StyleSheet.create({
  blink: {
    color: 'red'
  },
});
