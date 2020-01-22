import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import allScreens from '_screens/Main/components/allScreens';

const {Navigator, Screen} = createStackNavigator();

const ProfileNavigation = () => {
  return <Navigator>{allScreens().map(item => item)}</Navigator>;
};

export default ProfileNavigation;
