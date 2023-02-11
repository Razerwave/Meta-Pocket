import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { red } from '../../constants/colors'

const ErrorText = ({ children }) => {
  return (
    <Text style={styles.error}>{children}</Text>
  )
}

export default ErrorText

const styles = StyleSheet.create({
  error: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: red,
  }
})