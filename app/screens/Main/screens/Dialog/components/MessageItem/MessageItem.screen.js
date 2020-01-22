import React from 'react';

import MessageItemStyles from './MessageItem.styles';
import {Header} from '_components';
import {View} from 'react-native';
import Image from 'react-native-fast-image';
import MessageFrame from '../MessageFrame/MessageFrame.screen';

const MessageItem = ({isMy, isLast, msgContent, time, authorAvatar}) => {
  const setAvatarShow = () => {
    if (!isMy && isLast) {
      return <Image style={MessageItemStyles.avatar} source={authorAvatar} />;
    }
    return null;
  };

  const setFrameAndTimePosition = () => {
    if (isMy) {
      return (
        <>
          <Header text={time} style={MessageItemStyles.time} />
          <MessageFrame isLast={isLast} isMy={isMy} msgContent={msgContent} />
        </>
      );
    }

    return (
      <>
        <MessageFrame isLast={isLast} isMy={isMy} msgContent={msgContent} />
        <Header text={time} style={MessageItemStyles.time} />
      </>
    );
  };

  return (
    <View
      style={[
        MessageItemStyles.mainContainer,
        MessageItemStyles.setFrameAlign(isMy),
        MessageItemStyles.setMarginForLast(isLast),
      ]}>
      <View style={MessageItemStyles.avatarContainer}>{setAvatarShow()}</View>
      <View style={MessageItemStyles.frameContainer}>
        {setFrameAndTimePosition()}
      </View>
    </View>
  );
};

export default MessageItem;
