import {StyleSheet} from 'react-native';

import {Helpers, Colors, Typography} from '_styles/index';

const style = StyleSheet.create({
  container: {
    ...Helpers.boxShadow('#000', {width: 0, height: 0}, 15, 0.05),
    borderRadius: 10,
    paddingVertical: Helpers.verticalScale(20),
    paddingHorizontal: Helpers.scaleSize(18),
    flexDirection: 'row',
    width: Helpers.scaleSize(340),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.articleBackground,
    marginVertical: Helpers.verticalScale(10),
  },
  left: {
    height: Helpers.verticalScale(190),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  right: length => ({
    paddingHorizontal: Helpers.scaleSize(5),
    height: Helpers.verticalScale(190),
    width: Helpers.scaleSize(length ? 210 : 300),
  }),
  title: {
    ...Typography.FONT_SEMIBOLD,
    color: Colors.designBlack,
  },
  text: {
    ...Typography.FONT_REGULAR,
    color: Colors.designBlack,
    height: '70%',
  },
  photo: {
    width: Helpers.verticalScale(95),
    height: Helpers.verticalScale(90),
    borderRadius: 10,
  },
  link: {
    position: 'absolute',
    bottom: 0,
    ...Typography.FONT_REGULAR,
  },
});

export default style;
