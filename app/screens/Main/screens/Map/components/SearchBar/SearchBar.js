import React from 'react';
import SearchBarStyles from './SearchBar.styles';
import {primaryColor} from '_styles/colors';
import {SearchBar as BasicSearchBar} from '_components/index';
import {View} from 'react-native';

const SearchBar = ({
  search,
  setSearch,
  leftChild,
  rightChild,
  isOpened,
  setOpened,
}) => {
  return (
    <View style={SearchBarStyles.searchBarContainer}>
      <BasicSearchBar
        value={search}
        onChangeText={setSearch}
        leftChild={leftChild}
        rightChild={rightChild}
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
