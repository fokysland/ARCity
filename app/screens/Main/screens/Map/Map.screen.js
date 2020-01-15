import React from 'react';

import {View} from 'react-native';

import {SearchBar, MapView} from './components/index';

import MapStyles from './Map.styles';

const MapScreen = () => {
  return (
    <View style={MapStyles.container}>
      <MapView />
      <SearchBar />
    </View>
  );
};

export default MapScreen;
