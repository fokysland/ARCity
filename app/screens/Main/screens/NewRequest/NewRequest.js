import React, {useEffect} from 'react';

import {getCategoriesWithText} from '_utils/categoties';
import {
  clearNewRequest,
  postRequest,
  setCategory,
  setDescription,
  setName,
  setPosition,
  setUri,
} from '_screens/Main/screens/NewRequest/NewRequest.actions';
import {store} from '_redux/store';
import {connect} from 'react-redux';

import useTabBar from '_hooks/useTabBar';

import {TouchableOpacity, Text, Picker} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {CustomPicker} from '_components/index';
import {Location} from './components';

import NewRequestStyles from './NewRequest.styles';

const NewRequest = ({
  uri,
  category,
  position,
  name,
  description,
  navigation,
}) => {
  useTabBar(false);
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      contentContainerStyle={NewRequestStyles.container}>
      <CustomPicker
        width={300}
        height={300}
        text="Фото"
        pickerStyle={NewRequestStyles.picker}
        uri={uri}
        setUri={newUri => store.dispatch(setUri(newUri))}
      />
      <TextInput
        placeholder="Как меня назовешь?"
        placeholderTextColor={NewRequestStyles.placeholder.color}
        style={NewRequestStyles.nameInput}
        value={name}
        onChange={newName => store.dispatch(setName(newName))}
      />
      <Location
        setLocation={newPosition => store.dispatch(setPosition(newPosition))}
        location={position}
        navigation={navigation}
      />
      <Picker
        style={NewRequestStyles.select}
        selectedValue={category}
        itemStyle={NewRequestStyles.item}
        onValueChange={value => store.dispatch(setCategory(value))}>
        {getCategoriesWithText().map(cat => (
          <Picker.Item key={cat.text} label={cat.text} value={cat.type} />
        ))}
      </Picker>
      <TextInput
        style={NewRequestStyles.descriptionTextInput}
        multiline={true}
        placeholder="Расскажи обо мне немного больше"
        value={description}
        onChange={newDescription =>
          store.dispatch(setDescription(newDescription))
        }
      />
      <TouchableOpacity
        style={NewRequestStyles.sendRequest}
        underlayColor="#000"
        activeOpacity={0.8}
        onPress={() => {
          store.dispatch(
            postRequest({name, position, category, uri, description}),
          );
          store.dispatch(clearNewRequest());
          navigation.navigate('Feed');
        }}>
        <Text style={NewRequestStyles.sendButtonText}>Опубликуй меня!</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = ({
  main: {
    newRequest: {uri, category, position, name, description},
  },
}) => ({
  uri,
  category,
  position,
  name,
  description,
});

export default connect(mapStateToProps)(NewRequest);
