import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {connect} from 'react-redux';
import {store} from '_redux/store';
import {setPosition} from '../NewRequest/NewRequest.actions';
import useTabBar from '_hooks/useTabBar';

import {View, Keyboard, TouchableOpacity, Text} from 'react-native';
import MapView from 'react-native-maps';

import {fetchPosition} from '_screens/Main/screens/NewRequest/NewRequest.actions';

import NewRequestPickerStyles from './NewRequestPicker.styles';
import PickerIcon from '_assets/images/picker.svg';

const NewRequestPicker = ({navigation, position}) => {
  useTabBar(false);
  useFocusEffect(
    useCallback(() => {
      store.dispatch(fetchPosition());
    }, []),
  );
  return (
    <View style={NewRequestPickerStyles.container}>
      <MapView
        initialRegion={{
          ...position,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={NewRequestPickerStyles.map}
        showsCompass={false}
        onPress={() => Keyboard.dismiss()}
        onRegionChangeComplete={region => store.dispatch(setPosition(region))}
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
