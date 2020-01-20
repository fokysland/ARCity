import {StyleSheet} from 'react-native';

import {Helpers, Colors, Typography} from '_styles/index';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: Helpers.scaleSize(36),
    paddingTop: Helpers.verticalScale(27),
    backgroundColor: Colors.designWhite,
  },
  photo: {
    height: Helpers.verticalScale(300),
    width: Helpers.verticalScale(300),
    borderWidth: 1,
    borderRadius: 10,
  },
  title: {
    ...Typography.FONT_BOLD,
    width: '100%',
    marginTop: Helpers.verticalScale(30),
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
  type: {
    ...Typography.FONT_REGULAR,
    width: '100%',
    marginTop: Helpers.verticalScale(5),
    marginBottom: Helpers.verticalScale(20),
  },
  location: {
    marginTop: Helpers.verticalScale(15),
    width: '100%',
    ...Typography.FONT_REGULAR,
  },
  decoration: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  line: {
    height: 0,
    width: Helpers.scaleSize(90),
    borderWidth: 0.7,
    borderColor: Colors.primaryColor,
    borderRadius: 10,
  },
  text: {
    ...Typography.FONT_REGULAR,
    marginTop: Helpers.verticalScale(7),
    width: '100%',
    fontSize: 14,
  },
  controls: {
    width: '100%',
    marginTop: Helpers.verticalScale(70),
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
  },
  dislike: {
    ...Typography.FONT_LIGHT,
    fontSize: 14,
    width: '50%',
    textAlign: 'center',
  },
});

export default style;
