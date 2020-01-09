import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screen navigators
import MapNavigation from './screens/Map/Map.navigation';

const MainNavigation = () => {
  const {Navigator, Screen} = createBottomTabNavigator();
  return (
    <Navigator>
      <Screen name="map" component={MapNavigation} />
    </Navigator>
  );
};

export default MainNavigation;
