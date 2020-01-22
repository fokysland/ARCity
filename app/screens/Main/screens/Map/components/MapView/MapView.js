import React, {useCallback} from 'react';

import {useFocusEffect} from '@react-navigation/native';

import {Keyboard} from 'react-native';

import {store} from '_redux/store';
import {fetchPosition, fetchRequests} from '../../Map.actions';
import {connect} from 'react-redux';

import BasicMapView, {Marker} from 'react-native-maps';

import MapViewStyles from './MapView.styles';
import {mapConfig} from './Map.config';

import PickerIcon from '_assets/images/picker.svg';

const MapView = ({requests, navigation, position}) => {
  useFocusEffect(
    useCallback(() => {
      store.dispatch(fetchRequests());
      store.dispatch(fetchPosition());
    }, []),
  );
  return (
    <BasicMapView
      initialRegion={{...position, latitudeDelta: 0.01, longitudeDelta: 0.01}}
      onPress={() => Keyboard.dismiss()}
      showsCompass={false}
      style={MapViewStyles.map}
      showsUserLocation={true}
      showsMyLocationButton={false}
      customMapStyle={mapConfig}>
      {requests.map(({uuid, geolocation: {longitude, latitude}}) => (
        <Marker
          coordinate={{longitude, latitude}}
          onPress={() =>
            navigation.navigate('ViewRequest', {
              requestId: uuid,
            })
          }
          key={`${longitude}-${latitude}-${(Math.random() * 100).toFixed(3)}`}>
          <PickerIcon />
        </Marker>
      ))}
    </BasicMapView>
  );
};

const mapStateToProps = ({
  main: {
    map: {requests, position},
  },
}) => ({
  requests,
  position,
});

export default connect(mapStateToProps)(MapView);
