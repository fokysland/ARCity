import React from 'react';
import {View} from 'react-native';

import {store} from '_redux/store';
import connect from 'react-redux';
import {setFriend, setLike, setRange, setCategory} from '../../Map.actions';

import {CheckBox} from 'react-native-elements';
import Slider from '@ptomasroos/react-native-multi-slider';

import {Header, SwitchButton} from '_components/index';

import {Categories} from '_utils/index';

import OptionsStyles from './Options.styles';
import {primaryColor} from '_styles/colors';

const Options = ({like, friend, range, categories}) => {
  return (
    <View style={OptionsStyles.container}>
      <Header size={14} text="Фильтр" style={OptionsStyles.header} bold />
      <View style={OptionsStyles.group}>
        <SwitchButton
          value={like}
          onValueChange={() => store.dispatch(setLike())}
        />
        <Header size={12} text="Нравится другу" style={OptionsStyles.title} />
      </View>

      <View style={OptionsStyles.group}>
        <SwitchButton
          value={friend}
          onValueChange={() => store.dispatch(setFriend())}
        />
        <Header size={12} text="От друга" style={OptionsStyles.title} />
      </View>

      <View>
        <Header size={12} text="Расстояние" />
        <Slider
          values={[range]}
          onValuesChange={([value]) => store.dispatch(setRange(value))}
          min={1}
          max={10}
          step={0.5}
          sliderLength={OptionsStyles.sliderLength}
          containerStyle={OptionsStyles.slider}
        />
      </View>

      <View>
        <Header size={12} text="Тип объекта" />
        {Categories.getCategoriesWithText().map(({type, text}, i) => (
          <View
            style={OptionsStyles.option}
            key={type}
            onTouchStart={() => store.dispatch(setCategory(type))}>
            <Header text={text} size={11} />
            <CheckBox
              checkedColor={primaryColor}
              uncheckedColor={primaryColor}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={categories[i]}
              size={15}
              containerStyle={OptionsStyles.clear}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const mapStateToProps = ({
  main: {
    map: {like, friend, range, categories},
  },
}) => ({
  like,
  friend,
  range,
  categories,
});

export default connect(mapStateToProps)(Options);
