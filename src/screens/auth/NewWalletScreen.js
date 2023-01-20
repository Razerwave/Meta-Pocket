import React, { useState } from 'react'
import { View, Text, Button, Alert, StyleSheet } from 'react-native'
import { ROUTES } from '../../constants'

const NewWalletScreen = ({ navigation }) => {
  return (
    <View>
      <Text>NewWalletScreen</Text>
      <Button title='Continue' onPress={() => navigation.navigate(ROUTES.NEW_WALLET_WORDS)} />
    </View>
  )
}

export default NewWalletScreen
