import React from 'react';
import {Path, Svg, Circle} from 'react-native-svg';
import {useTheme} from 'styled-components';

const IconColorDot = color => {
  const {fontColor} = useTheme();
  return (
    <Svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle cx="7" cy="7" r="3" fill={color.color} />
    </Svg>
  );
};

export default IconColorDot;
