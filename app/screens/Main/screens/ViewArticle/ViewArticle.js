import React, {useEffect} from 'react';

import {store} from '_redux/store';
import {connect} from 'react-redux';
import {fetchArticle} from './ViewArticle.actions';

import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import {Header} from '_components/index';

import ViewArticleStyles from './ViewArticle.styles';

const shareIcon = require('_assets/images/share.svg');
const likeIcon = require('_assets/images/like.svg');
const dislikeIcon = require('_assets/images/dislike.svg');

const ViewArticle = ({
  navigation,
  title,
  name,
  photo,
  photos,
  text,
  likes,
  dislikes,
}) => {
  useEffect(() => {
    store.dispatch(fetchArticle());
  }, []);
  return (
    <View style={ViewArticleStyles.container}>
      <View style={ViewArticleStyles.carouselContainer} />
      <Header text={title} bold black size={24} />
      <View style={ViewArticleStyles.author}>
        <Image style={ViewArticleStyles.avatar} source={photo} />
        <Header text={name} style={ViewArticleStyles.name} size={16} black />
      </View>
      <Text style={ViewArticleStyles.text}>{text}</Text>
      <View style={ViewArticleStyles.controls}>
        <TouchableWithoutFeedback style={ViewArticleStyles.share}>
          <Image style={ViewArticleStyles.icon} source={shareIcon} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback style={ViewArticleStyles.dislikes}>
          <Image style={ViewArticleStyles.icon} source={likeIcon} />
          <Text />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback style={ViewArticleStyles.likes}>
          <Image style={ViewArticleStyles.icon} source={dislikeIcon} />
          <Text />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const mapStateToProps = ({
  main: {
    viewArticle: {
      article: {title, name, photo, photos, text, likes, dislikes},
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
});

export default connect(mapStateToProps)(ViewArticle);
