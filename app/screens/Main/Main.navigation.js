import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screen navigators
import MapNavigation from './screens/Map/Map.navigation';
import FeedNavigation from './screens/Feed/Feed.navigation';
import NewRequestNavigation from './screens/NewRequest/NewRequest.navigation';
import RegistrationNavigation from '_screens/AuthFlow/Auth/screens/Registration/Registration.navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {primaryColor} from '_styles/colors';

const MainNavigation = () => {
  const {Navigator, Screen} = createBottomTabNavigator();
  return (
    <Navigator
      initialRouteName="CreateReq"
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
      <Screen name="Feed" component={FeedNavigation} />
      <Screen name="CreateReq" component={NewRequestNavigation} />
    </Navigator>
  );
};

export default MainNavigation;
