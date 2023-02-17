import React from 'react';
import {useTheme} from 'styled-components';
import {Path, Svg} from 'react-native-svg';

const IconClose = ({color}) => {
  const {fontColor} = useTheme();
  return (
    <Svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M1.09375 10L5 6.09375L8.90625 10L10 8.90625L6.09375 5L10 1.09375L8.90625 0L5 3.90625L1.09375 0L0 1.09375L3.90625 5L0 8.90625L1.09375 10Z"
        fill={color || fontColor}
      />
    </Svg>
  );
};

export default IconClose;
