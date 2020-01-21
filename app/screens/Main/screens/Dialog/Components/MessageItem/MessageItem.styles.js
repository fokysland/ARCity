import {StyleSheet} from 'react-native';

import {Helpers, Typography} from '_styles/index';

const style = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: Helpers.verticalScale(8),
  },
  bottomMarginForLast: {
    marginBottom: Helpers.verticalScale(2),
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: Helpers.scaleSize(7),
    marginRight: Helpers.scaleSize(9),
    width: Helpers.scaleSize(30),
  },
  avatar: {
    width: Helpers.scaleSize(30),
    height: Helpers.scaleSize(30),
    borderRadius: Helpers.scaleSize(15),
    alignSelf: 'flex-end',
  },
  frameContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: Helpers.scaleSize(10),
  },
  time: {
    alignSelf: 'flex-end',
    fontSize: Helpers.scaleSize(10),
    color: '#ccc',
    marginHorizontal: Helpers.scaleSize(7),
  },
});

export default style;
