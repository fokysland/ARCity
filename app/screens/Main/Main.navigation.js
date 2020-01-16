import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screen navigators
import MapNavigation from './screens/Map/Map.navigation';
import LoginNavigation from '../AuthFlow/Auth/screens/Login/Login.navigation';
import RegistrationNavigation from '../AuthFlow/Auth/screens/Registration/Registration.navigation.js';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {primaryColor} from '_styles/colors';

const MainNavigation = () => {
  const {Navigator, Screen} = createBottomTabNavigator();
  return (
    <Navigator
      initialRouteName="map"
      tabBarOptions={{activeTintColor: primaryColor}}>
      <Screen
        name="map"
        component={MapNavigation}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="add-location" size={20} color={color} />
          ),
        }}
      />
      <Screen name="Login" component={LoginNavigation} />
      <Screen name="Reg" component={RegistrationNavigation} />
    </Navigator>
  );
};

export default MainNavigation;
