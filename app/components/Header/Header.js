import React from 'react';

import {Text} from 'react-native';

import HeaderStyles from './Header.styles';

const Header = ({
  text,
  style = {},
  bold = false,
  size = 16,
  left = false,
  right = false,
  center = false,
}) => {
  return (
    <Text
      style={{
        ...HeaderStyles.font(bold, size),
        ...HeaderStyles.align({left, right, center}),
        ...style,
      }}>
      {text}
    </Text>
  );
};

export default Header;
