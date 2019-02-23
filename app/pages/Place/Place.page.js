import Place from '../../components/Place/Place.component';
import React, {Component} from 'react';
import styles from './Place.style';
import {connect} from 'react-redux';

class PlacePage extends Component {
  render () {
    return (
      <Place style={styles.container}/>
    );
  }
}

PlacePage.propTypes = {
  //
};

PlacePage.defaultProps = {
  //
};

const mapStateToProps = () => ({
  //
});

const mapDispatchToProps = () => ({
  //
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacePage);
