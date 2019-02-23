import React, {Component} from 'react';
import styles from './Test.style';
import {View} from 'react-native';

export default class Test extends Component {
  render () {
    return (
      <View style={styles.container}/>
    );
  }
}

Test.propTypes = {
  //
};

Test.defaultProps = {
  //
};
