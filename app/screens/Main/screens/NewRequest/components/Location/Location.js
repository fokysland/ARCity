import React from 'react';

import {Image, View} from 'react-native';

import {Header} from '_components/index';

import LocationStyles from './Location.styles';

const googleMapsIcon = require('_assets/images/GMaps.png');

const Location = ({setLocation, location}) => {
  const handleClick = () => {};
  return (
    <View style={LocationStyles.container} onTouchEnd={handleClick}>
      <Header text="Геопозиция" size={14} style={LocationStyles.text} />
      {location ? (
        <Header text={location.address} size={14} style={LocationStyles.text} />
      ) : null}
      <Image source={googleMapsIcon} style={LocationStyles.gmapsIcon} />
    </View>
  );
};

export default Location;
