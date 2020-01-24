import React, {useEffect, useState} from 'react';

import {
  View,
  TouchableOpacity,
  Linking,
  Image,
  Animated,
  ImageBackground,
} from 'react-native';

import {connect} from 'react-redux';

import {TabBarItem} from '_screens/Main/components';

import TabStyles from './TabBar.styles';
import {
  getActionsAnimations,
  getCrossAnimations,
  getTabBarAnimations,
} from './TabBar.animations';

const tabBarBackground = require('_assets/images/tabBarContainer.png');
const centralButton = require('_assets/images/createButton.png');
const arButton = require('_assets/images/arButton.png');
const photoButton = require('_assets/images/photoButton.png');

import CrossIcon from '_assets/images/cross.svg';

const AnimatedImageBackground = Animated.createAnimatedComponent(
  ImageBackground,
);

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(
  TouchableOpacity,
);

const TabBar = ({state, navigation, isVisible}) => {
  const [actionsActive, setActionsActive] = React.useState(false);
  const [isOpened, setOpened] = useState(false);

  const [tabBarAnimations] = useState(getTabBarAnimations());
  const [actionAnimations] = useState(getActionsAnimations(setActionsActive));
  const [crossAnimations] = useState(getCrossAnimations());

  useEffect(() => {
    if (isVisible) {
      tabBarAnimations.slideIn();
    } else {
      tabBarAnimations.slideOut();
      setOpened(false);
    }
  }, [tabBarAnimations, isVisible]);

  useEffect(() => {
    if (isOpened) {
      setActionsActive(true);
      actionAnimations.open();
      crossAnimations.rotateIn();
    } else {
      actionAnimations.close();
      crossAnimations.rotateOut();
    }
  }, [actionAnimations, crossAnimations, isOpened]);

  return (
    <>
      <AnimatedImageBackground
        style={[
          TabStyles.container,
          {
            transform: [
              {
                translateY: tabBarAnimations.getTabBarTranslate(),
              },
            ],
          },
        ]}
        source={tabBarBackground}>
        <View style={TabStyles.left}>
          <TabBarItem
            navigation={navigation}
            index={state.index}
            routeName="Feed"
          />
          <TabBarItem
            navigation={navigation}
            index={state.index}
            routeName="Map"
          />
        </View>

        <View style={TabStyles.right}>
          <TabBarItem
            navigation={navigation}
            index={state.index}
            routeName="Profile"
          />
          <TabBarItem
            navigation={navigation}
            index={state.index}
            routeName="Menu"
          />
        </View>
      </AnimatedImageBackground>

      {actionsActive && (
        <AnimatedTouchableOpacity
          onPress={() => {
            navigation.navigate('NewRequest');
            setOpened(!isOpened);
          }}
          style={[
            TabStyles.photoRequestButtonContainer,
            {
              transform: [
                {
                  translateX: actionAnimations.getPhotoButtonXTranslate(),
                },
                {
                  translateY: actionAnimations.getActionsYTranslation(),
                },
              ],
              opacity: actionAnimations.getActionButtonsOpacity(),
            },
          ]}>
          <Image source={photoButton} style={TabStyles.photoRequestButton} />
        </AnimatedTouchableOpacity>
      )}

      {actionsActive && (
        <AnimatedTouchableOpacity
          style={[
            TabStyles.arRequestButtonContainer,
            {
              transform: [
                {
                  translateX: actionAnimations.getARButtonXTranslate(),
                },
                {
                  translateY: actionAnimations.getActionsYTranslation(),
                },
              ],
              opacity: actionAnimations.getActionButtonsOpacity(),
            },
          ]}
          onPress={() => {
            Linking.openURL('arcity-ar://newRequest');
            navigation.navigate('NewARRequest');
            setOpened(!isOpened);
          }}>
          <Image source={arButton} style={TabStyles.arRequestButton} />
        </AnimatedTouchableOpacity>
      )}

      <TouchableOpacity
        style={[
          TabStyles.createButtonContainer,
          {
            transform: [
              {
                translateY: tabBarAnimations.getTabBarTranslate(),
              },
            ],
          },
        ]}
        onPress={() => setOpened(!isOpened)}>
        <ImageBackground
          source={centralButton}
          style={TabStyles.createButtonImage}>
          <Animated.View
            style={{
              transform: [
                {
                  rotate: crossAnimations.getCrossRotation(),
                },
              ],
            }}>
            <CrossIcon />
          </Animated.View>
        </ImageBackground>
      </TouchableOpacity>
    </>
  );
};

const mapStateToProps = ({
  main: {
    common: {isVisible},
  },
}) => ({
  isVisible,
});

export default connect(mapStateToProps)(TabBar);
