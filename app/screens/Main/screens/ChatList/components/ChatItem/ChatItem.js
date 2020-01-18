import React from "react";

import ChatItemStyles from "./ChatItem.styles";
import { Header } from '_components/index';
import { View, Image, TouchableOpacity } from 'react-native';



const ChatItem = ({ avatar, dialogName, dialogDesctiption, time, notifcationCount, onPress }) => {
    return (
        <TouchableOpacity
            underlayColor="#000"
            activeOpacity={0.8}>

            <View style={ChatItemStyles.mainContainer}>
                <View style={ChatItemStyles.avatarAndChatInfoContainer}>
                    <Image source={avatar} style={ChatItemStyles.tempAvatar} />
                    <View style={ChatItemStyles.chatNameContainer}>
                        <Header text={dialogName} style={ChatItemStyles.chatName} numberOfLines={2}></Header>
                        <Header text={dialogDesctiption} style={ChatItemStyles.Desctiption} numberOfLines={2} ></Header>
                    </View>
                </View>
                <View style={ChatItemStyles.timeAndNotifcationContainer}>
                    <Header text={time} style={ChatItemStyles.time} />
                    {
                        notifcationCount > 0 ? (
                            <View style={ChatItemStyles.newMessagesCount}>
                                <Header text={notifcationCount} style={ChatItemStyles.notifcationCount} />
                            </View>
                        ) : (
                                null
                            )
                    }

                </View>
            </View>
            <View style={ChatItemStyles.splitter} />
        </TouchableOpacity>

    );
}

export default ChatItem;
