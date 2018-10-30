import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      dataSource: []
    }
  }

  fetchMovies = () => {
    fetch('https://facebook.github.io/react-native/movies.json')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoading: false,
          dataSource: json.movies
        })
      }).catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={ styles.movieList }>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={ styles.movieList }>
        <FlatList
          data={ this.state.dataSource }
          renderItem={ ({ item }) => <Text style={styles.item}>{ item.title }, { item.releaseYear }</Text> }
          keyExtractor={ (item, index) => item.id }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  movieList: {
    flex: 1,
  },
  item: {
    height: 220,
    borderBottomWidth: 1,
    textAlign: 'center',
  }
});
