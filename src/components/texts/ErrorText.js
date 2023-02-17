import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { red } from '../../constants/colors'
import { fontBody } from '../../constants/fonts'

const ErrorText = ({ children }) => {
  return (
    <Text style={styles.error}>{children}</Text>
  )
}

export default ErrorText

const styles = StyleSheet.create({
  error: {
    fontFamily: fontBody,
    fontSize: 10,
    color: red,
  }
})