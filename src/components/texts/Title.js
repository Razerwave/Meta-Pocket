import { View, Text } from 'react-native'
import React from 'react'
import StyledText from './StyledText'

const Title = (props) => {
  return (
    <StyledText style={{ fontSize: 24, fontWeight: 600, lineHeight: 29 }} {...props} />
  )
}

export default Title