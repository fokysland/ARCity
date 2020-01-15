import {StyleSheet} from 'react-native';
import {Helpers} from '_styles/index';

const styles = StyleSheet.create({
  dropDown: {
    width: Helpers.scaleSize(185),
    height: Helpers.verticalScale(345),
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
});

export default styles;
