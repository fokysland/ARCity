import React, {useState, useRef, useEffect} from 'react';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from '_redux/store';

import {YellowBox} from 'react-native';

import {NavigationNativeContainer, useLinking} from '@react-navigation/native';
import RootNavigation from '_navigation/index';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?',
]);

const App = () => {
  const ref = useRef();
  const {getInitialState} = useLinking(ref, {
    prefixes: ['arcity-rn://'],
    config: {
      Feed: {
        NewARRequest: 'newRequest',
      },
    },
  });
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();
  useEffect(() => {
    const init = async () => {
      try {
        const state = await getInitialState();
        if (state) {
          setInitialState(state);
        }
        setIsReady(true);
      } catch (e) {}
    };

    init();
  }, [getInitialState]);
  if (!isReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationNativeContainer initialState={initialState} ref={ref}>
          <RootNavigation />
        </NavigationNativeContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
