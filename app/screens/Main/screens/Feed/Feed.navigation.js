import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import FeedScreen from './Feed.screen';
import ViewArticle from '../ViewArticle/ViewArticle';
import ViewRequest from '../ViewRequest/ViewRequest';
import NewRequest from '../NewRequest/NewRequest';
import NewARRequest from '../NewARRequest/NewARRequest';
import NewRequestPicker from '../NewRequestPicker/NewRequestPicker';

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
      <Screen name="ViewRequest" component={ViewRequest} />
      <Screen name="NewRequest" component={NewRequest} />
      <Screen
        name="NewRequestPicker"
        component={NewRequestPicker}
        options={{headerShown: false}}
      />
      <Screen name="NewARRequest" component={NewARRequest} />
    </Navigator>
  );
};

export default FeedNavigation;
