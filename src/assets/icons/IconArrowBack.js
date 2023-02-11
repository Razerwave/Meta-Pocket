import React from 'react'
import { useTheme } from 'styled-components';
import { Path, Svg } from 'react-native-svg'

const IconArrowBack = () => {
  const { fontColor } = useTheme();
  return (
    <Svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M7.81046 15.3846L0 7.69231L7.81046 0L9.21569 1.38397L3.79085 6.72675H20V8.65787H3.79085L9.21569 14.0006L7.81046 15.3846Z" fill={fontColor} />
    </Svg>
  )
}

export default IconArrowBack