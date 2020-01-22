import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import allScreens from '_screens/Main/components/allScreens';
import FeedScreen from './Feed.screen';

import {Header} from '_components/index';

import FeedStyles from './Feed.styles';

const {Navigator, Screen} = createStackNavigator();

const FeedNavigation = () => {
  return (
    <Navigator initialRouteName="Feed">
      <Screen
        name="Feed"
        component={FeedScreen}
        options={{
          headerTitle: () => (
            <Header
              text="Лента"
              primaryColor
              size={18}
              style={FeedStyles.header}
            />
          ),
        }}
      />
      {allScreens().map(item => item)}
    </Navigator>
  );
};

export default FeedNavigation;
