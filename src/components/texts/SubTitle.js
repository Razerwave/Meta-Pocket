import React from 'react'
import { Text } from 'react-native'

const SubTitle = (props) => {
  return (
    <Text style={{ fontSize: 16, fontWeight: 600, lineHeight: 19, color: '#777777' }} {...props} />
  )
}

export default SubTitle