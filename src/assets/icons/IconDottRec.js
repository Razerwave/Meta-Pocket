import { View, Text } from 'react-native'
import React from 'react'
import { Rect, Svg } from 'react-native-svg'
import { primary } from '../../constants/colors'

const IconDottRec = ({ color }) => {
  return (
    <Svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Rect width="6" height="6" fill={color || primary} />
    </Svg>
  )
}

export default IconDottRec