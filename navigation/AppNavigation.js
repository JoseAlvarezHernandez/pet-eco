import { createStackNavigator } from 'react-navigation';

import StartScreen from '../screens/StartScreen';
import RegistrationScreen from '../screens/Users/Registration/RegistrationScreen';
import RegistrationPhoneNumberScreen from '../screens/Users/Registration/RegistrationPhoneNumberScreen';
import RegistrationPhoneNumberConfirmationScreen from '../screens/Users/Registration/RegistrationPhoneNumberConfirmationScreen';
import UserMenuScreen from '../screens/Users/UserMenuScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import WalkerRegistrationScreen from '../screens/Walker/Registration/RegistrationScreen';

const AppNavigation = createStackNavigator(
  {
    WalkerRegistration: {
      screen: WalkerRegistrationScreen
    },
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
    },
    UserMenuScreen: {
      screen: UserMenuScreen,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: LoginScreen
    }
  },
  {
    initialRouteName: "Start"
  }
);

export default AppNavigation;
