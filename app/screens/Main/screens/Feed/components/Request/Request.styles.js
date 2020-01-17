import {StyleSheet} from 'react-native';

import {Helpers, Colors, Typography} from '_styles/index';

const style = StyleSheet.create({
  container: {
    ...Helpers.boxShadow('#000', {width: 0, height: 0}, 15, 0.05),
    width: Helpers.scaleSize(340),
    height: Helpers.verticalScale(105),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.articleBackground,
    marginVertical: Helpers.verticalScale(10),
    borderRadius: 10,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Helpers.scaleSize(290),
    height: Helpers.verticalScale(72),
  },
  left: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  right: {
    width: Helpers.scaleSize(290 - 60 - 22),
    height: Helpers.verticalScale(72),
    paddingHorizontal: Helpers.scaleSize(5),
    justifyContent: 'space-between',
    paddingLeft: 0,
  },
  photo: {
    width: Helpers.verticalScale(72),
    height: Helpers.verticalScale(72),
    borderRadius: 10,
  },
  text: {
    ...Typography.FONT_REGULAR,
    color: Colors.designBlack,
  },
  title: {
    ...Typography.FONT_SEMIBOLD,
    color: Colors.designBlack,
  },
});

export default style;
