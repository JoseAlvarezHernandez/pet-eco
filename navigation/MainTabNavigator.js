import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import UserHomeScreen from '../screens/Users/UserHomeScreen';
import UserSettingsScreen from '../screens/Users/Settings/UserSettingsScreen';
import UserMapScreen from '../screens/Users/Map/UserMapScreen';
import UserProfileScreen from '../screens/Users/Profile/UserProfileScreen';
import UsersDogsScreen from '../screens/Users/Dogs/DogsScreen';

const messages = require('./../lang/es.json');

const HomeStack = createStackNavigator({
  Home: UserHomeScreen,
});

HomeStack.navigationOptions = {
  header: null,
  tabBarLabel: messages.menu.home,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: UserSettingsScreen,
});

SettingsStack.navigationOptions = {
  header: null,
  tabBarLabel: messages.menu.settings,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const MapStack = createStackNavigator({
  userMap: UserMapScreen,
});

MapStack.navigationOptions = {
  header: null,
  tabBarLabel: messages.menu.map,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  userProfile: UserProfileScreen,
});

ProfileStack.navigationOptions = {
  header: null,
  tabBarLabel: messages.menu.profile,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
};

const DogStack = createStackNavigator({
  userDogs: UsersDogsScreen,
});

DogStack.navigationOptions = {
  header: null,
  tabBarLabel: messages.menu.dogs,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-paw' : 'md-paw'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  DogStack,
  MapStack,
  ProfileStack,
  SettingsStack
});
