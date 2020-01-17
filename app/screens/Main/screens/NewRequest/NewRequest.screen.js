import React from 'react';

import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Helpers, Colors } from '_styles/index';

import { Header, DropDown } from '_components/index';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import NewRequestStyles from './NewRequest.styles';
import { TextInput } from 'react-native-gesture-handler';

// Необходимо установить react-native-paper версии 1.0.1
import { Toolbar, Provider as PaperProvider, ToolbarBackAction, ToolbarContent } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

// 56.85814079033064,60.60611638567427

const showDropList = require('_assets/images/ShowDropList.png');
const gmapsIcon = require('_assets/images/GMaps.png');
const myIcon = <Icon name="angle-down" size={30} color={Colors.primaryColor} style={NewRequestStyles.droplistOpener} />;
const NewRequestScreen = () => {
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}>

      <PaperProvider>
        <Toolbar style={{ backgroundColor: "#fff" }}>
          <ToolbarBackAction />
          <ToolbarContent
            title={<Header text="Создание заявки" />}
          />
        </Toolbar>
      </PaperProvider>
      <View style={NewRequestStyles.mainContainer}>

        <Image style={NewRequestStyles.image} />

        <View style={NewRequestStyles.requestDescription}>
          <TextInput placeholder="Как меня назовешь?"
            placeholderTextColor="#000"
            style={{ fontSize: 18 }}
            value={<></>}
            onChange={<></>} />
          <View style={NewRequestStyles.group}>
            <Header text="Геопозиция" size="14" style={{ color: '#000' }} />

            <TouchableOpacity
              style={{ selfAlign: "right" }}
              underlayColor="#000"
              activeOpacity={0.8}
              onPress={() => (<></>)}>
              <Image source={gmapsIcon} style={NewRequestStyles.gmapsIcon} />

            </TouchableOpacity>
          </View>
          <View style={[NewRequestStyles.group, { marginTop: Helpers.verticalScale(5) }]}>
            <Header text="Что я?" size="14" style={{ color: '#000' }} />
            <TouchableOpacity style={{ selfAlign: "right" }}
              underlayColor="#000"
              activeOpacity={0.8}
              onPress={() => (<></>)}>
              {myIcon}
            </TouchableOpacity>

          </View>
          <DropDown />
          <View>
            <TextInput
              style={NewRequestStyles.descriptionTextInput}
              placeholder="Расскажи обо мне немного больше"
              value={<></>}
              onChange={<></>} />
            <TouchableOpacity
              style={NewRequestStyles.sendRequest}
              underlayColor="#000"
              activeOpacity={0.8}
              onPress={() => (<></>)}>
              <Text style={NewRequestStyles.sendButtonText}>Опубликуй меня!</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={NewRequestStyles.button}
          underlayColor="#000"
          activeOpacity={0.8}
          onPress={() => (<></>)}></TouchableOpacity>
      </View>

    </KeyboardAwareScrollView>
  );
};

export default NewRequestScreen;
