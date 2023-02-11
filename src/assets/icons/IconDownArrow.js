import React from 'react';
import { useTheme } from 'styled-components';
import { Path, Svg } from 'react-native-svg';

const IconArrowDown = () => {
  const { fontColor } = useTheme();
  return (
    <Svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M4 6L0.535898 6.52533e-07L7.4641 4.68497e-08L4 6Z" fill={fontColor} />
    </Svg>
  )
}

export default IconArrowDown