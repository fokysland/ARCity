import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import AuthField from '../../components/AuthField/AuthField.js';

import loginStyles from './Login.styles.js';

const logo = require('_assets/images/ARCity_logo.png');
const background = require('_assets/images/nycBackground.png');

const LoginScreen = () => {
  return (
    <ImageBackground source={background} style={loginStyles.nycBack}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        style={loginStyles.awareView}
        contentContainerStyle={loginStyles.awareChild}>
        <View>
          <View style={loginStyles.logoContainer}>
            <Image source={logo} style={loginStyles.arcityIcon} />
            <Text style={loginStyles.arcityLabel}>ARCity</Text>
          </View>

          <View style={loginStyles.authContainer}>
            <AuthField placeholder="Email" />
            <AuthField placeholder="Пароль" />
          </View>

          <View style={loginStyles.loginButtonContainer}>
            <TouchableOpacity
              style={loginStyles.loginButton}
              underlayColor="#000">
              <Text style={loginStyles.loginText}>LOG IN</Text>
            </TouchableOpacity>
          </View>
          <View style={loginStyles.gotoRegContainer}>
            <TouchableOpacity>
              <Text style={loginStyles.gotoReg}>Не зарегистрированы?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default LoginScreen;
