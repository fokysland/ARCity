import {StyleSheet} from 'react-native';

import {Helpers, Typography} from '_styles/index';

const styles = StyleSheet.create({
  font: (bold, size) => ({
    fontSize: Helpers.scaleSize(size),
    ...(bold ? Typography.FONT_SEMIBOLD : Typography.FONT_MEDIUM),
  }),
  align: ({left, right, center}) => ({
    textAlign: left ? 'left' : right ? 'right' : center ? 'center' : 'left',
  }),
});

export default styles;
