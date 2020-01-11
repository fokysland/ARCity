import React from 'react';

import {connect} from 'react-redux';

import MainNavigation from '_screens/Main/Main.navigation';
import AuthNavigation from '_screens/AuthFlow/Auth/Auth.navigation';
import LoadingNavigation from '_screens/AuthFlow/Loading/Loading.navigation';

const RootNavigation = ({isLoading, isLoggedIn}) => {
  if (isLoading) {
    return <LoadingNavigation isLoading={isLoading} />;
  }
  if (!isLoggedIn) {
    return <AuthNavigation />;
  }
  return <MainNavigation />;
};

const mapStateToProps = ({global: {properties}}) => ({
  isLoading: properties.isLoading,
  isLoggedIn: properties.isLoggedIn,
});

export default connect(mapStateToProps)(RootNavigation);
