import React from 'react';
import {TextInput} from 'react-native';
import * as stylesIndex from '_styles/index.js';
import authStyles from '../Auth.styles.js';

const AuthField = props => {
  return (
    <TextInput
      style={authStyles.AuthInputs}
      placeholder={props.placeholder}
      placeholderTextColor={stylesIndex.Colors.primaryColor}
    />
  );
};

export default AuthField;
