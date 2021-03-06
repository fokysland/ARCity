import React from 'react';

import {View, Image, Text, TouchableOpacity} from 'react-native';

import {Header} from '_components/index';

import {cutText} from '_utils/text';

import ArticleStyles from './Article.styles';

const Article = ({onPress, title, text, photos}) => {
  const leftContent = () => {
    if (!photos || photos.length === 0) {
      return null;
    }
    if (photos.length === 1) {
      return <Image source={{uri: photos[0]}} style={ArticleStyles.photo} />;
    } else {
      return (
        <>
          <Image
            source={{
              uri: photos[0],
            }}
            style={ArticleStyles.photo}
          />
          <Image
            source={{
              uri: photos[1],
            }}
            style={ArticleStyles.photo}
          />
        </>
      );
    }
  };
  return (
    <TouchableOpacity
      style={ArticleStyles.container}
      onPress={onPress}
      activeOpacity={0.7}>
      <View style={photos && photos.length ? ArticleStyles.left : null}>
        {leftContent()}
      </View>
      <View style={ArticleStyles.right(photos ? photos.length : 0)}>
        <Header
          text={title}
          bold
          size={18}
          style={ArticleStyles.title}
          numberOfLines={2}
        />
        <Text style={ArticleStyles.text} numberOfLines={5}>
          {text}
        </Text>
        <Header
          text="Читай далее"
          attractionColor
          size={14}
          style={ArticleStyles.link}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Article;
