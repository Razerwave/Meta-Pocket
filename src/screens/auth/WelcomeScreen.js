import React, { useState } from 'react'
import { View, Text, Button, Alert, StyleSheet } from 'react-native'
import { ButtonPrimary, Screen } from '../../components'
import { ROUTES } from '../../constants'

const WelcomeScreen = ({ navigation }) => {
  return (
    <Screen bottom={[
        <ButtonPrimary key="1" title='Create New Wallet' onPress={() => navigation.navigate(ROUTES.NEW_WALLET)} />,
        <ButtonPrimary key="2" title='I already have a wallet' onPress={() => navigation.navigate(ROUTES.RECOVER_WALLET)} />
      ]}>
      <Text>WelcomeScreen</Text>
    </Screen>
  )
}

export default WelcomeScreen
