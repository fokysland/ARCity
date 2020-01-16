import React from 'react';

import {store} from '_redux/store';
import {connect} from 'react-redux';
import {setUri} from '_screens/AuthFlow/Auth/screens/Registration/Registration.actions';

import {ImagePicker} from '_components/index';
import {Image, TouchableOpacity} from 'react-native';

import CustomPickerStyles from './CustomPicker.styles';

const CustomPicker = ({uri}) => {
  if (!uri.uri) {
    return (
      <ImagePicker
        containerStyle={CustomPickerStyles.picker}
        setUri={newUri => store.dispatch(setUri(newUri))}
        text="Фото"
      />
    );
  } else {
    return (
      <TouchableOpacity onPress={() => store.dispatch(setUri({}))}>
        <Image
          source={{
            uri: uri.uri,
          }}
          style={CustomPickerStyles.picker}
        />
      </TouchableOpacity>
    );
  }
};

const mapStateToProps = ({
  auth: {
    register: {uri},
  },
}) => ({
  uri,
});

export default connect(mapStateToProps)(CustomPicker);
