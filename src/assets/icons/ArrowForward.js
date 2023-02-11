import React from 'react'
import { Path, Svg } from 'react-native-svg'
import { useTheme } from 'styled-components';

const IconArrowForward = () => {
  const { fontColor } = useTheme();
  return (
    <Svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M1.46312 8.6398L0.615234 7.94039L4.51946 4.71981L0.615234 1.49922L1.46312 0.799805L6.21523 4.71981L1.46312 8.6398Z" fill={fontColor} />
    </Svg>
  )
}

export default IconArrowForward