import { createStackNavigator } from 'react-navigation';

import StartScreen from '../screens/StartScreen';
import RegistrationScreen from '../screens/Users/Registration/RegistrationScreen';
import RegistrationPhoneNumberScreen from '../screens/Users/Registration/RegistrationPhoneNumberScreen';
import RegistrationPhoneNumberConfirmationScreen from '../screens/Users/Registration/RegistrationPhoneNumberConfirmationScreen';


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
    },
    RegistrationPhoneNumberConfirmationScreen: {
      screen: RegistrationPhoneNumberConfirmationScreen
    }
  },
  {
    initialRouteName: "Start"
  }
);

export default AppNavigation;
