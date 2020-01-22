import React, {useEffect} from 'react';

import LoadingScreen from './Loading.screen';

import {store} from '_redux/store';
import {goToAuth, goToMain} from '_redux/global/actions';

import {sync} from '_api/auth.api';

const LoadingNavigation = ({isLoading}) => {
  useEffect(() => {
    if (isLoading) {
      const doSync = async () => {
        const res = await sync();
        if (res.reauth || res.error) {
          store.dispatch(goToAuth());
        } else {
          store.dispatch(goToMain());
        }
      };
      doSync();
    }
  }, [isLoading]);
  return <LoadingScreen />;
};

export default LoadingNavigation;
