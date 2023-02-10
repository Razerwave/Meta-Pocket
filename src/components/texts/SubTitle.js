import React from 'react'
import StyledText from './StyledText'

const SubTitle = (props) => {
  return (
    <StyledText style={{ fontSize: 16, fontWeight: 600, lineHeight: 19 }} {...props} />
  )
}

export default SubTitle