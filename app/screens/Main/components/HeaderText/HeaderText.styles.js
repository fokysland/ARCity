import {StyleSheet} from 'react-native';

import {Helpers, Colors, Typography} from '_styles/index';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    ...Typography.FONT_SEMIBOLD,
    marginLeft: Helpers.scaleSize(23),
  },
});

export default style;
