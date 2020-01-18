import React from 'react';

import {store} from '_redux/store';

import {ImagePicker} from '_components/index';
import {Image, TouchableOpacity} from 'react-native';

import CustomPickerStyles from './CustomPicker.styles';

const CustomPicker = ({
  uri,
  setUri,
  pickerStyle,
  photoStyle,
  text = 'Фото',
  height = 210,
  width = 210,
}) => {
  if (!uri) {
    return (
      <ImagePicker
        containerStyle={[
          CustomPickerStyles.picker({width, height}),
          pickerStyle,
        ]}
        setUri={newUri => store.dispatch(setUri(newUri))}
        text={text}
      />
    );
  } else {
    return (
      <TouchableOpacity onPress={() => store.dispatch(setUri({}))}>
        <Image
          source={{uri}}
          style={[CustomPickerStyles.picker({width, height}), photoStyle]}
        />
      </TouchableOpacity>
    );
  }
};

export default CustomPicker;
