import React from 'react';

import {Image, TouchableOpacity} from 'react-native';

import {Header} from '_components/index';

import LocationStyles from './Location.styles';

const googleMapsIcon = require('_assets/images/GMaps.png');

const Location = ({setLocation, location, navigation}) => {
  const handleClick = () => {
    navigation.navigate('NewRequestPicker');
  };
  return (
    <TouchableOpacity style={LocationStyles.container} onPress={handleClick}>
      {location ? (
        <Header
          text={location.longitude}
          size={14}
          style={LocationStyles.text}
        />
      ) : (
        <Header text="Геопозиция" size={14} style={LocationStyles.text} />
      )}
      <Image source={googleMapsIcon} style={LocationStyles.gmapsIcon} />
    </TouchableOpacity>
  );
};

export default Location;
