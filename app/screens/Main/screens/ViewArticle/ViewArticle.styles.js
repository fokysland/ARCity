import {StyleSheet} from 'react-native';

import {Helpers, Colors, Typography} from '_styles/index';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: Helpers.scaleSize(36),
    paddingTop: Helpers.verticalScale(35),
    backgroundColor: Colors.designWhite,
  },
  title: {
    ...Typography.FONT_BOLD,
    width: '100%',
    marginTop: Helpers.verticalScale(35),
  },
  author: {
    marginTop: Helpers.verticalScale(15),
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  avatar: {
    width: Helpers.scaleSize(40),
    height: Helpers.scaleSize(40),
    borderRadius: Helpers.scaleSize(40) / 2,
  },
  name: {
    ...Typography.FONT_MEDIUM,
    marginLeft: Helpers.scaleSize(15),
  },
  text: {
    ...Typography.FONT_REGULAR,
    marginTop: Helpers.verticalScale(22),
    width: '100%',
    fontSize: 14,
  },
  controls: {
    width: '100%',
    marginTop: Helpers.verticalScale(100),
    marginBottom: Helpers.verticalScale(25),
    height: Helpers.verticalScale(45),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  share: {
    padding: 0,
    borderRadius: 10,
    width: Helpers.scaleSize(40),
    height: Helpers.scaleSize(45),
    backgroundColor: Colors.attractionColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  likes: {
    borderRadius: 10,
    paddingHorizontal: Helpers.scaleSize(20),
    paddingVertical: Helpers.verticalScale(10),
    height: Helpers.verticalScale(45),
    width: Helpers.scaleSize(120),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...Helpers.boxShadow('#000', {x: 0, y: 0}, 15, 0.1, 1),
  },
  like: {
    ...Typography.FONT_LIGHT,
    fontSize: 14,
    width: '50%',
    textAlign: 'center',
  },
  dislikes: {
    ...Typography.FONT_LIGHT,
    fontSize: 14,
    borderRadius: 10,
    paddingHorizontal: Helpers.scaleSize(20),
    paddingVertical: Helpers.verticalScale(10),
    height: Helpers.verticalScale(45),
    width: Helpers.scaleSize(120),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...Helpers.boxShadow('#000', {x: 0, y: 0}, 15, 0.1, 1),
  },
  dislike: {
    ...Typography.FONT_LIGHT,
    fontSize: 14,
    width: '50%',
    textAlign: 'center',
  },
});

export default style;
