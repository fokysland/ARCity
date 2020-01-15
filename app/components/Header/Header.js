import React from 'react';

import {Text} from 'react-native';

import HeaderStyles from './Header.styles';

const Header = ({text, style = {}, bold = false, size = 16}) => {
  return (
    <Text
      style={{
        ...HeaderStyles.font(bold, size),
        ...style,
      }}>
      {text}
    </Text>
  );
};

export default Header;
