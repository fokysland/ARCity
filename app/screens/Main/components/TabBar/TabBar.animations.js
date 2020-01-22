import {Animated, Easing} from 'react-native';

import styles, {
  ACTION_BUTTONS_BOTTOM_POSITION,
  ACTION_BUTTONS_TOP_POSITION,
  AR_RIGHT_POSITION,
  AR_MID_POSITION,
  PHOTO_LEFT_POSITION,
  PHOTO_MID_POSITION,
  CROSS_CLOSED_ROTATION,
  CROSS_OPENED_ROTATION,
  CROSS_ANIMATION_TIME_MS,
} from './TabBar.styles';

//animation constants
const TAB_BAR_SLIDE_TIME_MS = 300;
const TAB_BAR_VISIBLE_POSITION_OFFSET = 0;
const TAB_BAR_HIDDEN_POSITION_OFFSET =
  styles.container.height + styles.container.bottom  + styles.createButtonImage.height;

export const getTabBarAnimations = () => {
  //animated values
  const TabBarOffsetY = new Animated.Value(1);

  //animation config
  const slideInAnimation = Animated.timing(TabBarOffsetY, {
    toValue: 1,
    duration: TAB_BAR_SLIDE_TIME_MS,
    easing: Easing.inOut(Easing.ease),
    useNativeDriver: true,
  });

  const slideOutAnimation = Animated.timing(TabBarOffsetY, {
    toValue: 0,
    duration: TAB_BAR_SLIDE_TIME_MS,
    easing: Easing.inOut(Easing.ease),
    useNativeDriver: true,
  });

  const getTabBarTranslate = () => {
    return TabBarOffsetY.interpolate({
      inputRange: [0, 1],
      outputRange: [
        TAB_BAR_HIDDEN_POSITION_OFFSET,
        TAB_BAR_VISIBLE_POSITION_OFFSET,
      ],
    });
  };

  const slideIn = () => {
    slideInAnimation.start();
  };

  const slideOut = () => {
    slideOutAnimation.start();
  };

  return {
    getTabBarTranslate,
    slideIn,
    slideOut,
  };
};
/////////////////////////////////////////////
//ACTION BUTTON

export const getActionsAnimations = setActionsActive => {
  const actionsAnimatedValue = new Animated.Value(0);

  const openAnimation = Animated.timing(actionsAnimatedValue, {
    toValue: 1,
    duration: CROSS_ANIMATION_TIME_MS,
    easing: Easing.inOut(Easing.ease),
    useNativeDriver: true,
  });
  const closeAnimation = Animated.timing(actionsAnimatedValue, {
    toValue: 0,
    duration: CROSS_ANIMATION_TIME_MS,
    easing: Easing.inOut(Easing.ease),
    useNativeDriver: true,
  });

  const getActionsYTranslation = () => {
    return actionsAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [
        ACTION_BUTTONS_BOTTOM_POSITION,
        ACTION_BUTTONS_TOP_POSITION,
      ],
    });
  };

  const getPhotoButtonXTranslate = () => {
    return actionsAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [PHOTO_MID_POSITION, PHOTO_LEFT_POSITION],
    });
  };

  const getARButtonXTranslate = () => {
    return actionsAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [AR_MID_POSITION, AR_RIGHT_POSITION],
    });
  };

  const getActionButtonsOpacity = () => {
    return actionsAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
  };

  const open = () => {
    openAnimation.start();
  };

  const close = () => {
    closeAnimation.start(() => setActionsActive(false));
  };

  return {
    getActionsYTranslation,
    getPhotoButtonXTranslate,
    getARButtonXTranslate,
    getActionButtonsOpacity,
    open,
    close,
  };
};

/////////////////////////////////////////////
//CROSS

export const getCrossAnimations = () => {
  const crossAnimatedValue = new Animated.Value(0);

  const rotateOpened = Animated.timing(crossAnimatedValue, {
    toValue: 1,
    duration: CROSS_ANIMATION_TIME_MS,
    easing: Easing.inOut(Easing.ease),
    useNativeDriver: true,
  });
  const rotateClosed = Animated.timing(crossAnimatedValue, {
    toValue: 0,
    duration: CROSS_ANIMATION_TIME_MS,
    easing: Easing.inOut(Easing.ease),
    useNativeDriver: true,
  });

  const getCrossRotation = () => {
    return crossAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [CROSS_CLOSED_ROTATION, CROSS_OPENED_ROTATION],
    });
  };

  const rotateIn = () => {
    rotateOpened.start();
  };

  const rotateOut = () => {
    rotateClosed.start();
  };

  return {
    getCrossRotation,
    rotateIn,
    rotateOut,
  };
};
