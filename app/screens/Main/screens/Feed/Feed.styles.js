import {StyleSheet} from 'react-native';

import {Helpers, Colors, Typography} from '_styles/index';

const style = StyleSheet.create({
  feed: {
    height: '100%',
    alignSelf: 'center',
  },
  list: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 1,
  },
});

export default style;