import React from 'react';

import {store} from '_redux/store';
import {connect} from 'react-redux';
import {setEmail, setPassword, login} from './Login.actions';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {AuthField} from '_screens/AuthFlow/Auth/components';

import loginStyles from './Login.styles';

const logo = require('_assets/images/ARCity_logo.png');
const background = require('_assets/images/nycBackground.png');

const LoginScreen = ({email, password}) => {
  return (
    <ImageBackground source={background} style={loginStyles.nycBack}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        contentContainerStyle={loginStyles.awareChild}>
        <View>
          <View style={loginStyles.logoContainer}>
            <Image source={logo} style={loginStyles.arcityIcon} />
            <Text style={loginStyles.arcityLabel}>ARCity</Text>
          </View>

          <View style={loginStyles.authContainer}>
            <AuthField
              placeholder="Email"
              value={email}
              onChange={newEmail => store.dispatch(setEmail(newEmail))}
            />
            <AuthField
              placeholder="Пароль"
              value={password}
              onChange={newPassword => store.dispatch(setPassword(newPassword))}
            />
          </View>

          <TouchableOpacity
            style={loginStyles.loginButton}
            underlayColor="#000"
            activeOpacity={0.8}
            onPress={() => store.dispatch(login(email, password))}>
            <Text style={loginStyles.loginText}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={loginStyles.gotoRegContainer}>
            <Text style={loginStyles.gotoReg}>Не зарегистрированы?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

const mapStateToProps = ({auth: {login: email, password}}) => ({
  email,
  password,
});

export default connect(mapStateToProps)(LoginScreen);
