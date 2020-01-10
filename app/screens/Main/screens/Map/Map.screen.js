import React from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const MapScreen = () => (
  <View style={styles.container}>
    <MapView style={styles.map} />
  </View>
);

export default MapScreen;
