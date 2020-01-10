import React, {useState} from 'react';

import {View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {createIconSet} from 'react-native-vector-icons';

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
      />

      <MapScreen />
    </View>
  );
};

export default MapNavigation;
