import React from 'react';

import {TouchableOpacity} from 'react-native';

import TabBarItemStyles from './TabBarItem.styles';

import FeedIcon from '_assets/images/feed.svg';
import MapIcon from '_assets/images/map.svg';
import ProfileIcon from '_assets/images/profile.svg';
import MenuIcon from '_assets/images/menu.svg';
import {additionalColor, primaryColor} from '_styles/colors';

const mapRouteToIcon = {
  Feed: i => (
    <FeedIcon style={{color: i === 0 ? primaryColor : additionalColor}} />
  ),
  Map: i => (
    <MapIcon style={{color: i === 1 ? primaryColor : additionalColor}} />
  ),
  Profile: i => (
    <ProfileIcon style={{color: i === 2 ? primaryColor : additionalColor}} />
  ),
  Menu: i => (
    <MenuIcon style={{color: i === 3 ? primaryColor : additionalColor}} />
  ),
};

const TabBarItem = ({routeName, navigation, index}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(routeName);
      }}
      style={TabBarItemStyles.container}
      hitSlop={{top: 10, right: 15, bottom: 10, left: 15}}>
      {mapRouteToIcon[routeName](index)}
    </TouchableOpacity>
  );
};

export default TabBarItem;
