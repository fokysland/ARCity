import React, {useEffect, useState} from 'react';

import io from 'socket.io-client';
import {serverAddress} from '_services/network/server.config';

import {store} from '_redux/store';
import {connect} from 'react-redux';
import {fetchRequest} from './ViewRequest.actions';
import useTabBar from '_hooks/useTabBar';

import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Image from 'react-native-fast-image';
import {Header} from '_components/index';

import ViewRequestStyles from './ViewRequest.styles';

import LikeIcon from '_assets/images/like.svg';
import DislikeIcon from '_assets/images/dislike.svg';
import ShareIcon from '_assets/images/share.svg';
import CrossIcon from '_assets/images/cross.svg';
import {
  increaseLikes,
  increaseDislikes,
  share,
} from '_screens/Main/screens/ViewRequest/ViewRequest.actions';
import {Colors} from '_styles/index';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const ViewRequest = ({
  navigation,
  title,
  name,
  photo,
  text,
  likes,
  dislikes,
  authorId,
  authorPhoto,
  location,
  type,
  route: {
    params: {requestId},
  },
}) => {
  const [socket, setSocket] = useState(null);
  const [isLiked, setLiked] = useState(false);

  useTabBar(false);

  useEffect(() => {
    store.dispatch(fetchRequest(requestId));
  }, [requestId]);

  useEffect(() => {
    const newSocket = io(
      `${serverAddress}/?socketId=${getRandomInt(100, 100000)}&accessToken=${
        store.getState().global.tokens.accessToken
      }`,
      {
        reconnection: true,
        reconnectionDelay: 500,
        jsonp: false,
        reconnectionAttempts: Infinity,
        transports: ['websocket'],
      },
    );

    newSocket.on('connect', function() {
      console.log('connected');
    });
    newSocket.on('liked', () => store.dispatch(increaseLikes()));
    newSocket.on('disliked', () => store.dispatch(increaseDislikes()));
    setSocket(newSocket);
    return () => newSocket.disconnect();
  }, []);

  return (
    <ScrollView contentContainerStyle={ViewRequestStyles.container}>
      <Image source={{uri: photo}} style={ViewRequestStyles.photo} />
      <Header
        text={title}
        bold
        blacke
        size={24}
        style={ViewRequestStyles.title}
      />
      <View
        style={ViewRequestStyles.author}
        onTouchEnd={() => navigation.navigate('Profile', {authorId})}>
        <Image style={ViewRequestStyles.avatar} source={{uri: authorPhoto}} />
        <Header text={name} style={ViewRequestStyles.name} size={16} black />
      </View>
      <Header
        text={location}
        style={ViewRequestStyles.location}
        black
        size={14}
      />
      <Header text={type} style={ViewRequestStyles.type} black size={14} />
      <View style={ViewRequestStyles.decoration}>
        <View style={ViewRequestStyles.line} />
        <Header
          text="Подробности"
          style={ViewRequestStyles.details}
          primaryColor
          size={11}
        />
        <View style={ViewRequestStyles.line} />
      </View>
      <Text style={ViewRequestStyles.text}>{text}</Text>
      <View style={ViewRequestStyles.controls}>
        <TouchableOpacity
          style={ViewRequestStyles.share}
          activeOpacity={0.8}
          onPress={() => store.dispatch(share())}>
          <ShareIcon height={ViewRequestStyles.share.height} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            ViewRequestStyles.likes,
            {
              backgroundColor: isLiked ? Colors.primaryColor : '#fff',
            },
          ]}
          activeOpacity={0.8}
          onPress={() => {
            socket.emit('like', {uuid: requestId});
            setLiked(true);
          }}>
          <>
            <LikeIcon style={{color: isLiked ? '#fff' : Colors.primaryColor}} />
            <Text
              style={[
                ViewRequestStyles.like,
                {color: isLiked ? '#fff' : Colors.designBlack},
              ]}>
              {likes}
            </Text>
          </>
        </TouchableOpacity>
        <TouchableOpacity
          style={ViewRequestStyles.dislikes}
          activeOpacity={0.8}
          onPress={() => socket.emit('dislike', {uuid: requestId})}>
          <>
            <DislikeIcon />
            <Text style={ViewRequestStyles.dislike}>{dislikes}</Text>
          </>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = ({
  main: {
    viewRequest: {
      request: {
        title,
        name,
        authorPhoto,
        photo,
        location,
        text,
        likes,
        dislikes,
        userId,
        type,
      },
    },
  },
}) => ({
  title,
  name,
  type,
  photo,
  authorPhoto,
  text,
  likes,
  dislikes,
  userId,
  location,
});

export default connect(mapStateToProps)(ViewRequest);
