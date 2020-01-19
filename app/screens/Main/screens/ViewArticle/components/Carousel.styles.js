import {StyleSheet} from 'react-native';

import {Helpers, Colors, Typography} from '_styles/index';

const style = StyleSheet.create({
  container: {
    height: Helpers.verticalScale(253),
  },
  image: {
    height: '100%',
    width: Helpers.verticalScale(253),
    borderRadius: 10,
  },
  item: {
    width: Helpers.verticalScale(253),
  },
  slider: {
    width: Helpers.getWidth(),
  },
});

export default style;
