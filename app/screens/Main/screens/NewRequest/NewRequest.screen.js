import React from 'react';

import {View, Image, TouchableOpacity, Text} from 'react-native';
import {Helpers, Colors} from '_styles/index';

import {Header, DropDown} from '_components/index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import NewRequestStyles from './NewRequest.styles';
import {TextInput} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';

const googleMapsIcon = require('_assets/images/GMaps.png');
const angleIcon = (
  <Icon
    name="angle-down"
    size={30}
    color={Colors.primaryColor}
    style={NewRequestStyles.droplistOpener}
  />
);

const NewRequestScreen = () => {
  return (
    <KeyboardAwareScrollView enableOnAndroid={true}>
      <View style={NewRequestStyles.mainContainer}>
        <Image style={NewRequestStyles.image} />

        <View style={NewRequestStyles.requestDescription}>
          <TextInput
            placeholder="Как меня назовешь?"
            placeholderTextColor="#000"
            style={{fontSize: 18}}
          />
          <View style={NewRequestStyles.group}>
            <Header text="Геопозиция" size="14" style={{color: '#000'}} />

            <TouchableOpacity
              style={{selfAlign: 'right'}}
              underlayColor="#000"
              activeOpacity={0.8}>
              <Image
                source={googleMapsIcon}
                style={NewRequestStyles.gmapsIcon}
              />
            </TouchableOpacity>
          </View>
          <View
            style={[
              NewRequestStyles.group,
              {marginTop: Helpers.verticalScale(5)},
            ]}>
            <Header text="Что я?" size="14" style={{color: '#000'}} />
            <TouchableOpacity
              style={{selfAlign: 'right'}}
              underlayColor="#000"
              activeOpacity={0.8}>
              {angleIcon}
            </TouchableOpacity>
          </View>
          <DropDown />
          <View>
            <TextInput
              style={NewRequestStyles.descriptionTextInput}
              placeholder="Расскажи обо мне немного больше"
            />
            <TouchableOpacity
              style={NewRequestStyles.sendRequest}
              underlayColor="#000"
              activeOpacity={0.8}>
              <Text style={NewRequestStyles.sendButtonText}>
                Опубликуй меня!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={NewRequestStyles.button}
          underlayColor="#000"
          activeOpacity={0.8}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default NewRequestScreen;
