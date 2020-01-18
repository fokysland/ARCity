import {StyleSheet} from 'react-native';

import {Helpers, Typography, Colors} from '_styles/index';

const styles = StyleSheet.create({
  font: (bold, size) => ({
    fontSize: Helpers.scaleSize(size),
    ...(bold ? Typography.FONT_SEMIBOLD : Typography.FONT_MEDIUM),
  }),
  color: ({
    primaryColor,
    additionalColor,
    secondaryColor,
    attractionColor,
    black,
  }) => ({
    color: primaryColor
      ? Colors.primaryColor
      : additionalColor
      ? Colors.additionalColor
      : secondaryColor
      ? Colors.secondaryColor
      : attractionColor
      ? Colors.attractionColor
      : Colors.designBlack,
  }),
});

export default styles;
