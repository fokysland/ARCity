import React from 'react';

import {View, TouchableOpacity, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Header, DropDown, CustomPicker, Shadow} from '_components/index';
import {Location} from './components';

import {Colors} from '_styles/index';
import NewRequestStyles from './NewRequest.styles';

import Icon from 'react-native-vector-icons/FontAwesome';

const angleIcon = (
  <Icon
    name="angle-down"
    size={30}
    color={Colors.primaryColor}
    style={NewRequestStyles.droplistOpener}
  />
);

const NewRequestScreen = ({uri, category, position}) => {
  return (
    <KeyboardAwareScrollView enableOnAndroid={true}>
      <CustomPicker
        width={300}
        height={300}
        text="Фото"
        pickerStyle={NewRequestStyles.picker}
      />

      <View style={NewRequestStyles.requestDescription}>
        <TextInput
          placeholder="Как меня назовешь?"
          placeholderTextColor={NewRequestStyles.placeholder.color}
          style={NewRequestStyles.nameInput}
        />
        <Location />
        <View style={NewRequestStyles.group}>
          <Header text="Что я?" size={14} style={NewRequestStyles.type} />
          {angleIcon}
        </View>
        <DropDown />
        <View>
          <TextInput
            style={NewRequestStyles.descriptionTextInput}
            multiline={true}
            placeholder="Расскажи обо мне немного больше"
          />
          <TouchableOpacity
            style={NewRequestStyles.sendRequest}
            underlayColor="#000"
            activeOpacity={0.8}>
            <Text style={NewRequestStyles.sendButtonText}>Опубликуй меня!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default NewRequestScreen;
