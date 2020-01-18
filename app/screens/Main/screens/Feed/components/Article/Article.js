import React from 'react';

import {View, Image, Text} from 'react-native';

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
    <View style={ArticleStyles.container} onTouchStart={onPress}>
      <View style={photos && photos.length ? ArticleStyles.left : null}>
        {leftContent()}
      </View>
      <View style={ArticleStyles.right(photos ? photos.length : 0)}>
        <Header
          text={cutText(title, 40)}
          bold
          size={18}
          style={ArticleStyles.title}
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
    </View>
  );
};

export default Article;
