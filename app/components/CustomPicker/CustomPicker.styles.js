import {StyleSheet} from 'react-native';

import {Helpers, Colors, Typography} from '_styles/index';

const style = StyleSheet.create({
  picker: ({width, height}) => ({
    width: Helpers.scaleSize(width),
    height: Helpers.scaleSize(height),
    borderRadius: 15,
    resizeMode: 'cover',
  }),
});

export default style;
