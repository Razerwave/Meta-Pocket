import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Stack from '../Stack'
import BodyText from './BodyText'
import BodyHeading from './BodyHeading'

const Paragraph = ({title, body, children}) => {
  return (
    <Stack spacing={20}>
      {title && <BodyHeading>{title}</BodyHeading>}
      {body && body instanceof Array ? body.map((text, index) => <BodyText key={index}>{text}</BodyText>) : <BodyText>{body}</BodyText>}
      {children}
    </Stack>
  )
}

export default Paragraph

const styles = StyleSheet.create({})