import React, {useState, useEffect} from 'react';

import {store} from '_redux/store';

import {connect} from 'react-redux';

import {fetchRequests} from './Map.actions';

import {View} from 'react-native';

import MapView, {Marker} from 'react-native-maps';
import Feather from 'react-native-vector-icons/Feather';

import {SearchBar, Options} from './components/index';
import {DropDown} from '_components/index';

import MapStyles from './Map.styles';
import {additionalColor, primaryColor} from '_styles/colors';

const MapScreen = ({requests}) => {
  const [search, setSearch] = useState('');
  const [isOpened, setOpened] = useState(false);
  const [like, setLike] = useState(false);
  const [friend, setFriend] = useState(false);
  const [range, setRange] = useState(5);
  const [types, setTypes] = useState({});

  useEffect(() => {
    store.dispatch(fetchRequests());
  }, []);

  return (
    <View style={MapStyles.container}>
      <MapView showsCompass={false} style={MapStyles.map}>
        {requests.map(({geolocation: {longitude, latitude}}) => (
          <Marker
            coordinate={{longitude, latitude}}
            key={`${longitude}-${latitude}`}
          />
        ))}
      </MapView>

      <SearchBar
        isOpened={isOpened}
        setOpened={setOpened}
        leftChild={<Feather name="search" size={20} color={primaryColor} />}
        rightChild={
          <DropDown
            icon={<Feather name="filter" color={additionalColor} size={20} />}
            isOpened={isOpened}
            setOpened={setOpened}>
            <Options
              like={like}
              setLike={setLike}
              friend={friend}
              setFriend={setFriend}
              range={range}
              setRange={setRange}
              types={types}
              setTypes={setTypes}
            />
          </DropDown>
        }
        search={search}
        setSearch={setSearch}
      />
    </View>
  );
};

const mapStateToProps = ({
  main: {
    map: {requests},
  },
}) => ({
  requests,
});

export default connect(mapStateToProps)(MapScreen);
