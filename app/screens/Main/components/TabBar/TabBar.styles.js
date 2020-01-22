import {StyleSheet} from 'react-native';

import {Helpers, Colors, Typography} from '_styles/index';

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: Helpers.verticalScale(30),
    alignSelf: 'center',
    justifyContent: 'center',
    height: Helpers.scaleSize(80),
    width: Helpers.scaleSize(375),
  },
  left: {
    position: 'absolute',
    left: 0,
    width: Helpers.scaleSize(150),
    height: Helpers.scaleSize(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: Helpers.scaleSize(35),
    paddingRight: Helpers.scaleSize(20),
  },
  right: {
    position: 'absolute',
    right: 0,
    width: Helpers.scaleSize(150),
    height: Helpers.scaleSize(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: Helpers.scaleSize(20),
    paddingRight: Helpers.scaleSize(35),
  },
  createButtonContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: Helpers.verticalScale(-25),
  },
  createButtonImage: {
    width: Helpers.scaleSize(55),
    height: Helpers.scaleSize(55),
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoRequestButtonContainer: {
    zIndex: 10,
    position: 'absolute',
    top: Helpers.verticalScale(-25),
    alignSelf: 'center',
  },
  photoRequestButton: {
    width: Helpers.scaleSize(75),
    height: Helpers.scaleSize(75),
  },
  arRequestButtonContainer: {
    zIndex: 10,
    position: 'absolute',
    top: Helpers.verticalScale(-25),
    alignSelf: 'center',
  },
  arRequestButton: {
    zIndex: 10,
    width: Helpers.scaleSize(75),
    height: Helpers.scaleSize(75),
  },
});

export const PHOTO_LEFT_POSITION = Helpers.scaleSize(-33);
export const PHOTO_MID_POSITION = 0;
export const AR_RIGHT_POSITION = Helpers.scaleSize(33);
export const AR_MID_POSITION = 0;

export const ACTION_BUTTONS_BOTTOM_POSITION = 0;
export const ACTION_BUTTONS_TOP_POSITION = Helpers.verticalScale(-60);

export const CROSS_ANIMATION_TIME_MS = 300;
export const CROSS_CLOSED_ROTATION = '0deg';
export const CROSS_OPENED_ROTATION = '45deg';

export default style;
