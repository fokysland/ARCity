import React from 'react';

import {
  postRequest,
  setDescription,
  setName,
  setPosition,
  setUri,
} from '_screens/Main/screens/NewRequest/NewRequest.actions';
import {store} from '_redux/store';
import {connect} from 'react-redux';

import useTabBar from '_hooks/useTabBar';

import {View, TouchableOpacity, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Header, DropDown, CustomPicker} from '_components/index';
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

const NewRequest = ({
  uri,
  category,
  position,
  name,
  description,
  navigation,
}) => {
  useTabBar();
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

      <View style={NewRequestStyles.requestDescription}>
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
              navigation.navigate('Feed');
            }}>
            <Text style={NewRequestStyles.sendButtonText}>Опубликуй меня!</Text>
          </TouchableOpacity>
        </View>
      </View>
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
