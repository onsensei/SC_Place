import React, {Component} from 'react';
import request from '../../uitls/Request.util';
import styles from './Place.style';
import {FlatList, Text, View} from 'react-native';
import {get} from 'lodash';
import {getRestaurantInBangsueArea} from '../../configs/Request.config';

export default class Place extends Component {

  state = {
    places: []
  }

  async componentDidMount () {
    const apiConfig = getRestaurantInBangsueArea();
    const response = await request(apiConfig);
    const status = get(response, 'body.status');
    if (status === 'OK') {
      const places = get(response, 'body.results');
      // eslint-disable-next-line
      this.setState({
        places
      });
    }
  }

  _keyExtractor = (item) => item.id;

  _renderItem = ({item}) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{`${item.formatted_address}\n`}</Text>
    </View>
  )

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.places}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

Place.propTypes = {
  //
};

Place.defaultProps = {
  //
};
