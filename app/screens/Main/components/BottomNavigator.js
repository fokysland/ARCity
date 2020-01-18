import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screen navigators
import FeedNavigation from '../screens/Feed/Feed.navigation';
import MapNavigation from '../screens/Map/Map.navigation';
import ChatsNavigation from '_screens/Main/screens/Chats/Chats.navigation';

import BottomNavigatorStyles from './BottomNavigator.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {primaryColor} from '_styles/colors';

const {Navigator, Screen} = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Navigator
      initialRouteName="Feed"
      tabBarOptions={{activeTintColor: primaryColor}}>
      <Screen name="Feed" component={FeedNavigation} />
      <Screen
        name="Map"
        component={MapNavigation}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="add-location" size={20} color={color} />
          ),
        }}
      />
      <Screen name="Chats" component={ChatsNavigation} />
    </Navigator>
  );
};

export default BottomNavigator;
