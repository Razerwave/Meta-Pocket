import React, { useState } from 'react'
import { View, Text, Button, Alert, StyleSheet, Switch } from 'react-native'
import { ButtonPrimary, Screen, StyledText } from '../components'
import { useThemeChange } from '../context/ThemeChangeContext'
import { useTheme } from 'styled-components'

const SettingScreen = () => {
  const { theme, toggleTheme } = useThemeChange()
  const isEnabled = theme === "dark"

  return (
    <Screen>
      <StyledText>SettingScreen</StyledText>
      <View style={{ flexDirection: 'row' }}>
        <StyledText>Dark Mode</StyledText>
        <Switch
          style={{ flex: 1 }}
          trackColor={{ false: 'lightgray', true: 'lightgray' }}
          thumbColor={'gray'}

          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={isEnabled}
        />
      </View>
    </Screen>
  )
}

export default SettingScreen
