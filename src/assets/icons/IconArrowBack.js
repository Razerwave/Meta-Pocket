import React from 'react'
import { useTheme } from 'styled-components';
import { Path, Svg } from 'react-native-svg'

const IconArrowBack = () => {
  const { fontColor } = useTheme();
  return (
    <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M12.8105 22.3846L5 14.6923L12.8105 7L14.2157 8.38397L8.79085 13.7267H25V15.6579H8.79085L14.2157 21.0006L12.8105 22.3846Z" fill={fontColor} />
    </Svg>
  )
}

export default IconArrowBack