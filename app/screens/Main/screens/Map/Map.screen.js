import React from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
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
