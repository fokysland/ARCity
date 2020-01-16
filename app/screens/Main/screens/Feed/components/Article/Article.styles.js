import {StyleSheet} from 'react-native';

import {Helpers, Colors, Typography} from '_styles/index';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  left: {
    borderWidth: 1,
    paddingHorizontal: Helpers.scaleSize(20),
    paddingVertical: Helpers.verticalScale(23),
    height: Helpers.verticalScale(190),
    width: Helpers.scaleSize(90),
  },
  right: {
    borderWidth: 1,
    paddingHorizontal: Helpers.scaleSize(20),
    paddingVertical: Helpers.verticalScale(23),
  },
});

export default style;
