import React from 'react';

import {View, TouchableOpacity} from 'react-native';

import {Header, DropDown} from '_components/index';

import NewRequestStyles from './NewRequest.styles';

const NewRequestScreen = () => {
  return (
    <View>
      <Header text="Как меня назовешь?" bold />
      <View style={NewRequestStyles.group}>
        <Header text="Геопозиция" />
      </View>
      <View style={NewRequestStyles.group}>
        <Header text="Что я?" />
        <DropDown />
      </View>
      <View style={NewRequestStyles.description}>
        <View style={NewRequestStyles.descriptionTitle}>
          <View style={[NewRequestStyles.line, NewRequestStyles.left]} />
          <Header size={11} style={NewRequestStyles.descriptionHeader} />
          <View style={[NewRequestStyles.line, NewRequestStyles.right]} />
        </View>
      </View>
      <TouchableOpacity style={NewRequestStyles.button}>
        Опубликуй меня!
      </TouchableOpacity>
    </View>
  );
};

export default NewRequestScreen;
