import {StyleSheet} from 'react-native';

import {Helpers, Typography} from '_styles/index';

const styles = StyleSheet.create({
  font: (bold, size) => ({
    fontSize: Helpers.scaleSize(size),
    ...(bold ? Typography.FONT_SEMIBOLD : Typography.FONT_MEDIUM),
  }),
});

export default styles;
