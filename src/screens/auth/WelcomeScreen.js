import React, { useState } from 'react'
import { View, Text, Button, Alert, StyleSheet } from 'react-native'
import { ButtonPrimary, Screen, StyledText } from '../../components'
import { ROUTES } from '../../constants'
import { useThemeChange } from '../../context/ThemeChangeContext'

const WelcomeScreen = ({ navigation }) => {
  const { theme, toggleTheme } = useThemeChange()


  return (
    <Screen bottom={[
      <ButtonPrimary key="1" title='Create New Wallet' onPress={() => navigation.navigate(ROUTES.NEW_WALLET)} />,
      <ButtonPrimary key="2" title='I already have a wallet' onPress={() => navigation.navigate(ROUTES.RECOVER_WALLET)} />,
      <ButtonPrimary key="3" title={`Theme Toggle: ${theme}`} onPress={() => toggleTheme()} />
    ]}>
    </Screen>
  )
}

export default WelcomeScreen
