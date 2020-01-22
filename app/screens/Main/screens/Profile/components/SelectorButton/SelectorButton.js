import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Header} from '_components';

import SelectorButtonStyles from './ScreenButton.styles';

const SelectorButton = ({buttonText, isSelected}) => {
  if (isSelected) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          SelectorButtonStyles.mainContainerCommon,
          SelectorButtonStyles.mainContainerSelected,
        ]}>
        <Header
          text={buttonText}
          style={SelectorButtonStyles.buttonHeaderSelected}
        />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={[
        SelectorButtonStyles.mainContainerCommon,
        SelectorButtonStyles.mainContainerUnselected,
      ]}>
      <Header
        text={buttonText}
        style={SelectorButtonStyles.buttonHeaderUnselected}
      />
    </TouchableOpacity>
  );
};
export default SelectorButton;
