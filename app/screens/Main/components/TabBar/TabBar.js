import React, {useState} from 'react';

import {View, TouchableOpacity, Image} from 'react-native';

import {connect} from 'react-redux';

import {TabBarItem} from '_screens/Main/components';

import TabStyles from './TabBar.styles';

const tabBarBackground = require('_assets/images/tabBarContainer.png');
const button = require('_assets/images/createButton.png');

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
      {isOpened ? (
        <View style={TabStyles.buttons}>
          <TouchableOpacity
            style={TabStyles.button}
            onPress={() => {
              navigation.navigate('NewRequest');
              setOpened(!isOpened);
            }}>
            <Image source={button} />
          </TouchableOpacity>
          <TouchableOpacity
            style={TabStyles.button}
            onPress={() => {
              navigation.navigate('NewARRequest');
              setOpened(!isOpened);
            }}>
            <Image source={button} />
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
