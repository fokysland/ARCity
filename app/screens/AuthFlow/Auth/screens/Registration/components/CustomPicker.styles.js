import {StyleSheet} from 'react-native';

import {Helpers, Colors, Typography} from '_styles/index';

const style = StyleSheet.create({
  container: {
    width: Helpers.scaleSize(210),
    height: Helpers.scaleSize(210),
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
});

export default style;
