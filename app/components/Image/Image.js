import React from 'react';

import {Image as BasicImage, TouchableOpacity} from 'react-native';

import ImageStyles from './Image.styles';

const Image = ({source, style, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={{...ImageStyles.container, ...style}}>
      <BasicImage source={source} />
    </TouchableOpacity>
  );
};

export default Image;
