import React from 'react';

import {View} from 'react-native';
import Picker from 'react-native-image-crop-picker';

import {Header} from '_components/index';

import ImagePickerStyles from './ImagePicker.styles';

const ImagePicker = ({containerStyle, text = 'Фото', textStyle, setUri}) => {
  const handleClick = async () => {
    const image = await Picker.openPicker({
      width: 210,
      height: 210,
      cropping: true,
    });
    setUri({uri: image.path});
  };
  return (
    <View
      style={[ImagePickerStyles.container, containerStyle]}
      onTouchStart={handleClick}>
      <Header text={text} primaryColor size={24} style={textStyle} />
    </View>
  );
};

export default ImagePicker;
