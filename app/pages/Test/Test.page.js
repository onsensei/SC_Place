import React, {Component} from 'react';
import styles from './Test.style';
import Test from '../../components/Test/Test.component';
import {connect} from 'react-redux';

class TestPage extends Component {
  render () {
    return (
      <Test style={styles.container}/>
    );
  }
}

TestPage.propTypes = {
  //
};

TestPage.defaultProps = {
  //
};

const mapStateToProps = () => ({
  //
});

const mapDispatchToProps = () => ({
  //
});

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
