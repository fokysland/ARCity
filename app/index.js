import React from 'react';

import {Provider} from 'react-redux';
import {store} from '_redux/store';

import {NavigationNativeContainer} from '@react-navigation/native';

import RootNavigation from '_navigation/index';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationNativeContainer>
        <RootNavigation />
      </NavigationNativeContainer>
    </Provider>
  );
};

export default App;
