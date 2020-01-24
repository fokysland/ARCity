import React from 'react';

import {store} from '_redux/store';
import {connect} from 'react-redux';
import {setEmail, setPassword, login} from './Login.actions';

import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';

import Image from 'react-native-fast-image';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {AuthField} from '_screens/AuthFlow/Auth/components';

import loginStyles from './Login.styles';

const logo = require('_assets/images/ARCity_logo.png');
const background = require('_assets/images/nycBackground.png');

const LoginScreen = ({email, password, navigation}) => {
  return (
    <ImageBackground source={background} style={loginStyles.nycBack}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        contentContainerStyle={loginStyles.awareChild}>
        <View style={loginStyles.logoContainer}>
          <Image source={logo} style={loginStyles.arcityIcon} />
          <Text style={loginStyles.arcityLabel}>ARCity</Text>
        </View>

        <AuthField
          placeholder="Email"
          style={loginStyles.input}
          value={email}
          onChange={newEmail => store.dispatch(setEmail(newEmail))}
        />
        <AuthField
          placeholder="Пароль"
          style={loginStyles.input}
          value={password}
          onChange={newPassword => store.dispatch(setPassword(newPassword))}
          password={true}
        />

        <TouchableOpacity
          style={loginStyles.loginButton}
          underlayColor="#000"
          activeOpacity={0.8}
          onPress={() => {
            store.dispatch(login(email, password));
          }}>
          <Text style={loginStyles.loginText}>Войти</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={loginStyles.gotoRegContainer}
          onPress={() => navigation.navigate('Registration')}>
          <Text style={loginStyles.gotoReg}>Не зарегистрированы?</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

const mapStateToProps = ({
  auth: {
    login: {email, password},
  },
}) => {
  return {email, password};
};

export default connect(mapStateToProps)(LoginScreen);
