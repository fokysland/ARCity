import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import FeedScreen from './Feed.screen';
import ViewArticle from '../ViewArticle/ViewArticle';
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
      <Screen name="ViewArticle" component={ViewArticle} />
    </Navigator>
  );
};

export default FeedNavigation;
