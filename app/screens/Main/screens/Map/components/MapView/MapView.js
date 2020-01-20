import React from 'react';

import {useFocusEffect} from '@react-navigation/native';

import {Keyboard} from 'react-native';

import {store} from '_redux/store';
import {fetchRequests} from '../../Map.actions';
import {connect} from 'react-redux';

import BasicMapView, {Marker} from 'react-native-maps';

import MapViewStyles from './MapView.styles';
import {mapConfig} from './Map.config';

const MapView = ({requests, navigation}) => {
  useFocusEffect(
    React.useCallback(() => {
      store.dispatch(fetchRequests());
    }, []),
  );
  return (
    <BasicMapView
      onPress={() => Keyboard.dismiss()}
      showsCompass={false}
      style={MapViewStyles.map}
      showsUserLocation={true}
      customMapStyle={mapConfig}>
      {requests.map(({uuid, geolocation: {longitude, latitude}}) => (
        <Marker
          coordinate={{longitude, latitude}}
          onPress={() =>
            navigation.navigate('ViewRequest', {
              requestId: uuid,
            })
          }
          key={`${longitude}-${latitude}-${(Math.random() * 100).toFixed(3)}`}
        />
      ))}
    </BasicMapView>
  );
};

const mapStateToProps = ({
  main: {
    map: {requests},
  },
}) => ({
  requests,
});

export default connect(mapStateToProps)(MapView);
