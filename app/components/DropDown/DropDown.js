import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import DropDownStyle from './DropDown.styles';

const DropDown = ({icon, children, isOpened, setOpened}) => {
  return isOpened ? (
    <>
      <View
        style={DropDownStyle.overlay}
        onTouchStart={() => setOpened(false)}
      />
      <View style={DropDownStyle.dropDown}>{children}</View>
    </>
  ) : (
    <TouchableOpacity
      style={DropDownStyle.button}
      onPress={() => setOpened(true)}>
      {icon}
    </TouchableOpacity>
  );
};

export default DropDown;
