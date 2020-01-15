import React from 'react';
import {TextInput} from 'react-native';
import * as stylesIndex from '_styles/index.js';
import registrationStyles from '../Registration.styles.js';

const AuthField = props => {
  return (
    <TextInput
      style={registrationStyles.AuthInputs}
      placeholder={props.placeholder}
      placeholderTextColor={stylesIndex.Colors.primaryColor}
    />
  );
};

export default AuthField;
