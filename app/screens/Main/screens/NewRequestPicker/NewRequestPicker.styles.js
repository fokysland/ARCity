import {StyleSheet} from 'react-native';

import {Helpers, Colors, Typography} from '_styles/index';

const style = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: Helpers.verticalScale(25),
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    bottom: Helpers.verticalScale(-30),
  },
  marker: {
    borderWidth: 1,
    width: Helpers.scaleSize(33),
    height: Helpers.verticalScale(47.5),
  },
  markerContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: Helpers.scaleSize(180),
    height: Helpers.verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primaryColor,
    borderRadius: Helpers.scaleSize(190),
  },
  buttonText: {
    ...Typography.FONT_SEMIBOLD,
    color: '#fff',
    fontSize: Helpers.scaleSize(18),
  },
});

export default style;
