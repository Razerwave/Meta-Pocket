import React from 'react'
import { BodyHeadingSize, BodyHeadingWeight, fontBody } from '../../constants/fonts'
import { useTheme } from 'styled-components'
import { Text, StyleSheet } from 'react-native'

const BodyHeading = ({ type = 6, style, children, ...props }) => {
  const { fontColor } = useTheme()
  return (
    <Text style={[styles.text, {
      color: fontColor,
      fontWeight: BodyHeadingWeight[type],
      fontSize: BodyHeadingSize[type],
      ...style,
      ...props,
    }]}>{children}</Text>
  )
}

export default BodyHeading

const styles = StyleSheet.create({
  text: {
    fontFamily: fontBody,
  }
})