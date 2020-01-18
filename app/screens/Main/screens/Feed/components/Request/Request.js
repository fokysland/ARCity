import React from 'react';

import {View, Image} from 'react-native';
import {Header} from '_components/index';

import {Categories, Text} from '_utils/index';

import RequestStyles from './Request.styles';

const Request = ({onPress, photo, title, geolocation, type}) => {
  return (
    <View style={RequestStyles.container} onTouchStart={onPress}>
      <View style={RequestStyles.wrapper}>
        <Image
          source={{
            uri: photo,
          }}
          style={RequestStyles.photo}
        />
        <View style={RequestStyles.right}>
          <Header
            style={RequestStyles.title}
            text={Text.cutText(title, 20)}
            size={14}
          />
          <View>
            <Header
              style={RequestStyles.text}
              text={geolocation.latitude + ' ' + geolocation.longitude}
              size={14}
            />
            <Header
              size={14}
              style={RequestStyles.text}
              text={Categories.getReadableType(type)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Request;
