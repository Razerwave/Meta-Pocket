import React from 'react'
import { Path, G, Svg } from 'react-native-svg'
import { gray100, neutral100, neutral200, neutral300, white } from '../../constants/colors'

const NoticeStroke3 = ({style}) => {
  return (
    <Svg style={style} width="131" height="60" viewBox="0 0 131 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G style="mix-blend-mode:overlay" opacity="0.2">
        <Path d="M0 60H12.7078C30.4957 45.1515 51.303 41.8785 85.4268 37.1882C110.257 33.7751 123.795 16.7252 131 3.23604V0C123.78 13.0982 109.8 30.3786 83.6921 32.1594C43.3173 34.914 17.4326 37.6733 0 60Z" fill={white} />
      </G>
    </Svg>
  )
}

export default NoticeStroke3