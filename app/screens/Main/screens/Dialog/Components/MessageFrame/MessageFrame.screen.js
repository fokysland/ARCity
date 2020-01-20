import React from "react";

import MessageFrameStyles from "./MessageFrame.styles";
import { Header } from "_components";
import { View } from 'react-native';


const MessageFrame = ({ isMy, isLast, msgContent }) => {


    let broderType = () => {
        if (isLast) {
            if (isMy) {
                return(MessageFrameStyles.myLastMessage);
            }
            else {
                return(MessageFrameStyles.someonesLastMessage);
            }
        }
        else {
            return(MessageFrameStyles.notLastMessage);
        }
    }
    
    return (
        <View style={[MessageFrameStyles.messageFrameBackground, broderType()]}>
            <Header text={msgContent.text} style={MessageFrameStyles.msgText} />
        </View>
    );
}

export default MessageFrame;