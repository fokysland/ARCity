import {StyleSheet} from 'react-native';

import {Helpers, Colors, Typography} from '_styles/index';

const style = StyleSheet.create({
  authInputs: {
    height: Helpers.verticalScale(40),
    borderColor: Colors.primaryColor,
    marginBottom: Helpers.verticalScale(20),
    borderBottomWidth: 1,
  },
  placeholder: {
    color: Colors.primaryColor,
  },
});

export default style;
