import React from 'react';

import {connect} from 'react-redux';
import {store} from '_redux/store';
import {setPosition} from '../NewRequest/NewRequest.actions';
import useTabBar from '_hooks/useTabBar';

import {View, Image, Keyboard, TouchableOpacity, Text} from 'react-native';
import MapView from 'react-native-maps';
import {SearchBar} from '../../components/index';

import NewRequestPickerStyles from './NewRequestPicker.styles';

const pickerIcon = require('_assets/images/picker.png');

const NewRequestPicker = ({navigation, route, position}) => {
  useTabBar();
  return (
    <View style={NewRequestPickerStyles.container}>
      <MapView
        initialRegion={position}
        style={NewRequestPickerStyles.map}
        showsCompass={false}
        onPress={() => Keyboard.dismiss()}
        onRegionChange={region => store.dispatch(setPosition(region))}
      />
      <SearchBar withFilter={false} />
      <TouchableOpacity
        onPress={() => navigation.navigate('NewRequest')}
        style={NewRequestPickerStyles.button}>
        <Text style={NewRequestPickerStyles.buttonText}>Всё верно</Text>
      </TouchableOpacity>
      <View style={NewRequestPickerStyles.markerContainer} pointerEvents="none">
        <Image source={pickerIcon} style={NewRequestPickerStyles.marker} />
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
