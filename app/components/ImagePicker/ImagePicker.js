import React from 'react';

import {View} from 'react-native';
import  from 'react-native-image-picker';

import {Header} from '_components/index';

import ImagePickerStyles from './ImagePicker.styles';

const getOptions = title => ({
  title,
  storageOptions: {
    skipBackup: true,
    path: 'images/arcity',
  },
});

const ImagePicker = ({containerStyle, text = 'Фото', textStyle, setUri}) => {
  const handleClick = () => {
    BasicImagePicker.showImagePicker(getOptions('hey'), res => {
      if (res.uri) {
        const {uri} = res;
        setUri(uri);
      }
    });
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
