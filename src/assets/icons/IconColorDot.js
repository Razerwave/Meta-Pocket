import React from 'react';
import {Path, Svg, Circle} from 'react-native-svg';
import {useTheme} from 'styled-components';

const IconColorDot = ({size = 14, color}) => {
  const {fontColor} = useTheme();
  return (
    <Svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle cx={size/2} cy={size/2} r={size/2} fill={color} />
    </Svg>
  );
};

export default IconColorDot;
