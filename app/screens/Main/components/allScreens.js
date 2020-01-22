import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ViewArticle from '_screens/Main/screens/ViewArticle/ViewArticle';
import ViewRequest from '_screens/Main/screens/ViewRequest/ViewRequest';
import NewRequest from '_screens/Main/screens/NewRequest/NewRequest';
import NewRequestPicker from '_screens/Main/screens/NewRequestPicker/NewRequestPicker';
import NewARRequest from '_screens/Main/screens/NewARRequest/NewARRequest';
import HeaderText from '_screens/Main/components/HeaderText/HeaderText';

const {Screen} = createBottomTabNavigator();

const allScreens = () => [
  <Screen
    name="ViewArticle"
    component={ViewArticle}
    key={1}
    options={({navigation}) => {
      return {
        headerTitle: () => (
          <HeaderText onPress={() => navigation.goBack()} text="Статья" />
        ),
        headerLeft: null,
      };
    }}
  />,
  <Screen
    name="ViewRequest"
    component={ViewRequest}
    key={2}
    options={({navigation}) => {
      return {
        headerTitle: () => (
          <HeaderText onPress={() => navigation.goBack()} text="Идея" />
        ),
        headerLeft: null,
      };
    }}
  />,
  <Screen
    name="NewRequest"
    component={NewRequest}
    key={3}
    options={({navigation}) => {
      return {
        headerTitle: () => (
          <HeaderText
            onPress={() => navigation.goBack()}
            text="Создание идеи"
          />
        ),
        headerLeft: null,
      };
    }}
  />,
  <Screen
    name="NewRequestPicker"
    component={NewRequestPicker}
    options={{headerShown: false}}
    key={3}
  />,
  <Screen
    name="NewARRequest"
    component={NewARRequest}
    key={4}
    options={({navigation}) => {
      return {
        headerTitle: () => (
          <HeaderText
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{name: 'Feed'}],
              })
            }
            text="Создание идеи"
          />
        ),
        headerLeft: null,
      };
    }}
  />,
];

export default allScreens;
