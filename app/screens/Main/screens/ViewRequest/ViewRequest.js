import React, {useEffect} from 'react';

import useTabBar from '_hooks/useTabBar';
import {store} from '_redux/store';
import {connect} from 'react-redux';
import {fetchRequest} from './ViewRequest.actions';

import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Header} from '_components/index';

import ViewRequestStyles from './ViewRequest.styles';

import LikeIcon from '_assets/images/like.svg';
import DislikeIcon from '_assets/images/dislike.svg';
import ShareIcon from '_assets/images/share.svg';

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
  useTabBar();
  useEffect(() => {
    store.dispatch(fetchRequest(requestId));
  }, [requestId]);

  return (
    <ScrollView contentContainerStyle={ViewRequestStyles.container}>
      <Image source={{uri: photo}} style={ViewRequestStyles.photo} />
      <Header
        text={title}
        bold
        black
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
        <TouchableOpacity style={ViewRequestStyles.share} activeOpacity={0.8}>
          <ShareIcon height={ViewRequestStyles.share.height} />
        </TouchableOpacity>
        <TouchableOpacity style={ViewRequestStyles.likes} activeOpacity={0.8}>
          <>
            <LikeIcon />
            <Text style={ViewRequestStyles.like}>{likes}</Text>
          </>
        </TouchableOpacity>
        <TouchableOpacity
          style={ViewRequestStyles.dislikes}
          activeOpacity={0.8}>
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
