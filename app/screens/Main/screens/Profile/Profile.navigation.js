import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '_screens/Main/screens/Profile/Profile.screen';
import allScreens from '_screens/Main/components/allScreens';

const {Navigator, Screen} = createStackNavigator();

const ProfileNavigation = () => {
  // return (
  //   <Navigator initialRouteName="Profile">
  //     <Screen name="Profile" component={ProfileScreen} />
  //     {allScreens().map(item => item)}
  //   </Navigator>
  // );
};

export default ProfileNavigation;
