import React, { useState } from 'react'
import { View, Text, Button, Alert, StyleSheet, Switch } from 'react-native'
import { ButtonPrimary, Screen } from '../components'
import { useThemeChange } from '../context/ThemeChangeContext'

const SettingScreen = () => {
  const { theme, toggleTheme } = useThemeChange()

  const isEnabled = theme === "dark"
  return (
    <Screen>
      <Text>SettingScreen</Text>
      <ButtonPrimary title={`Theme Toggle: ${theme}`} onPress={() => toggleTheme()} />
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleTheme}
        value={isEnabled}
      />
    </Screen>
  )
}

export default SettingScreen
