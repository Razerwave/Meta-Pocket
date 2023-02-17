import React from 'react';
import { Path, Svg, Rect } from 'react-native-svg';
import { white } from '../../constants/colors';

const IconCloseX = ({ color = "#1F2129" }) => {
  return (
    <Svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect
        y="12.7275"
        width="17.999"
        height="1.7999"
        rx="0.899952"
        transform="rotate(-45 0 12.7275)"
        fill={color}
      />
      <Rect
        x="12.7275"
        y="14"
        width="17.999"
        height="1.7999"
        rx="0.899952"
        transform="rotate(-135 12.7275 14)"
        fill={color}
      />
    </Svg>
  );
};

export default IconCloseX;
