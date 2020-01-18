import {StyleSheet} from 'react-native';

import {Helpers, Colors, Typography} from '_styles/index';

const style = StyleSheet.create({
  gmapsIcon: {
    width: Helpers.scaleSize(25),
    height: Helpers.verticalScale(26),
  },
  text: {
    ...Typography.FONT_REGULAR,
  },
  container: {
    marginBottom: Helpers.verticalScale(5),
    display: 'flex',
    flexDirection: 'row',
    width: Helpers.scaleSize(190),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default style;
