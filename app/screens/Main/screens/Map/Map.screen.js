import React from 'react';
import {View, StatusBar} from 'react-native';

import {MapView} from './components/index';

import MapStyles from './Map.styles';

import useTabBar from '_hooks/useTabBar';

const MapScreen = ({navigation}) => {
  useTabBar(true);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={MapStyles.container}>
        <MapView navigation={navigation} />
      </View>
    </>
  );
};

export default MapScreen;
