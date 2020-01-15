import {StyleSheet} from 'react-native';
import {Helpers, Colors, Typography} from '_styles/index';

export const SWITCH_TURNED_ON_POSITION = Helpers.scaleSize(18);
export const SWITCH_TURNED_OFF_COLOR = Colors.SWITCH_TURNED_OFF;
export const SWITCH_TURNED_ON_COLOR = Colors.SWITCH_TURNED_ON;

export const BUTTON_HIT_SLOP = {
  top: Helpers.scaleSize(20),
  right: Helpers.scaleSize(20),
  bottom: Helpers.scaleSize(20),
  left: Helpers.scaleSize(20),
};

const styles = StyleSheet.create({
  container: {
    width: Helpers.scaleSize(32),
    height: Helpers.scaleSize(17),
    borderRadius: Helpers.scaleSize(14),
    backgroundColor: Colors.PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    position: 'absolute',
    top: Helpers.scaleSize(0.7),
    left: Helpers.scaleSize(2),
    width: Helpers.scaleSize(17),
    height: Helpers.scaleSize(17),
  },
});

export default styles;
