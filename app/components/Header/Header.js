import React from 'react';

import {Text} from 'react-native';

import HeaderStyles from './Header.styles';

const Header = ({
  text,
  style = {},
  bold = false,
  size = 16,
  primaryColor = false,
  additionalColor = false,
  secondaryColor = false,
  attractionColor = false,
  black = true,
  onPress,
}) => {
  return (
    <Text
      onPress={onPress}
      style={{
        ...HeaderStyles.font(bold, size),
        ...HeaderStyles.color({
          primaryColor,
          additionalColor,
          secondaryColor,
          attractionColor,
          black,
        }),
        ...style,
      }}>
      {text}
    </Text>
  );
};

export default Header;
