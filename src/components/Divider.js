import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Divider = () => {
  return (
    <View style={styles.divider} />
  )
}

export default Divider

const styles = StyleSheet.create({
  divider: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#D9D9D9',
  }
})