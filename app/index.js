import React from 'react';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from '_redux/store';

import {NavigationNativeContainer} from '@react-navigation/native';
import RootNavigation from '_navigation/index';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationNativeContainer>
          <RootNavigation />
        </NavigationNativeContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
