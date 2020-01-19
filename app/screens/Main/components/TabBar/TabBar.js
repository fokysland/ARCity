import React from 'react';

import {View, TouchableOpacity, Image} from 'react-native';

import {connect} from 'react-redux';

import {TabBarItem} from '_screens/Main/components';

import TabStyles from './TabBar.styles';

const tabBarBackground = require('_assets/images/tabBarContainer.png');
const button = require('_assets/images/createButton.png');

const TabBar = ({state, descriptors, navigation, isVisible}) => {
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
            routeName="Chats"
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
      <TouchableOpacity style={TabStyles.button}>
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
