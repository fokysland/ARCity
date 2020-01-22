import React from 'react';

import {TouchableOpacity} from 'react-native';

import Image from 'react-native-fast-image';

import {Header} from '_components/index';

import LocationStyles from './Location.styles';

const googleMapsIcon = require('_assets/images/GMaps.png');

const Location = ({position, navigation, readablePosition}) => {
  const handleClick = () => {
    navigation.navigate('NewRequestPicker');
  };
  return (
    <TouchableOpacity style={LocationStyles.container} onPress={handleClick}>
      {position ? (
        <Header text={readablePosition} size={14} style={LocationStyles.text} />
      ) : (
        <Header text="Геопозиция" size={14} style={LocationStyles.text} />
      )}
      <Image source={googleMapsIcon} style={LocationStyles.gmapsIcon} />
    </TouchableOpacity>
  );
};

export default Location;
