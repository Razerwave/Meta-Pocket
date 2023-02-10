import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LayoutCenter = ({ children, overlayStlye = {} }) => {
  return (
    <View style={[styles.outer, overlayStlye]}>
      <View style={styles.inner}>
        {children}
      </View>
    </View>
  )
}

export default LayoutCenter

const styles = StyleSheet.create({
  outer: {
    position: 'absolute',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})