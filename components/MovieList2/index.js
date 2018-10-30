import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import fp from 'lodash/fp';

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';

export default class MovieList2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    }
  }

  fetchData = () => {
    fetch(REQUEST_URL)
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          loading: false,
          data: resJson.movies
        })
      }).catch(() => { });
  }

  componentDidMount() {
    this.fetchData();
  }

  renderLoadingView = () => {
    return (
      <View style={ styles.container }>
        <Text>正在加载电影数据...</Text>
      </View>
    )
  }

  renderMovie({item}) {
    return (
      <View style={ styles.container }>
        <Image
          style={ styles.thumbnail }
          source={ {
            uri: fp.get('posters.thumbnail', item)
          } } />
        <View style={ styles.rightContainer }>
          <Text style={ styles.title }>{ item.title }</Text>
          <Text style={ styles.year }>{ item.year }</Text>
        </View>
      </View>
    )
  }

  render() {
    if (this.state.loading) {
      return this.renderLoadingView();
    }
    return (
      <FlatList
        data={ this.state.data }
        renderItem={ this.renderMovie }
        style={ styles.list }
        keyExtractor={(item)=>item.title}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#f5f5f5'
  },
  rightContainer: {
    flex: 1
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center'
  },
  list: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  }
});
