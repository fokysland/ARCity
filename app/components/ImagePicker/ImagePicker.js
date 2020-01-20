import React from 'react';

import {View} from 'react-native';
import Picker from 'react-native-image-crop-picker';

import {Header} from '_components/index';

import ImagePickerStyles from './ImagePicker.styles';

const ImagePicker = ({containerStyle, text = 'Фото', textStyle, setUri}) => {
  const handleClick = async () => {
    try {
      const image = await Picker.openPicker({
        cropping: true,
        width: 1200,
        height: 1200,
        cropperCircleOverlay: true,
        freeStyleCropEnabled: false,
        showCropGuidelines: false,
      });
      setUri({uri: image.path, ...image});
    } catch (e) {}
  };
  return (
    <View
      style={[ImagePickerStyles.container, containerStyle]}
      onTouchEnd={handleClick}>
      <Header text={text} primaryColor size={14} style={textStyle} />
    </View>
  );
};

export default ImagePicker;
