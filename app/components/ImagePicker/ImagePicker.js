import React from 'react';

import {View} from 'react-native';

import BasicImagePicker from 'react-native-image-picker';

import ImagePickerStyles from './ImagePicker.styles';

const getOptions = title => ({
  title,
});

const ImagePicker = ({uri, setUri}) => {
  const handleClick = () => {
    BasicImagePicker.showImagePicker(getOptions('hey'), res => {
      const {uri} = res;
      setUri(uri);
    });
  };
  return (
    <View style={ImagePickerStyles.container} onTouchStart={handleClick} />
  );
};

export default ImagePicker;
