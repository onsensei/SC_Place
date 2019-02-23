import React, {Component} from 'react';
import styles from './Place.style';
import {View} from 'react-native';

export default class Place extends Component {
  render () {
    return (
      <View style={styles.container}/>
    );
  }
}

Place.propTypes = {
  //
};

Place.defaultProps = {
  //
};
