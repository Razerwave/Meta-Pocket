import React from 'react'
import { Path, Svg } from 'react-native-svg'
import { useTheme } from 'styled-components';

const IconArrowForward = () => {
  const { fontColor } = useTheme();
  return (
    <Svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M5.46312 10.6398L4.61523 9.94039L8.51946 6.71981L4.61523 3.49922L5.46312 2.7998L10.2152 6.71981L5.46312 10.6398Z" fill={fontColor} />
    </Svg>
  )
}

export default IconArrowForward