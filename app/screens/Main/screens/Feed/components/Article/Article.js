import React from 'react';

import {View, Image, Text} from 'react-native';

import {Header} from '_components/index';

import ArticleStyles from './Article.styles';

const Article = ({onPress, title, text, photos}) => {
  const leftContent = () => {
    if (photos.length === 0) {
      return null;
    }
    if (photos.length === 1) {
      return <Image source={photos[0]} style={ArticleStyles.photo} />;
    } else {
      return (
        <>
          <Image source={photos[0]} style={ArticleStyles.photo} />
          <Image source={photos[1]} style={ArticleStyles.photo} />
        </>
      );
    }
  };
  return (
    <View style={ArticleStyles.container} onTouchStart={onPress}>
      <View style={ArticleStyles.left}>{leftContent}</View>
      <View style={ArticleStyles.right}>
        <Header text={title} bold size={24} style={ArticleStyles.title} />
        <Text style={ArticleStyles.text}>{text}</Text>
        <Header text="Читай далее" attractionColor size={14} />
      </View>
    </View>
  );
};

export default Article;
