import React from 'react';
import {TextInput} from 'react-native';
import * as stylesIndex from '_styles/../../../../styles';
import loginStyles from '../screens/Login/Login.styles.js';

const AuthField = props => {
  return (
    <TextInput
      style={loginStyles.AuthInputs}
      placeholder={props.placeholder}
      placeholderTextColor={stylesIndex.Colors.primaryColor}
    />
  );
};

export default AuthField;
