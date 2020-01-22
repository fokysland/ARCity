import {StyleSheet} from 'react-native';

import {Helpers, Typography} from '_styles/index';

const style = StyleSheet.create({
  messageFrameBackground: {
    backgroundColor: '#fff',
    maxWidth: Helpers.scaleSize(220),
    height: 'auto',
  },
  someonesLastMessage: {
    borderTopLeftRadius: Helpers.scaleSize(15),
    borderTopRightRadius: Helpers.scaleSize(15),
    borderBottomRightRadius: Helpers.scaleSize(15),
  },
  myLastMessage: {
    borderTopLeftRadius: Helpers.scaleSize(15),
    borderTopRightRadius: Helpers.scaleSize(15),
    borderBottomLeftRadius: Helpers.scaleSize(15),
  },
  notLastMessage: {
    borderRadius: Helpers.scaleSize(15),
  },
  msgText: {
    marginHorizontal: Helpers.scaleSize(15),
    marginVertical: Helpers.verticalScale(11),
    ...Typography.FONT_REGULAR,
    fontSize: Helpers.scaleSize(12),
  },
});

export default style;
