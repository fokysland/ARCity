import React from 'react';

import {store} from '_redux/store';
import {connect} from 'react-redux';
import {
  register,
  setEmail,
  setName,
  setPassword,
  setRepeatedPassword,
  setSurname,
  setUri,
} from './Registration.actions';

import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {AuthField} from '_screens/AuthFlow/Auth/components';
import {CustomPicker} from '_components/index';

import registrationStyles from './Registration.styles';

const background = require('_assets/images/nycBackground.png');

const RegistrationScreen = ({
  email,
  name,
  surname,
  password,
  repeatedPassword,
  uri,
  navigation,
}) => {
  return (
    <ImageBackground source={background} style={registrationStyles.background}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        contentContainerStyle={registrationStyles.container}>
        <View style={registrationStyles.logoContainer}>
          <Text style={registrationStyles.arcityLabel}>ARCity</Text>
        </View>

        <CustomPicker
          uri={uri}
          setUri={newUri => store.dispatch(setUri(newUri))}
          pickerStyle={registrationStyles.picker}
          containerStyle={registrationStyles.photoContainer}
          height={210}
          width={210}
        />
        <AuthField
          placeholder="Email"
          value={email}
          onChange={newEmail => store.dispatch(setEmail(newEmail))}
        />
        <AuthField
          placeholder="Имя"
          value={name}
          onChange={newName => store.dispatch(setName(newName))}
        />
        <AuthField
          placeholder="Фамилия"
          value={surname}
          onChange={newSurname => store.dispatch(setSurname(newSurname))}
        />
        <AuthField
          placeholder="Пароль"
          value={password}
          onChange={newPassword => store.dispatch(setPassword(newPassword))}
        />
        <AuthField
          placeholder="Повторите пароль"
          value={repeatedPassword}
          onChange={newRepeatedPassword =>
            store.dispatch(setRepeatedPassword(newRepeatedPassword))
          }
        />

        <TouchableOpacity
          style={registrationStyles.signupButton}
          activeOpacity={0.8}
          onPress={() => {
            store.dispatch(
              register({
                name,
                surname,
                email,
                password,
                uri,
              }),
            );
          }}>
          <Text style={registrationStyles.signupText}>Присоединиться</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

const mapStateToProps = ({
  auth: {
    register: {email, name, surname, password, repeatedPassword, uri},
  },
}) => ({email, name, surname, password, repeatedPassword, uri});

export default connect(mapStateToProps)(RegistrationScreen);
