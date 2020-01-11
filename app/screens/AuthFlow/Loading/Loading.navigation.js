import React, {useEffect} from 'react';

import LoadingScreen from './Loading.screen';

import {store} from '_redux/store';
import {sync} from '_api/auth.api';

const LoadingNavigation = () => {
  useEffect(() => {
    const toSync = async () => {
      const res = await sync();
      if (res.reauth) {
        store.dispatch();
      }
    };

    toSync();
  }, []);
  return <LoadingScreen />;
};

export default LoadingNavigation;
