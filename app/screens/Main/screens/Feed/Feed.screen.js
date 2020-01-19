import React, {useEffect} from 'react';

import {store} from '_redux/store';
import {connect} from 'react-redux';
import {fetchContent} from './Feed.actions';

import {FlatList} from 'react-native';

import {Article, Request} from './components/index';

import FeedStyles from './Feed.styles';

const FeedScreen = ({content, navigation}) => {
  useEffect(() => {
    store.dispatch(fetchContent());
  }, []);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={FeedStyles.feed}
      contentContainerStyle={FeedStyles.feedContainer}
      data={content}
      renderItem={({item}) => {
        if (item.postType === 'request') {
          return (
            <Request
              geolocation={item.geolocation}
              type={item.type}
              photo={item.path}
              title={item.name}
              onPress={() => {
                navigation.navigate('ViewRequest', {
                  requestId: item.uuid,
                });
              }}
            />
          );
        } else if (item.postType === 'content') {
          return (
            <Article
              title={item.header}
              text={item.text}
              photos={item.imagesUrl}
              onPress={() =>
                navigation.navigate('ViewArticle', {
                  articleId: item.uuid,
                })
              }
            />
          );
        }
      }}
      keyExtractor={item => item.uuid}
    />
  );
};

const mapStateToProps = ({
  main: {
    feed: {content},
  },
}) => ({
  content,
});

export default connect(mapStateToProps)(FeedScreen);
