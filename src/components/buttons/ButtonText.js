import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Stack from '../Stack'
import { Text } from 'react-native-svg'

const ButtonText = ({type = 1, onPress, icon}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Stack direction='row' spacing={6}>
        {icon}
        <Text style={{ fontSize: 12, lineHeight: 16 }}>
          
        </Text>
      </Stack>
    </TouchableOpacity>
  )
}

export default ButtonText

const styles = StyleSheet.create({})