import React, { useState } from 'react'
import { View, Text, Button, Alert, StyleSheet } from 'react-native'
import { ROUTES } from '../../constants'

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>WelcomeScreen</Text>
      <View style={styles.bottom}>
        <Button title='Create New Wallet' onPress={() => navigation.navigate(ROUTES.NEW_WALLET)} />
        <Button title='I already have a wallet' onPress={() => navigation.navigate(ROUTES.RECOVER_WALLET)} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
})

export default WelcomeScreen
