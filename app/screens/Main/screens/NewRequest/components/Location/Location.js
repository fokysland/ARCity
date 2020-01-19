import React from 'react';

import {Image, TouchableOpacity, View} from 'react-native';

import {Header} from '_components/index';

import LocationStyles from './Location.styles';

const googleMapsIcon = require('_assets/images/GMaps.png');

const Location = ({setLocation, location, navigation}) => {
  const handleClick = () => {
    navigation.navigate('NewRequestPicker');
  };
  return (
    <TouchableOpacity style={LocationStyles.container} onPress={handleClick}>
      <Header text="Геопозиция" size={14} style={LocationStyles.text} />
      {location ? (
        <Header
          text={location.longitude}
          size={14}
          style={LocationStyles.text}
        />
      ) : null}
      <Image source={googleMapsIcon} style={LocationStyles.gmapsIcon} />
    </TouchableOpacity>
  );
};

export default Location;
