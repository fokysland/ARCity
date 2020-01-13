//import Animated from 'react-native-reanimated';
import {Animated, Easing} from 'react-native';

import {
  SWITCH_TURNED_ON_POSITION,
  SWITCH_TURNED_OFF_COLOR,
  SWITCH_TURNED_ON_COLOR,
} from './SwitchButton.styles';

//animation constants
const SWITCH_SLIDE_TIME_MS = 150;
const SWITCH_BACKGROUND_FADE_TIME_MS = 300;
const SWITCH_TURNED_OFF_POSITION_OFFSET = 0;
const SWITCH_TURNED_ON_POSITION_OFFSET = SWITCH_TURNED_ON_POSITION;

export const getAnimations = () => {
  const switchOffsetX = new Animated.Value(0);
  const switchBackgroundColor = new Animated.Value(0);

  //animation configs
  const turnOffSwitchAnimation = Animated.parallel([
    Animated.timing(switchOffsetX, {
      toValue: 0,
      duration: SWITCH_SLIDE_TIME_MS,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }),
    Animated.timing(switchBackgroundColor, {
      toValue: 0,
      duration: SWITCH_BACKGROUND_FADE_TIME_MS,
      easing: Easing.inOut(Easing.ease),
    }),
  ]);

  const turnOnSwitchAnimation = Animated.parallel([
    Animated.timing(switchOffsetX, {
      toValue: 1,
      duration: SWITCH_SLIDE_TIME_MS,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }),
    Animated.timing(switchBackgroundColor, {
      toValue: 1,
      duration: SWITCH_BACKGROUND_FADE_TIME_MS,
      easing: Easing.inOut(Easing.ease),
    }),
  ]);

  const getSwitchOffset = () => {
    return switchOffsetX.interpolate({
      inputRange: [0, 1],
      outputRange: [
        SWITCH_TURNED_OFF_POSITION_OFFSET,
        SWITCH_TURNED_ON_POSITION_OFFSET,
      ],
    });
  };

  const getBackgroundColor = () => {
    return switchBackgroundColor.interpolate({
      inputRange: [0, 1],
      outputRange: [SWITCH_TURNED_OFF_COLOR, SWITCH_TURNED_ON_COLOR],
    });
  };

  const turnOff = () => {
    turnOffSwitchAnimation.start();
  };
  const turnOn = () => {
    turnOnSwitchAnimation.start();
  };

  return {
    getSwitchOffset,
    getBackgroundColor,
    turnOff,
    turnOn,
  };
};
