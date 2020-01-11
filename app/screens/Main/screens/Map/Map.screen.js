import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/Feather';

import {View} from 'react-native';
import MapView from 'react-native-maps';
import {SearchBar} from 'react-native-elements';

import MapStyles from './Map.styles';
import {primaryColor} from '_styles/colors';

const MapScreen = () => {
  const [search, setSearch] = useState('');
  return (
    <View style={MapStyles.viewStyle}>
      <SearchBar
        value={search}
        onChangeText={setSearch}
        searchIcon={<Icon name="search" size={20} color={primaryColor} />}
        containerStyle={MapStyles.searchContainer}
        inputContainerStyle={MapStyles.searchInputContainer}
        inputStyle={MapStyles.searchInput}
        placeholder="Поиск"
        placeholderTextColor={primaryColor}
        leftIconContainerStyle={MapStyles.leftContainer}
      />
      <View style={MapStyles.mapContainer}>
        <MapView style={MapStyles.map} showsCompass={false} />
      </View>
    </View>
  );
};

export default MapScreen;
