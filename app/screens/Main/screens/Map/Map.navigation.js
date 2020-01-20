import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MapScreen from './Map.screen';
import ViewArticle from '_screens/Main/screens/ViewArticle/ViewArticle';
import ViewRequest from '_screens/Main/screens/ViewRequest/ViewRequest';
import NewRequest from '_screens/Main/screens/NewRequest/NewRequest';
import NewRequestPicker from '_screens/Main/screens/NewRequestPicker/NewRequestPicker';
import NewARRequest from '_screens/Main/screens/NewARRequest/NewARRequest';

const {Navigator, Screen} = createStackNavigator();

const MapNavigation = () => {
  return (
    <Navigator initialRouteName="Map">
      <Screen name="Map" component={MapScreen} options={{headerShown: false}} />
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

export default MapNavigation;
