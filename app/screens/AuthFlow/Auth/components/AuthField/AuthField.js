import React from 'react';
import {TextInput} from 'react-native';

import AuthFieldStyles from './AuthField.styles';

const AuthField = ({placeholder, onChange, value}) => {
  return (
    <TextInput
      style={AuthFieldStyles.authInputs}
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
