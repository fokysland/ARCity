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
              uri:
                'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            }}
            style={ArticleStyles.photo}
          />
          <Image
            source={{
              uri:
                'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
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
        <Text style={ArticleStyles.text} numberOfLines={6}>
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
