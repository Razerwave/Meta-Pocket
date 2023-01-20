import React, { useState } from 'react'
import { View, Text, Button, Alert, StyleSheet } from 'react-native'
import { ROUTES } from '../../constants'

const WelcomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>WelcomeScreen</Text>
      <Button title='Create New Wallet' onPress={() => navigation.navigate(ROUTES.NEW_WALLET)} />
    </View>
  )
}

export default WelcomeScreen
