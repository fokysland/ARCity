import React from 'react';
import {View, TextInput} from 'react-native';

import {CheckBox} from 'react-native-elements';
import Slider from '@ptomasroos/react-native-multi-slider';

import {Header, SwitchButton} from '_components/index';

import OptionsStyles from './Options.styles';
import {primaryColor} from '_styles/colors';

const Options = ({
  like,
  friend,
  range,
  types,
  setTypes,
  setRange,
  setFriend,
  setLike,
}) => {
  const setOneType = type => () => {
    setTypes({...types, [type]: !types[type]});
  };
  return (
    <View style={OptionsStyles.container}>
      <Header size={14} text="Фильтр" style={OptionsStyles.header} bold />
      <TextInput />
      <View style={OptionsStyles.group}>
        <SwitchButton value={like} onValueChange={setLike} />
        <Header size={12} text="Нравится другу" style={OptionsStyles.title} />
      </View>

      <View style={OptionsStyles.group}>
        <SwitchButton value={friend} onValueChange={setFriend} />
        <Header size={12} text="От друга" style={OptionsStyles.title} />
      </View>

      <View>
        <Header size={12} text="Расстояние" />
        <Slider
          values={[range]}
          onValuesChange={([value]) => setRange(value)}
          min={1}
          max={10}
          step={0.5}
          sliderLength={OptionsStyles.sliderLength}
          containerStyle={OptionsStyles.slider}
        />
      </View>

      <View>
        <Header size={12} text="Тип объекта" />
        {[
          {text: 'Скамья', type: 'bench'},
          {text: 'Фонарь', type: 'lamp'},
          {text: 'Урна', type: 'urn'},
          {text: 'Клумба', type: 'flowerbed'},
          {text: 'Пандус', type: 'ramp'},
          {text: 'Другое', type: 'other'},
        ].map((category, i) => (
          <View
            style={OptionsStyles.option}
            key={category.type}
            onTouchStart={setOneType(category.type)}>
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
