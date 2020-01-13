import PropTypes from 'prop-types';
import React from 'react';
import {TouchableWithoutFeedback, Animated, Image} from 'react-native';

//animations
import {getAnimations} from './SwitchButton.animations';

//images
const switchKnobImage = require('_assets/images/switchKnob.png');

//styles
import styles, {BUTTON_HIT_SLOP} from './SwitchButton.styles';

const AnimatedImage = Animated.createAnimatedComponent(Image);

const SwitchButton = ({value, onValueChange, style}) => {
  //state
  const [animations] = React.useState(getAnimations());

  //effects
  React.useEffect(() => {
    if (value) {
      animations.turnOn();
    } else {
      animations.turnOff();
    }
  }, [value, animations]);

  //callbacks
  const _onValueChange = React.useCallback(() => {
    onValueChange(!value);
  }, [value, onValueChange]);

  return (
    <TouchableWithoutFeedback
      hitSlop={BUTTON_HIT_SLOP}
      onPress={_onValueChange}
      style={styles.container}>
      <Animated.View
        style={[
          styles.container,
          style,
          {
            backgroundColor: animations.getBackgroundColor(),
          },
        ]}>
        <AnimatedImage
          source={switchKnobImage}
          style={[
            styles.circle,
            {
              transform: [
                {
                  translateX: animations.getSwitchOffset(),
                },
              ],
            },
          ]}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

SwitchButton.propTypes = {
  value: PropTypes.bool.isRequired,
  onValueChange: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default SwitchButton;
