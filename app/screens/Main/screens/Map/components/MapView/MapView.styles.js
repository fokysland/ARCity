import {StyleSheet} from 'react-native';

import {Helpers, Colors, Typography} from '_styles/index';

const style = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    bottom: Helpers.verticalScale(-30),
  },
});

export default style;
