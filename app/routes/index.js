import Place from '../pages/Place/Place.page';
import Test from '../pages/Test/Test.page';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';

const TestNavigator = createStackNavigator({
  Test: {
    screen: Test,
    navigationOptions: {
      headerTitle: 'Test'
    }
  }
});

const PlaceNavigator = createStackNavigator({
  Place: {
    screen: Place,
    navigationOptions: {
      headerTitle: 'Place'
    }
  }
});

const RootNavigator = createBottomTabNavigator({
  Test: {
    screen: TestNavigator
  },
  Place: {
    screen: PlaceNavigator
  }
});

export default createAppContainer(RootNavigator);
