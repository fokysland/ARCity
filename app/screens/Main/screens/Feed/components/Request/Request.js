import React from 'react';

import {View, TouchableOpacity} from 'react-native';
import Image from 'react-native-fast-image';
import {Header} from '_components/index';

import {Categories, Text} from '_utils/index';

import RequestStyles from './Request.styles';

const Request = ({onPress, photo, title, address, type}) => {
  return (
    <TouchableOpacity
      style={RequestStyles.container}
      onPress={onPress}
      activeOpacity={0.7}>
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
              text={address}
              size={14}
              numberOfLines={1}
            />
            <Header
              size={14}
              style={RequestStyles.text}
              text={Categories.getReadableType(type)}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Request;
