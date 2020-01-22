import React, {useEffect} from 'react';

import {store} from '_redux/store';
import {connect} from 'react-redux';
import {fetchChats} from './Chats.actions';

import useTabBar from '_hooks/useTabBar';

import {FlatList} from 'react-native';
import {Chat} from './components/index';

import ChatsStyles from './Chats.styles';

const ChatsScreen = ({chats, navigation}) => {
  useTabBar(true);
  useEffect(() => {
    store.dispatch(fetchChats());
  }, []);
  return (
    <FlatList
      style={ChatsStyles.chats}
      data={chats}
      renderItem={({item}) => (
        <Chat
          avatar={item.avatar}
          dialogName={item.dialogName}
          lastMessage={item.lastMessage}
          time={item.time}
          notificationCount={item.notificationCount}
          id={item.id}
          onPress={() => navigation.navigate('Dialog', {})}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

const mapStateToProps = ({main: {chats}}) => {
  return {chats: chats.chats};
};

export default connect(mapStateToProps)(ChatsScreen);
