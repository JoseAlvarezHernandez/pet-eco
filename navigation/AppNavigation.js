import { createStackNavigator } from 'react-navigation';

import StartScreen from '../screens/StartScreen';
import RegistrationScreen from '../screens/Users/Registration/RegistrationScreen';
import RegistrationPhoneNumberScreen from '../screens/Users/Registration/RegistrationPhoneNumberScreen';


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
    },
    RegistrationPhoneNumberScreen: {
      screen: RegistrationPhoneNumberScreen
    }
  },
  {
    initialRouteName: "Start"
  }
);

export default AppNavigation;
