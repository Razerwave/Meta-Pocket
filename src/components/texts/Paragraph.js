import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Stack from '../Stack'
import BodyText from './BodyText'
import BodyHeading from './BodyHeading'

const Paragraph = ({title, children}) => {
  return (
    <Stack spacing={20}>
      {title && <BodyHeading>{title}</BodyHeading>}
      {children}
    </Stack>
  )
}

export default Paragraph

const styles = StyleSheet.create({})