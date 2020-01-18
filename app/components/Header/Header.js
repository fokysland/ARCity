import React from 'react';

import {Text} from 'react-native';

import HeaderStyles from './Header.styles';

const Header = ({
  text,
  style = {},
  bold = false,
  size = 16,
  primaryColor = true,
  additionalColor = false,
  secondaryColor = false,
  attractionColor = false,
  numberOfLines,
}) => {
  return (
    <Text
      style={{
        ...HeaderStyles.font(bold, size),
        ...HeaderStyles.color({
          primaryColor,
          additionalColor,
          secondaryColor,
          attractionColor,
        }),
        ...style,
      }}
      numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
};

export default Header;
