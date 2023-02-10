import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LayoutBottom = ({ children, height = 180 }) => {
  return (
    <View style={styles.outer}>
      <View style={[styles.inner, { height }]}>
        {children}
      </View>
    </View>
  )
}

export default LayoutBottom

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  inner: {
    paddingHorizontal: 55,
  }
})