import React, {useState, useRef, useEffect} from 'react';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from '_redux/store';

import {NavigationNativeContainer, useLinking} from '@react-navigation/native';
import RootNavigation from '_navigation/index';

const App = () => {
  // const ref = useRef();
  // const {getInitialState} = useLinking(ref, {
  //   prefixes: ['arcity-rn://'],
  // });
  // const [isReady, setIsReady] = useState(false);
  // const [initialState, setInitialState] = useState();
  // useEffect(() => {
  //   const init = async () => {
  //     try {
  //       const state = await getInitialState();
  //       if (state) {
  //         setInitialState(state);
  //       }
  //       setIsReady(true);
  //     } catch (e) {}
  //   };
  //
  //   init();
  // }, [getInitialState]);
  // if (!isReady) {
  //   return null;
  // }
  //<NavigationNativeContainer initialState={initialState} ref={ref}>
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
