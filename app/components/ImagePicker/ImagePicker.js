import React from 'react';

import {View} from 'react-native';

import ImagePicker from 'react-native-image-picker';

import ImagePickerStyles from './ImagePicker.styles';

const options = {
  title: 'select aaa',
    
};

const ImagePicker = ({uri, setUri}) => {
  return <View style={ImagePickerStyles.container} />;
};

export default ImagePicker;
