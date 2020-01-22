import React, {useState} from 'react';
import {MessageFrame} from './components/index';
import {MessageItem} from './components/index';
import {View, FlatList, TextInput, KeyboardAvoidingView} from 'react-native';

import useTabBar from '_hooks/useTabBar';

import Feather from 'react-native-vector-icons/Feather';

import ChatStyles from './Dialog.styles';

const Lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const tmpavatar = require('_assets/images/tempavatar.png');

const clipIcon = (
  <Feather
    name="paperclip"
    size={25}
    color="grey"
    style={ChatStyles.clipIcon}
  />
);

const smileIcon = (
  <Feather name="smile" size={25} color="grey" style={ChatStyles.clipIcon} />
);

const Chat = ({
  navigation,
  route: {
    params: {chatId},
  },
}) => {
  useTabBar(false);
  const [message, setMessage] = useState('');
  return (
    <KeyboardAvoidingView behavior="padding" enabled>
      <View style={ChatStyles.mainContainer}>
        <View style={ChatStyles.flatContainer}>
          <FlatList
            style={ChatStyles.flatlist}
            data={[]}
            renderItem={({item}) => item}
          />
          <View style={ChatStyles.inputContainer}>
            {clipIcon}
            <TextInput
              style={ChatStyles.messageInput}
              placeholder="Сообщение"
              multiline={true}
              value={message}
              onChange={newMessage => setMessage(newMessage)}
            />
            {smileIcon}
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Chat;
