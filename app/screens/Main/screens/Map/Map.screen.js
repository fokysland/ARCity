import React from 'react';

import {View} from 'react-native';

import {MapView} from './components/index';

import MapStyles from './Map.styles';

const MapScreen = ({navigation}) => {
  return (
    <View style={MapStyles.container}>
      <MapView navigation={navigation} />
    </View>
  );
};

export default MapScreen;
