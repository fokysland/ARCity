import React, {useState} from 'react';

import {View, TouchableOpacity, Linking, Image} from 'react-native';

import FastImage from 'react-native-fast-image';

import {connect} from 'react-redux';

import {TabBarItem} from '_screens/Main/components';

import TabStyles from './TabBar.styles';

const tabBarBackground = require('_assets/images/tabBarContainer.png');
const button = require('_assets/images/createButton.png');
const arButton = require('_assets/images/arButton.png');
const photoButton = require('_assets/images/photoButton.png');

const TabBar = ({state, navigation, isVisible}) => {
  const [isOpened, setOpened] = useState(false);
  if (!isVisible) {
    return <></>;
  }
  return (
    <>
      <Image style={TabStyles.tabBar} source={tabBarBackground} />
      <View style={TabStyles.container}>
        <View style={TabStyles.left}>
          <TabBarItem
            routeName="Feed"
            navigation={navigation}
            index={state.index}
          />
          <TabBarItem
            routeName="Map"
            navigation={navigation}
            index={state.index}
          />
        </View>
        <View style={TabStyles.right}>
          <TabBarItem
            routeName="Profile"
            navigation={navigation}
            index={state.index}
          />
          <TabBarItem
            routeName="Menu"
            navigation={navigation}
            index={state.index}
          />
        </View>
      </View>
      {isOpened ? (
        <View style={TabStyles.buttons}>
          <TouchableOpacity
            style={TabStyles.button}
            onPress={() => {
              navigation.navigate('NewRequest');
              setOpened(!isOpened);
            }}>
            <Image source={photoButton} />
          </TouchableOpacity>
          <TouchableOpacity
            style={TabStyles.button}
            onPress={() => {
              Linking.openURL('arcity-ar://newRequest');
              navigation.navigate('NewARRequest');
              setOpened(!isOpened);
            }}>
            <Image source={arButton} />
          </TouchableOpacity>
        </View>
      ) : null}

      <TouchableOpacity
        style={TabStyles.centralButton}
        onPress={() => setOpened(!isOpened)}>
        <Image source={button} />
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
