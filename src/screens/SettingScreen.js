import React, { useState } from 'react'
import {View, Text, Button, Alert, StyleSheet} from 'react-native'
import { ButtonPrimary } from '../components'
import { useThemeChange } from '../context/ThemeChangeContext'

const SettingScreen = () => {
  const { theme, toggleTheme } = useThemeChange()

  return (
    <View>
      <Text>SettingScreen</Text>
      <ButtonPrimary title={`Theme Toggle: ${theme}`} onPress={() => toggleTheme()} />
    </View>
  )
}

export default SettingScreen
