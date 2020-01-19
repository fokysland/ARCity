import React from 'react';

import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {SearchBar as BasicSearchBar} from '_components/index';

import SearchBarStyles from './SearchBar.styles';
import {primaryColor} from '_styles/colors';

const SearchBar = ({search, setSearch, rightChild}) => {
  const handleChange = ({nativeEvent: {text}}) => setSearch(text);
  return (
    <View style={SearchBarStyles.searchBarContainer}>
      <BasicSearchBar
        leftChild={<Feather name="search" size={20} color={primaryColor} />}
        rightChild={rightChild}
        search={search}
        onChange={handleChange}
        outerContainerStyle={SearchBarStyles.searchContainer}
        innerContainerStyle={SearchBarStyles.searchInputContainer}
        inputStyle={SearchBarStyles.searchInput}
        placeholder="Поиск"
        placeholderTextColor={primaryColor}
        leftIconContainerStyle={SearchBarStyles.leftContainer}
      />
    </View>
  );
};

export default SearchBar;
