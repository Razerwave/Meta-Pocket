import React from 'react'
import { Path, Svg } from 'react-native-svg'
import { useTheme } from 'styled-components';

const IconCopy2 = () => {
  const { fontColor } = useTheme()
  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M4.64706 11.2C4.40196 11.2 4.19363 11.1125 4.02206 10.9375C3.85049 10.7625 3.76471 10.55 3.76471 10.3V1.9C3.76471 1.65 3.85049 1.4375 4.02206 1.2625C4.19363 1.0875 4.40196 1 4.64706 1H11.1176C11.3627 1 11.5711 1.0875 11.7426 1.2625C11.9142 1.4375 12 1.65 12 1.9V10.3C12 10.55 11.9142 10.7625 11.7426 10.9375C11.5711 11.1125 11.3627 11.2 11.1176 11.2H4.64706ZM4.64706 10.3H11.1176V1.9H4.64706V10.3ZM2.88235 13C2.63725 13 2.42892 12.9125 2.25735 12.7375C2.08578 12.5625 2 12.35 2 12.1V3.505C2 3.375 2.04167 3.2675 2.125 3.1825C2.20833 3.0975 2.31373 3.055 2.44118 3.055C2.56863 3.055 2.67402 3.0975 2.75735 3.1825C2.84069 3.2675 2.88235 3.375 2.88235 3.505V12.1H9.41177C9.53922 12.1 9.64461 12.1425 9.72794 12.2275C9.81128 12.3125 9.85294 12.42 9.85294 12.55C9.85294 12.68 9.81128 12.7875 9.72794 12.8725C9.64461 12.9575 9.53922 13 9.41177 13H2.88235Z" fill={fontColor} />
    </Svg>
  )
}

export default IconCopy2