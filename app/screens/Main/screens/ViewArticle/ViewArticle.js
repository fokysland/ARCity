import React, {useEffect} from 'react';

import {store} from '_redux/store';
import {connect} from 'react-redux';
import {fetchArticle} from './ViewArticle.actions';
import useTabBar from '_hooks/useTabBar';

import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Header} from '_components/index';
import Carousel from './components/Carousel';

import ViewArticleStyles from './ViewArticle.styles';

import LikeIcon from '_assets/images/like.svg';
import DislikeIcon from '_assets/images/dislike.svg';
import ShareIcon from '_assets/images/share.svg';

const ViewArticle = ({
  navigation,
  title,
  name,
  photo,
  photos = [],
  text,
  likes,
  dislikes,
  userId,
  route: {
    params: {articleId},
  },
}) => {
  useTabBar(false);
  useEffect(() => {
    store.dispatch(fetchArticle(articleId));
  }, [articleId]);

  return (
    <ScrollView contentContainerStyle={ViewArticleStyles.container}>
      <Carousel photos={photos} />
      <Header
        text={title}
        bold
        black
        size={24}
        style={ViewArticleStyles.title}
      />
      <View
        style={ViewArticleStyles.author}
        onTouchEnd={() => navigation.navigate('Profile', {userId})}>
        <Image style={ViewArticleStyles.avatar} source={{uri: photo}} />
        <Header text={name} style={ViewArticleStyles.name} size={16} black />
      </View>
      <Text style={ViewArticleStyles.text}>{text}</Text>
      <View style={ViewArticleStyles.controls}>
        {/*<TouchableOpacity style={ViewArticleStyles.share} activeOpacity={0.8}>*/}
        {/*  <ShareIcon height={ViewArticleStyles.share.height} />*/}
        {/*</TouchableOpacity>*/}
        {/*<TouchableOpacity style={ViewArticleStyles.likes} activeOpacity={0.8}>*/}
        {/*  <>*/}
        {/*    <LikeIcon />*/}
        {/*    <Text style={ViewArticleStyles.like}>{likes}</Text>*/}
        {/*  </>*/}
        {/*</TouchableOpacity>*/}
        {/*<TouchableOpacity*/}
        {/*  style={ViewArticleStyles.dislikes}*/}
        {/*  activeOpacity={0.8}>*/}
        {/*  <>*/}
        {/*    <DislikeIcon />*/}
        {/*    <Text style={ViewArticleStyles.dislike}>{dislikes}</Text>*/}
        {/*  </>*/}
        {/*</TouchableOpacity>*/}
      </View>
    </ScrollView>
  );
};

const mapStateToProps = ({
  main: {
    viewArticle: {
      article: {title, name, photo, photos, text, likes, dislikes, userId},
    },
  },
}) => ({
  title,
  name,
  photo,
  photos,
  text,
  likes,
  dislikes,
  userId,
});

export default connect(mapStateToProps)(ViewArticle);
