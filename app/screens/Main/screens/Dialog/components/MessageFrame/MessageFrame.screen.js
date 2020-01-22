import React from 'react';

import MessageFrameStyles from './MessageFrame.styles';
import {Header} from '_components';
import {View} from 'react-native';

const MessageFrame = ({isMy, isLast, msgContent}) => {
  const borderType = () => {
    if (isLast) {
      if (isMy) {
        return MessageFrameStyles.myLastMessage;
      } else {
        return MessageFrameStyles.someonesLastMessage;
      }
    } else {
      return MessageFrameStyles.notLastMessage;
    }
  };

  return (
    <View style={[MessageFrameStyles.messageFrameBackground, borderType()]}>
      <Header text={msgContent.text} style={MessageFrameStyles.msgText} />
    </View>
  );
};

export default MessageFrame;
