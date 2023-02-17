import React from 'react'
import { G, Path, Svg } from 'react-native-svg'
import { white } from '../../constants/colors'

const NoticeStroke2 = ({ style }) => {
  return (
    <Svg style={style} width="54" height="20" viewBox="0 0 54 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G style="mix-blend-mode:overlay" opacity="0.4">
        <Path d="M0 13.6535V15.388C10.3366 5.16395 14.5996 16.535 38.4102 19.6376C61.8578 22.6931 52.8531 5.58167 49.351 0H46.0469C49.9302 6.89804 53.3381 17.7074 35.0096 15.7873C13.0842 13.4901 8.20277 3.69388 0 13.6535Z" fill={white} />
      </G>
    </Svg>
  )
}

export default NoticeStroke2