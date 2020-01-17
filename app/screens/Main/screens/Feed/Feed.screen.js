import React, {useEffect} from 'react';

import {store} from '_redux/store';
import {connect} from 'react-redux';
import {fetchContent} from './Feed.actions';

import {ScrollView, View} from 'react-native';

import {Article, Request} from './components/index';

import FeedStyles from './Feed.styles';

const FeedScreen = ({content}) => {
  useEffect(() => {
    store.dispatch(fetchContent());
  }, []);

  const getContent = () =>
    content.map(item => {
      if (item.postType === 'request') {
        return (
          <Request
            geolocation={item.geolocation}
            type={item.type}
            photo={item.path}
            title={item.name}
            key={item.uuid + ' ' + item.title}
          />
        );
      } else if (item.postType === 'content') {
        return (
          <Article
            title={item.header}
            text={item.text}
            photos={item.imagesUrl}
            key={item.uuid + ' ' + item.title}
          />
        );
      }
    });

  return (
    <ScrollView style={FeedStyles.container}>
      <View style={FeedStyles.feed}>{getContent()}</View>
    </ScrollView>
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
