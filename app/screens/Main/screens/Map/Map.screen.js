import React, {useState} from 'react';

import {View} from 'react-native';
import MapView from 'react-native-maps';
import {SearchBar} from 'react-native-elements';

import {primaryColor} from '_styles/colors';

import MapStyles from './Map.styles';

const MapScreen = () => {
  const {
    viewStyle,
    searchContainerStyle,
    searchInputStyle,
    mapContainer,
    map,
  } = MapStyles;
  const [search, setSearch] = useState('');
  return (
    <View style={viewStyle}>
      <SearchBar
        value={search}
        onChangeText={setSearch}
        containerStyle={searchContainerStyle}
        inputStyle={searchInputStyle}
        placeholder="Поиск"
        placeholderTextColor={primaryColor}
      />
      <View style={mapContainer}>
        <MapView style={map} showsCompass={false} />
      </View>
    </View>
  );
};

export default MapScreen;
