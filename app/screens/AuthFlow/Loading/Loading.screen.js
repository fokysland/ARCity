import React from 'react';

import {View} from 'react-native';

import LoadingStyles from './Loading.styles';
import Image from 'react-native-fast-image';

const logo = require('_assets/images/ARCity_logo.png');

const LoadingScreen = () => {
  return (
    <View style={LoadingStyles.container}>
      <Image source={logo} />
    </View>
  );
};

export default LoadingScreen;
