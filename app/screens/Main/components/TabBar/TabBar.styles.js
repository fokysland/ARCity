import {StyleSheet} from 'react-native';

import {Helpers, Colors, Typography} from '_styles/index';

const style = StyleSheet.create({
  tabBar: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: Helpers.verticalScale(17),
    width: Helpers.scaleSize(375),
  },
  container: {
    height: 80,
    paddingHorizontal: Helpers.scaleSize(40),
    paddingVertical: Helpers.verticalScale(11),
    width: '100%',
    position: 'absolute',
    bottom: Helpers.verticalScale(17),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Helpers.scaleSize(100),
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: Helpers.verticalScale(55),
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Helpers.scaleSize(100),
    alignItems: 'center',
  },
});

export default style;
