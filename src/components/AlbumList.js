import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state = {albums: []};
  async componentDidMount() {
    const response = await axios.get(
      'https://rallycoding.herokuapp.com/api/music_albums',
    );
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({albums: response.data});
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
