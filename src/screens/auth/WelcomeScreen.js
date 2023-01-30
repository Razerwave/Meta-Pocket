import React, { useState } from 'react'
import { View, Text, Button, Alert, StyleSheet } from 'react-native'
import { ButtonPrimary, Screen, Stack, StyledText } from '../../components'
import { ROUTES } from '../../constants'
import useAuth from '../../context/AuthContext'
import { useThemeChange } from '../../context/ThemeChangeContext'

const WelcomeScreen = ({ navigation }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Screen bottom={
      <Stack padding={16} spacing={16}>
        <ButtonPrimary title='Create New Wallet' onPress={() => navigation.navigate(ROUTES.AUTH.NEW_WALLET)} />
        <ButtonPrimary title='I already have a wallet' onPress={() => navigation.navigate(ROUTES.AUTH.RECOVER_WALLET)} />
      </Stack>
    }>
    </Screen>
  )
}

export default WelcomeScreen
