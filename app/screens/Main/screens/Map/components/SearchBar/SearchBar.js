import React from 'react';

import {connect} from 'react-redux';
import {store} from '_redux/store';
import {setOpened} from '../../Map.actions';

import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {DropDown, SearchBar as BasicSearchBar} from '_components/index';
import {Options} from '../index';

import SearchBarStyles from './SearchBar.styles';
import {additionalColor, primaryColor} from '_styles/colors';

const SearchBar = ({search, opened}) => {
  return (
    <View style={SearchBarStyles.searchBarContainer}>
      <BasicSearchBar
        leftChild={<Feather name="search" size={20} color={primaryColor} />}
        rightChild={
          <DropDown
            icon={<Feather name="filter" color={additionalColor} size={20} />}
            isOpened={opened}
            setOpened={() => store.dispatch(setOpened())}>
            <Options />
          </DropDown>
        }
        search={search}
        onChange={}
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

const mapStateToProps = ({
  main: {
    map: {search},
  },
}) => ({
  search,
  opened,
});

export default connect(mapStateToProps)(SearchBar);
