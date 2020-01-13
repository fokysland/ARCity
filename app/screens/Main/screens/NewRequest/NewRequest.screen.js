import React from 'react';

import {View} from 'react-native';

import NewRequestStyles from './NewRequest.styles';

const NewRequestScreen = () => {
  return (
    <View>
      <Image />
      <Header text="Как меня назовешь?" bold />
      <View style={NewRequestStyles.group}>
        <Header text="Геопозиция" />
      </View>
      <View style={NewRequestStyles.group}>
        <Header text="Что я?" />
        <DropDown />
      </View>
      <View style={NewRequestStyles.description}>

      </View>
    </View>
  );
};

export default NewRequestScreen;
