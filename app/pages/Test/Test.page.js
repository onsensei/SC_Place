import React, {Component} from 'react';
import styles from './Test.style';
import Test from '../../components/Test/Test.component';
import {connect} from 'react-redux';

class TestPage extends Component {

  getNumberOfSequenceWithIndex = (x) => {
    if (x <= 0) {
      return 3;
    } else {
      return 2 * x + this.getNumberOfSequenceWithIndex(x - 1);
    }
  }

  render () {
    // console.log(this.getNumberOfSequenceWithIndex(0)); // 3
    // console.log(this.getNumberOfSequenceWithIndex(1)); // 5
    // console.log(this.getNumberOfSequenceWithIndex(2)); // 9
    // console.log(this.getNumberOfSequenceWithIndex(3)); // 15

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
