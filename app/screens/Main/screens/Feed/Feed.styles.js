import {StyleSheet} from 'react-native';

import {Helpers, Colors, Typography} from '_styles/index';

const style = StyleSheet.create({
  feed: {
    height: '100%',
    alignSelf: 'center',
  },
  list: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 1,
  },
  header: {
    ...Typography.FONT_SEMIBOLD,
  },
});

export default style;
