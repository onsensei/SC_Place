// import Home from '../pages/Home/Home.page';
import Place from '../pages/Place/Place.page';
import Test from '../pages/Test/Test.page';
import {createAppContainer, createStackNavigator} from 'react-navigation';

const RootNavigator = createStackNavigator({
  Test: {
    screen: Test
  },
  Place: {
    screen: Place
  }
});

export default createAppContainer(RootNavigator);
