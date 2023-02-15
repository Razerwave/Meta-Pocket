import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconArrowScroll } from '../../assets/icons'
import BodyText from '../texts/BodyText'
import Stack from '../Stack'
import { gray200 } from '../../constants/colors'

const ButtonScroll = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Stack spacing={8} alignItems="center">
        <BodyText type={5} style={{color: gray200}}>{children}</BodyText>
        <IconArrowScroll color={gray200}/>
      </Stack>
    </TouchableOpacity>
  )
}

export default ButtonScroll

const styles = StyleSheet.create({})