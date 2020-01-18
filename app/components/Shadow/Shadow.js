import React from 'react';

import {BoxShadow} from 'react-native-shadow';

const Shadow = ({
  width,
  height,
  color = '#000',
  border = 1,
  radius = 0,
  opacity = 1,
  x = 0,
  y = 0,
  style = {},
  children,
}) => {
  const settings = {width, height, color, border, radius, opacity, x, y, style};
  return <BoxShadow setting={settings}>{children}</BoxShadow>;
};

export default Shadow;
