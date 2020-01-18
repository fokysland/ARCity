import React, {useEffect} from 'react';

import {store} from '_redux/store';
import {connect} from 'react-redux';
import {fetchContent} from './Feed.actions';

import {FlatList, View} from 'react-native';

import {Article, Request} from './components/index';

import FeedStyles from './Feed.styles';

const FeedScreen = ({content}) => {
  useEffect(() => {
    store.dispatch(fetchContent());
  }, []);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={FeedStyles.feed}
      data={content}
      renderItem={({item}) => {
        if (item.postType === 'request') {
          return (
            <Request
              geolocation={item.geolocation}
              type={item.type}
              photo={item.path}
              title={item.name}
            />
          );
        } else if (item.postType === 'content') {
          return (
            <Article
              title={item.header}
              text={item.text}
              photos={item.imagesUrl}
            />
          );
        }
      }}
      keyExtractor={item => item.uuid + ' ' + item.title}
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
