import { StyleSheet, TouchableOpacity, } from 'react-native'
import React from 'react'
import { Text } from 'react-native'
import Stack from '../Stack'
import { ButtonTextSize, ButtonTextWeight } from '../../constants/fonts'
import { useTheme } from 'styled-components';

const ButtonText = ({ type = 1, onPress, icon, children, style }) => {
  const { fontColor } = useTheme();
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Stack direction='row' spacing={6}>
        {icon}
        <Text style={{
          fontSize: ButtonTextSize[type],
          fontWeight: ButtonTextWeight[type],
          color: fontColor,
        }}>
          {children}
        </Text>
      </Stack>
    </TouchableOpacity>
  )
}

export default ButtonText

const styles = StyleSheet.create({})