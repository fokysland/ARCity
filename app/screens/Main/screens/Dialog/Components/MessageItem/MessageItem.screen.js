import React from "react";

import MessageItemStyles from "./MessageItem.styles";
import { Header } from '_components';
import { View, Image } from 'react-native';
import MessageFrame from "../MessageFrame/MessageFrame.screen";


const MessageItem = ({ isMy, isLast, msgContent, time, authorAvatar }) => {
    let setAvatarShow = () => {
        if (!isMy && isLast) {
            return (<Image style={MessageItemStyles.avatar} source={authorAvatar} />);
        }
        return null;
    }

    let setMarginForLast = () => {
        if (isLast) {
            return(MessageItemStyles.bottomMarginForLast);
        }
        return null;
    }

    let setFrameAndTimePosistion = () => {
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
    }

    let setFrameAlign = () => {
        if (isMy) {
            return({justifyContent : "space-between"});
        }
    }

    return (
        <View style={[MessageItemStyles.mainContainer , setFrameAlign(), setMarginForLast()]}>
            <View style={MessageItemStyles.avatarContainer}>
                {setAvatarShow()}
            </View>
            <View style={MessageItemStyles.frameContainer}>
                {setFrameAndTimePosistion()}
            </View>


        </View>

    );
}

export default MessageItem;