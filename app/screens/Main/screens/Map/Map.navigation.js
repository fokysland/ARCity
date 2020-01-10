import React, {useState} from 'react';

import {View} from 'react-native';
import {SearchBar} from 'react-native-elements';

import MapScreen from './Map.screen';

import MapStyles from './Map.styles';

const MapNavigation = () => {
  const [search, setSearch] = useState('');
  return (
    <View style={MapStyles.viewStyle}>
      <SearchBar
        value={search}
        onChangeText={setSearch}
        containerStyle={MapStyles.containerStyle}
        inputStyle={MapStyles.searchInputStyle}
        placeholder="Поиск"
      />
      <MapScreen />
    </View>
  );
};

export default MapNavigation;
