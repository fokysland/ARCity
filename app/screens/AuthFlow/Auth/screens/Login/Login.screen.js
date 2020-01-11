import React, {useState} from 'react';

import {TouchableOpacity, View, Text} from 'react-native';

import {store} from '_redux/store';
import {getTokens, goToMain} from '_redux/global/actions';

const LoginScreen = () => {
  const [error, setError] = useState('');
  const onPress = async () => {
    try {
      await store.dispatch(getTokens('test', 'test'));
      store.dispatch(goToMain());
    } catch (e) {
      setError(e && e.message);
    }
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{error}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text>Hey</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
