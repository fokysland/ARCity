import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import authStyles from './Auth.styles.js';
import * as stylesIndex from '_styles/index.js';
import AuthField from './Components/AuthField.js';

const req1 = require('../../assets/images/ARCity_logo.png');
const req2 = require('../../assets/images/nycBackground.png');

const AuthScreen = () => {
  return (
    <ImageBackground source={req2} style={authStyles.nycBack}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        style={authStyles.awareView}
        contentContainerStyle={authStyles.awareChild}>
        <View style={authStyles.mainContainer}>
          <View style={authStyles.LogoContainer}>
            <Image source={req1} style={authStyles.arcityIcon} />
            <Text style={authStyles.arcityLabel}>ARCity</Text>
          </View>

          <View style={authStyles.authContainer}>
            <AuthField placeholder="Email" />
            <AuthField placeholder="Пароль" />
          </View>

          <View style={authStyles.loginButtonContainer}>
            <TouchableOpacity
              style={authStyles.loginButton}
              underlayColor="#000">
              <Text style={authStyles.loginText}>LOG IN</Text>
            </TouchableOpacity>
          </View>
          <View style={authStyles.gotoRegContainer}>
            <TouchableOpacity>
              <Text style={authStyles.gotoReg}>Не зарегестрированы?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default AuthScreen;
