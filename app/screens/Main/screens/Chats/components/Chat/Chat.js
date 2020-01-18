import React from 'react';

import ChatItemStyles from './Chat.styles';
import {Header} from '_components/index';
import {View, Image, TouchableOpacity} from 'react-native';

const Chat = ({
  avatar,
  dialogName,
  lastMessage,
  time,
  notificationCount,
  onPress,
}) => {
  return (
    <TouchableOpacity underlayColor="#000" activeOpacity={0.8}>
      <View style={ChatItemStyles.mainContainer}>
        <View style={ChatItemStyles.avatarAndChatInfoContainer}>
          <Image source={avatar} style={ChatItemStyles.tempAvatar} />
          <View style={ChatItemStyles.chatNameContainer}>
            <Header
              text={dialogName}
              style={ChatItemStyles.chatName}
              numberOfLines={1}
            />
            <Header
              text={lastMessage}
              style={ChatItemStyles.lastMessage}
              numberOfLines={2}
            />
          </View>
        </View>
        <View style={ChatItemStyles.timeAndNotificationContainer}>
          <Header text={time} style={ChatItemStyles.time} />
          {notificationCount > 0 ? (
            <View style={ChatItemStyles.newMessagesCount}>
              <Header
                text={notificationCount}
                style={ChatItemStyles.notificationCount}
              />
            </View>
          ) : null}
        </View>
      </View>
      <View style={ChatItemStyles.splitter} />
    </TouchableOpacity>
  );
};

export default Chat;
