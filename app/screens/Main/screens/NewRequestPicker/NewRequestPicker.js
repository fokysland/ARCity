import React from 'react';

import {connect} from 'react-redux';
import {store} from '_redux/store';
import {fetchReadablePosition} from '_screens/Main/screens/NewRequest/NewRequest.actions';
import useTabBar from '_hooks/useTabBar';

import {View, Keyboard, TouchableOpacity, Text} from 'react-native';
import MapView from 'react-native-maps';

import NewRequestPickerStyles from './NewRequestPicker.styles';
import PickerIcon from '_assets/images/picker.svg';

const NewRequestPicker = ({navigation, position}) => {
  useTabBar(false);
  return (
    <View style={NewRequestPickerStyles.container}>
      <MapView
        initialRegion={{
          ...position,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={NewRequestPickerStyles.map}
        showsCompass={false}
        onPress={() => Keyboard.dismiss()}
        onRegionChangeComplete={region =>
          store.dispatch(fetchReadablePosition(region))
        }
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NewRequest');
        }}
        style={NewRequestPickerStyles.button}>
        <Text style={NewRequestPickerStyles.buttonText}>Всё верно</Text>
      </TouchableOpacity>
      <View style={NewRequestPickerStyles.markerContainer} pointerEvents="none">
        <PickerIcon style={NewRequestPickerStyles.marker} />
      </View>
    </View>
  );
};

const mapStateToProps = ({
  main: {
    newRequest: {position},
  },
}) => ({position});

export default connect(mapStateToProps)(NewRequestPicker);
