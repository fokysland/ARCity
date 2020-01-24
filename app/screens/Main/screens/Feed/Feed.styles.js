import {StyleSheet} from 'react-native';

import {Helpers, Colors, Typography} from '_styles/index';

const style = StyleSheet.create({
  feed: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    backgroundColor: Colors.designWhite,
  },
  feedContainer: {
    paddingTop: Helpers.verticalScale(20),
    alignItems: 'center',
    paddingBottom: Helpers.verticalScale(100),
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
