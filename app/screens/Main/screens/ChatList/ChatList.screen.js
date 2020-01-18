import React from "react";

import { ChatItem } from "./components/index"

import { FlatList } from 'react-native';


const ChatList = ({ChatList}) => {
    return (
        <>
            <FlatList
                data={ChatList}
                renderItem={({ item }) => <ChatItem
                    avatar={item.avatar}
                    dialogName={item.dialogName} 
                    dialogDesctiption={item.dialogDesctiption} 
                    time={item.time} 
                    notifcationCount={item.notifcationCount} />}
            />

        </>

    );
}

export default ChatList;