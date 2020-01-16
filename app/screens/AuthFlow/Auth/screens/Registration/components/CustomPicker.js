import React from 'react';

import {store} from '_redux/store';
import {connect} from 'react-redux';
import {setUri} from '../Registration.actions';

import {View} from 'react-native';

import {ImagePicker, Image} from '_components/index';

import CustomPickerStyles from './CustomPicker.styles';

const CustomPicker = ({uri}) => {
  console.log(uri);
  return (
    <View style={CustomPickerStyles.container}>
      {!uri.uri ? (
        <ImagePicker
          containerStyle={CustomPickerStyles.picker}
          setUri={newUri => store.dispatch(setUri(newUri))}
          text="Фото"
        />
      ) : (
        <Image
          source={uri}
          style={CustomPickerStyles.picker}
          onPress={() => store.dispatch(setUri({}))}
        />
      )}
    </View>
  );
};

const mapStateToProps = ({
  auth: {
    register: {uri},
  },
}) => ({
  uri,
});

export default connect(mapStateToProps)(CustomPicker);
