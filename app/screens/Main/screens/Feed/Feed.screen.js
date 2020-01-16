import React from 'react';

import {View} from 'react-native';

import {Article} from './components/index';

import FeedStyles from './Feed.styles';

const FeedScreen = () => {
  return <Article title="Привет" text="как дела" photos={[]} />;
};

export default FeedScreen;
