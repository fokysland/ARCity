import React from 'react';
import {TextInput} from 'react-native';

import AuthFieldStyles from './AuthField.styles';

const AuthField = ({placeholder}) => {
  return (
    <TextInput
      style={AuthFieldStyles.authInputs}
      placeholder={placeholder}
      placeholderTextColor={AuthFieldStyles.placeholder.color}
      scrollEnabled={false}
    />
  );
};

export default AuthField;
