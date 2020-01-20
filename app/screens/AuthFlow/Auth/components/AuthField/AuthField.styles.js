import {StyleSheet} from 'react-native';

import {Helpers, Colors, Typography} from '_styles/index';

const style = StyleSheet.create({
  authInputs: {
    height: Helpers.verticalScale(32.5),
    color: Colors.primaryColor,
    borderColor: Colors.primaryColor,
    marginBottom: Helpers.verticalScale(25),
    borderBottomWidth: 1.5,
    paddingBottom: Helpers.verticalScale(6),
    width: '100%',
    padding: 0,
  },
  placeholder: {
    color: Colors.primaryColor,
  },
});

export default style;
