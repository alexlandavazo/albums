import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  async componentDidMount() {
    const response = await axios.get(
      'https://rallycoding.herokuapp.com/api/music_albums',
    );
    console.log(response.data);
  }

  render() {
    return (
      <View>
        <Text>Album List !!!</Text>
      </View>
    );
  }
}

export default AlbumList;
