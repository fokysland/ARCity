import React, {useCallback} from 'react';

import {useFocusEffect, useRoute} from '@react-navigation/native';

import {
  postRequest,
  setDescription,
  setName,
  clearNewARRequest,
  fetchPosition,
} from '_screens/Main/screens/NewARRequest/NewARRequest.actions';
import {connect} from 'react-redux';
import {store} from '_redux/store';

import useTabBar from '_hooks/useTabBar';

import {TouchableOpacity, Text, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import NewARRequestStyles from './NewARRequest.styles';

const NewARRequest = ({position, name, description, navigation}) => {
  useFocusEffect(
    useCallback(() => {
      store.dispatch(fetchPosition());
    }, []),
  );
  useTabBar(false);
  const {
    params: {type: arCategory, uri: arUri},
  } = useRoute();

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      contentContainerStyle={NewARRequestStyles.container}>
      <Image
        source={{uri: 'file:///storage/emulated/0/' + arUri}}
        style={NewARRequestStyles.picker}
      />
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
          store.dispatch(
            postRequest({
              title: name,
              description,
              uri: arUri,
              category: arCategory,
              position,
            }),
          );
          store.dispatch(clearNewARRequest());
          navigation.reset({
            index: 0,
            routes: [{name: 'Feed'}],
          });
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
