import React from 'react';
import {MessageFrame} from './Components/index';
import {MessageItem} from './Components/index';
import {View, FlatList, TextInput, KeyboardAvoidingView} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import ChatStyles from './Dialog.styles';

const Lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const tmpavatar = require('_assets/images/tempavatar.png');

let msgs = [
  {
    isMy: false,
    author: 'Someone',
    authorAvatar: tmpavatar,
    messages: [
      {
        type: 'textMessage',
        msgContent: {text: Lorem},
        time: '14:02',
        isLast: false,
      },
      {
        type: 'textMessage',
        msgContent: {text: Lorem},
        time: '14:02',
        isLast: false,
      },
      {
        type: 'textMessage',
        msgContent: {text: Lorem},
        time: '14:02',
        isLast: false,
      },
      {
        type: 'z',
        msgContent: {text: 'Hi, there'},
        time: '14:02',
        isLast: false,
      },
      {
        type: 'textMessage',
        msgContent: {text: 'Wassup?'},
        time: '14:02',
        isLast: false,
      },
    ],
  },
  {
    isMy: true,
    author: 'Another man',
    authorAvatar: null,
    messages: [
      {
        type: 'textMessage',
        msgContent: {text: 'Evetything is cool'},
        time: '14:03',
        isLast: false,
      },
    ],
  },

  {
    isMy: false,
    author: 'Another man',
    authorAvatar: tmpavatar,
    messages: [
      {
        type: 'textMessage',
        msgContent: {text: 'qwertyuiop '},
        time: '07:52',
        isLast: false,
      },
    ],
  },
];

let parsedMessages = [];

let getMessageBlocks = () => {
  msgs.forEach(msgBlock => {
    parseMessageBlock(msgBlock);
  });
};

let parseMessageBlock = msgBlock => {
  msgBlock.messages[msgBlock.messages.length - 1].isLast = true;
  msgBlock.messages.forEach(function(currentValue) {
    parsedMessages.push(
      <MessageItem
        authorAvatar={this.authorAvatar}
        isMy={this.isMy}
        style={ChatStyles.messageItem}
        isLast={currentValue.isLast}
        msgContent={currentValue.msgContent}
        time={currentValue.time}
      />,
    );
  }, msgBlock);

  console.log(parsedMessages);
};

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

const Chat = () => {
  getMessageBlocks();
  return (
    <KeyboardAvoidingView behavior="padding" enabled>
      <View style={ChatStyles.mainContainer}>
        <View style={ChatStyles.flatContainer}>
          <FlatList
            style={ChatStyles.flatlist}
            data={parsedMessages}
            renderItem={({item}) => item}
          />

          <View style={ChatStyles.inputContainer}>
            {clipIcon}
            <TextInput
              style={ChatStyles.messageInput}
              placeholder="Сообщение"
              maxLength={35}
            />
            {smileIcon}
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Chat;
