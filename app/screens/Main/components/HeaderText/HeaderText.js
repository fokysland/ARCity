import React from 'react';

import {TouchableOpacity} from 'react-native';
import {Header} from '_components/index';

import HeaderTextStyles from './HeaderText.styles';

import LeftArrow from '_assets/images/leftArrow.svg';

const HeaderText = ({text, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={HeaderTextStyles.container}
      activeOpacity={0.5}>
      <LeftArrow />
      <Header
        text={text}
        style={HeaderTextStyles.header}
        primaryColor
        size={18}
      />
    </TouchableOpacity>
  );
};

export default HeaderText;
