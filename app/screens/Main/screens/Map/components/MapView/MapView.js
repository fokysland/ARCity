import React, {useEffect} from 'react';

import {store} from '_redux/store';
import {fetchRequests} from '../../Map.actions';
import {connect} from 'react-redux';

import BasicMapView, {Marker} from 'react-native-maps';

import MapViewStyles from './MapView.styles';
import {mapConfig} from './/Map.config';

const MapView = ({requests}) => {
  useEffect(() => {
    store.dispatch(fetchRequests());
  }, []);

  return (
    <BasicMapView
      showsCompass={false}
      style={MapViewStyles.map}
      showsUserLocation={true}
      customMapStyle={mapConfig}>
      {requests.map(({geolocation: {longitude, latitude}}) => (
        <Marker
          coordinate={{longitude, latitude}}
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
