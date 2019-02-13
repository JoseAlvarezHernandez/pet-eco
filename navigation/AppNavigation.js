import { createStackNavigator } from 'react-navigation';

import RegistrationScreen from '../screens/Users/Registration/RegistrationScreen';
import StartScreen from '../screens/StartScreen';


const AppNavigation = createStackNavigator(
  {
    Start: {
      screen: StartScreen,
      navigationOptions: {
        header: null
      }
    },
    Registration: {
      screen: RegistrationScreen
    }
  },
  {
    initialRouteName: "Start"
  }
);

export default AppNavigation;
