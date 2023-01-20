import React, { useState } from 'react'
import { View, Text, Button, Alert, StyleSheet } from 'react-native'

const NewWalletWordScreen = ({ navigation }) => {
  const passed = false
  return (
    <View>
      <Text>NewWalletWordScreen</Text>
      <Button title='Continue' disabled={!passed} onPress={() => navigation.navigate(ROUTES.NEW_WALLET_WORDS)} />
    </View>
  )
}

export default NewWalletWordScreen
