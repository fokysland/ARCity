import React, {useEffect} from 'react';

import {store} from '_redux/store';
import {connect} from 'react-redux';
import {fetchContent} from './Feed.actions';

import {FlatList} from 'react-native';

import {Article, Request} from './components/index';

import FeedStyles from './Feed.styles';
import useTabBar from '_hooks/useTabBar';

const FeedScreen = ({content, navigation}) => {
  useTabBar(true);
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
              address={item.address}
              type={item.type}
              photo={item.path}
              title={item.title}
              onPress={() => {
                navigation.navigate('ViewRequest', {
                  requestId: item.uuid,
                });
              }}
            />
          );
        }
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
