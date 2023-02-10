import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from 'styled-components'

const StepsAuth = ({ current }) => {
  const { steps: { activeColor, inactiveColor } } = useTheme()

  return (
    <View style={styles.container}>
      <View style={[styles.line, { borderColor: 0 < current ? activeColor : inactiveColor }]} />
      <View style={[styles.line, { borderColor: 1 < current ? activeColor : inactiveColor }]} />
      <View style={[styles.line, { borderColor: 2 < current ? activeColor : inactiveColor }]} />
      <View style={[styles.line, { borderColor: 3 < current ? activeColor : inactiveColor }]} />
      <View style={[styles.line, { borderColor: 4 < current ? activeColor : inactiveColor }]} />
    </View>
  )
}

export default StepsAuth

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 15,
    gap: 3,
  },
  line: {
    flex: 1,
    borderWidth: 1,
  }
})