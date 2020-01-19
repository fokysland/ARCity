import React from 'react';

import {View} from 'react-native';

import {MapView} from './components/index';

import {SearchBar} from '../../components/index';

import MapStyles from './Map.styles';

const MapScreen = () => {
  return (
    <View style={MapStyles.container}>
      <SearchBar />
      <MapView />
    </View>
  );
};

export default MapScreen;
