import {Platform} from 'react-native';

// families
export const FONT_REGULAR = Platform.select({
  android: {
    fontFamily: 'Montserrat-Regular',
  },
  ios: {
    fontFamily: 'Montserrat-Regular',
  },
});

export const FONT_MEDIUM = Platform.select({
  android: {
    fontFamily: 'Montserrat-Medium',
  },
  ios: {
    fontFamily: 'Montserrat-Medium',
  },
});

export const FONT_SEMIBOLD = Platform.select({
  android: {
    fontFamily: 'Montserrat-Medium',
  },
  ios: {
    fontFamily: 'Montserrat-Medium',
  },
});

export const FONT_BOLD = Platform.select({
  android: {
    fontFamily: 'Montserrat-Bold',
  },
  ios: {
    fontFamily: 'Montserrat-Bold',
  },
});

export const EXTRA_BOLD = Platform.select({
  android: {
    fontFamily: 'Montserrat-ExtraBold',
  },
  ios: {
    fontFamily: 'Montserrat-ExtraBold',
  },
});

export const FONT_LIGHT = Platform.select({
  android: {
    fontFamily: 'Montserrat-Light',
  },
  ios: {
    fontFamily: 'Montserrat-Light',
  },
});
