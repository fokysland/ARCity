import React from 'react';

import {
  postRequest,
  setDescription,
  setName,
  setPosition,
  setUri,
} from '_screens/Main/screens/NewRequest/NewRequest.actions';
import {connect} from 'react-redux';
import {store} from '_redux/store';

import useTabBar from '_hooks/useTabBar';

import {View, TouchableOpacity, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import NewARRequestStyles from './NewARRequest.styles';

const NewARRequest = ({uri, name, description, navigation}) => {
  useTabBar();
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      contentContainerStyle={NewARRequestStyles.container}>
      <TouchableOpacity style={NewARRequestStyles.picker}>
        <Text style={NewARRequestStyles.pickerText}>Фото</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Как меня назовешь?"
        placeholderTextColor={NewARRequestStyles.placeholder.color}
        style={NewARRequestStyles.nameInput}
        value={name}
        onChange={newName => store.dispatch(setName(newName))}
      />
      <TextInput
        style={NewARRequestStyles.descriptionTextInput}
        multiline={true}
        value={description}
        placeholder="Расскажи обо мне немного больше"
        onChange={newDescription =>
          store.dispatch(setDescription(newDescription))
        }
      />
      <TouchableOpacity
        style={NewARRequestStyles.sendRequest}
        underlayColor="#000"
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('Feed');
        }}>
        <Text style={NewARRequestStyles.sendButtonText}>Опубликуй меня!</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = ({
  main: {
    newARRequest: {uri, position, name, description},
  },
}) => ({
  uri,
  position,
  name,
  description,
});

export default connect(mapStateToProps)(NewARRequest);
