import React from 'react';
import {View} from 'react-native';

import {CheckBox} from 'react-native-elements';
import Slider from '@ptomasroos/react-native-multi-slider';

import {Header, SwitchButton} from '_components/index';

import {Categories} from '_utils/index';

import OptionsStyles from './Options.styles';
import {primaryColor} from '_styles/colors';

const Options = ({like, friend, range, types}) => {
  const switchHandler = type => ({nativeEvent}) => {
    console.log(nativeEvent);
  };
  return (
    <View style={OptionsStyles.container}>
      <Header size={14} text="Фильтр" style={OptionsStyles.header} bold />
      <View style={OptionsStyles.group}>
        <SwitchButton value={like} onValueChange={switchHandler('like')} />
        <Header size={12} text="Нравится другу" style={OptionsStyles.title} />
      </View>

      <View style={OptionsStyles.group}>
        <SwitchButton value={friend} onValueChange={switchHandler('friend')} />
        <Header size={12} text="От друга" style={OptionsStyles.title} />
      </View>

      <View>
        <Header size={12} text="Расстояние" />
        <Slider
          values={[range]}
          //   onValuesChange={([value]) => setRange(value)}
          min={1}
          max={10}
          step={0.5}
          sliderLength={OptionsStyles.sliderLength}
          containerStyle={OptionsStyles.slider}
        />
      </View>

      <View>
        <Header size={12} text="Тип объекта" />
        {Categories.getCategoriesWithText().map((category, i) => (
          <View
            style={OptionsStyles.option}
            key={category.type}
            // onTouchStart={}
          >
            <Header text={category.text} size={11} />
            <CheckBox
              checkedColor={primaryColor}
              uncheckedColor={primaryColor}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={types[i]}
              size={15}
              containerStyle={OptionsStyles.clear}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default Options;
