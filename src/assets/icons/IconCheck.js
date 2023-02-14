import React from 'react'
import { Path, Svg } from 'react-native-svg'
import { useTheme } from 'styled-components';

const IconCheck = () => {
  const { fontColor } = useTheme();
  return (
    <Svg width="10" height="8" viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg">
      <Path d="M3.91185 7.27273L0 3.36088L1.15702 2.20386L3.91185 4.93113L8.84298 0L10 1.18457L3.91185 7.27273Z" fill={fontColor} />
    </Svg>
  )
}

export default IconCheck