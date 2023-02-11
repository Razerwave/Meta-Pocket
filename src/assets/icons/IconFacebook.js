import React from 'react'
import { Path, Svg } from 'react-native-svg'
import { useTheme } from 'styled-components';

const IconFacebook = () => {
  const { fontColor } = useTheme();
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M23.9864 12.0717C23.9864 5.40461 18.6169 0 11.9932 0C5.36949 0 0 5.40461 0 12.0717C0 18.0972 4.38644 23.0924 10.122 24V15.5655H7.07796V12.0785H10.122V9.41712C10.122 6.39409 11.9119 4.72221 14.6508 4.72221C15.9661 4.72221 17.3356 4.96105 17.3356 4.96105V7.92948H15.8237C14.3322 7.92948 13.8712 8.85755 13.8712 9.81291V12.0785H17.2L16.6712 15.5655H13.878V24C19.6136 23.0924 24 18.0972 24 12.0717H23.9864Z" fill={fontColor} />
    </Svg>
  )
}

export default IconFacebook