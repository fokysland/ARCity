import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './screens/Login/Login.screen';
import RegistrationScreen from './screens/Registration/Registration.screen';

const {Screen, Navigator} = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
      <Screen component={LoginScreen} name="Login" />
      <Screen component={RegistrationScreen} name="Registration" />
    </Navigator>
  );
};

export default AuthNavigation;
