import React from 'react';
import {TextInput} from 'react-native';

import AuthFieldStyles from './AuthField.styles';

const AuthField = ({placeholder, onChange, value, style}) => {
  return (
    <TextInput
      style={[AuthFieldStyles.authInputs, style]}
      placeholder={placeholder}
      placeholderTextColor={AuthFieldStyles.placeholder.color}
      onChange={onChange}
      value={value}
      spellCheck={false}
      underlineColorAndroid="transparent"
    />
  );
};

export default AuthField;
