import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const bottomStyles = {
  1: { height: 180 },
  2: { paddingBottom: 57 },
}

const LayoutBottom = ({ children, type = 1, paddingBottom, height }) => {
  const typeStyles = paddingBottom || height ? { paddingBottom, height } : bottomStyles[type];

  return (
    <View style={styles.outer}>
      <View style={[styles.inner, typeStyles]}>
        {children}
      </View>
    </View>
  )
}

export default LayoutBottom

const styles = StyleSheet.create({
  outer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  inner: {
    // paddingHorizontal: 55,
    alignItems: 'center',
  }
})