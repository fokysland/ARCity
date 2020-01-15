import React from 'react';
import PropTypes from 'prop-types';

import {View, TextInput} from 'react-native';

import SearchBarStyles from '_components/SearchBar/SearchBar.styles';

const SearchBar = ({
  rightChild,
  leftChild,
  outerContainerStyle,
  innerContainerStyle,
  inputStyle,
  leftIconContainerStyle,
  rightIconContainerStyle,
  onChange,
  value,
  placeholder,
  placeholderTextColor,
}) => {
  return (
    <View style={{...SearchBarStyles.container, ...outerContainerStyle}}>
      <View style={{...SearchBarStyles.inputContainer, ...innerContainerStyle}}>
        <View
          style={{...SearchBarStyles.iconContainer, ...leftIconContainerStyle}}>
          {leftChild}
        </View>
        <TextInput
          style={{...SearchBarStyles.input, ...inputStyle}}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          scrollEnabled={false}
          placeholderTextColor={placeholderTextColor}
        />
        {rightChild}
      </View>
    </View>
  );
};

SearchBar.propTypes = {
  rightChild: PropTypes.object,
  leftChild: PropTypes.object,
  outerContainerStyle: PropTypes.object,
  innerContainerStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  leftIconContainerStyle: PropTypes.object,
  rightIconContainerStyle: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default SearchBar;
