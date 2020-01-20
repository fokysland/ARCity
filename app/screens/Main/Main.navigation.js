import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FeedNavigation from '_screens/Main/screens/Feed/Feed.navigation';
import MapNavigation from '_screens/Main/screens/Map/Map.navigation';
import ChatsNavigation from '_screens/Main/screens/Chats/Chats.navigation';
import Menu from '_screens/Main/screens/Menu/Menu';

import {TabBar} from './components/index';

const {Navigator, Screen} = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Navigator initialRouteName="Feed" tabBar={props => <TabBar {...props} />}>
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
      <Screen name="Menu" component={Menu} />
    </Navigator>
  );
};

export default MainNavigation;
