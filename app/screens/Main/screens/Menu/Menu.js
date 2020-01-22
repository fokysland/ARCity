import React from 'react';

import {clear} from '_screens/Main/Main.actions';
import {store} from '_redux/store';
import {goToAuth} from '_redux/global/properties/properties.actions';

import {TouchableOpacity, View, Text} from 'react-native';

import MenuStyles from './Menu.styles';

const Menu = ({navigation}) => {
  return (
    <View style={MenuStyles.container}>
      <TouchableOpacity
        style={MenuStyles.button}
        onPress={() => {
          store.dispatch(clear());
          store.dispatch(goToAuth());
        }}>
        <Text>Выход</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
