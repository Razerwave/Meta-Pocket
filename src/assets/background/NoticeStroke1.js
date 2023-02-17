import React from 'react'
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg'
import { white } from '../../constants/colors'

const NoticeStroke1 = ({style}) => {
  return (
    <Svg style={style} width="57" height="40" viewBox="0 0 57 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path style="mix-blend-mode:overlay" opacity="0.4" d="M47.0453 4.53876C42.4113 5.72187 36.0869 3.04462 32.0667 3.27776C27.6367 3.53498 28.1695 6.27936 26.1605 6.17688C21.3875 5.93349 14.8005 0.480089 7.27853 0.10143C4.14926 -0.0563875 2.09352 0.359676 0.000427064 2.44973V40H20.8619C22.227 37.2602 20.2408 34.4344 21.9515 32.993C25.5176 29.9878 27.5775 31.1407 38.0394 29.7844C48.5007 28.4281 54.038 13.5917 56.9883 8.61536L47.0453 4.53876Z" fill="url(#paint0_linear_651_14663)" />
      <Defs>
        <LinearGradient id="paint0_linear_651_14663" x1="49.9888" y1="2.17304" x2="-4.59598" y2="28.7287" gradientUnits="userSpaceOnUse">
          <Stop offset="0.13" stopColor={white} />
          <Stop offset="1" stopColor={white} stopOpacity="0.2" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default NoticeStroke1