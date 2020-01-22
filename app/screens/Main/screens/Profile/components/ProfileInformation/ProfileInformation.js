import React from 'react';
import {
  View,
  FlatList,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {Header} from '_components';

import ProfileInformationStyles from './ProfileInformation.styles';
import LikeIcon from '_assets/images/ProfileInfoLike.svg';
import DislikeIcon from '_assets/images/ProfileInfoDislike.svg';

const ProfileInformation = ({
  townName,
  idesCount,
  CompletedIdeasCount,
  LikesCount,
  DislikesCount,
}) => {
  const calculateLikesWidth = (a, b) => {
    return a / (a + b);
  };

  return (
    <View style={ProfileInformationStyles.mainContainer}>
      <View style={ProfileInformationStyles.InfoBlockContainer}>
        <Header text="Город" style={ProfileInformationStyles.InfoBlockTitle} />
        <Header
          text={townName}
          style={ProfileInformationStyles.InfoBlockDefine}
        />
      </View>

      <View style={ProfileInformationStyles.twoBlocksInRow}>
        <View style={ProfileInformationStyles.InfoBlockContainer}>
          <Header text="Идеи" style={ProfileInformationStyles.InfoBlockTitle} />
          <Header
            text={idesCount}
            style={ProfileInformationStyles.InfoBlockDefine}
          />
        </View>
        <View style={ProfileInformationStyles.secondBlockInRow}>
          <Header
            text="Готовые идеи"
            style={ProfileInformationStyles.InfoBlockTitle}
          />
          <Header
            text={CompletedIdeasCount}
            style={ProfileInformationStyles.InfoBlockDefine}
          />
        </View>
      </View>

      <View style={ProfileInformationStyles.IdeasRatingContainer}>
        <Header
          text="Рейтинг идей"
          style={ProfileInformationStyles.InfoBlockTitle}
        />
        <View style={ProfileInformationStyles.LikesStatContainer}>
          <LikeIcon />
          <View style={ProfileInformationStyles.LikesLineAndCountMainContainer}>
            <View style={ProfileInformationStyles.LikesCountContainer}>
              <Header
                text={LikesCount}
                style={ProfileInformationStyles.LikesCount}
              />
              <Header
                text={DislikesCount}
                style={ProfileInformationStyles.DislikesCount}
              />
            </View>
            <View style={ProfileInformationStyles.LikesLineContainer}>
              <View style={ProfileInformationStyles.LikesLine} />
              <View style={ProfileInformationStyles.DislikesLine} />
            </View>
          </View>
          <DislikeIcon />
        </View>
      </View>
    </View>
  );
};

export default ProfileInformation;
