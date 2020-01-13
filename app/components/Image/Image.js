import React from 'react';

import {View, Image as BasicImage} from 'react-native';

import ImageStyles from './Image.styles';

const Image = ({source, style}) => {
  return (
    <View style={{...ImageStyles.container, ...style}}>
      <BasicImage source={source} />
    </View>
  );
};

export default Image;
