import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MapScreen from './Map.screen';
import allScreens from '_screens/Main/components/allScreens';

const {Navigator, Screen} = createStackNavigator();

const MapNavigation = () => {
  return (
    <Navigator initialRouteName="Map">
      <Screen name="Map" component={MapScreen} options={{headerShown: false}} />
      {allScreens().map(item => item)}
    </Navigator>
  );
};

export default MapNavigation;
