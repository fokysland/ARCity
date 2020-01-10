import React from 'react';

import {NavigationNativeContainer} from '@react-navigation/native';

import RootNavigation from '_navigation/index';

const App = () => {
  return (
    <NavigationNativeContainer>
      <RootNavigation />
    </NavigationNativeContainer>
  );
};

export default App;
