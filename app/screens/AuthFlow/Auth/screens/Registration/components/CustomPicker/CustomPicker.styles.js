import {StyleSheet} from 'react-native';

import {Helpers, Colors, Typography} from '_styles/index';

const style = StyleSheet.create({
  picker: {
    width: Helpers.scaleSize(210),
    height: Helpers.scaleSize(210),
    borderRadius: 15,
    resizeMode: 'cover',
  },
});

export default style;
