import React, { useEffect, useState } from 'react'
import { View, Text, Button, Alert, StyleSheet, TextInput } from 'react-native'
import { Screen } from '../../components'
import { ROUTES } from '../../constants'

const RecoverWalletScreen = ({ navigation }) => {
  const [words, setWords] = useState('')

  const handleSubmit = () => {
    console.log("submitted")
    navigation.navigate(ROUTES.CREATE_PASSWORD)
  }

  return (
    <Screen bottom={
      <Button title='Continue' onPress={handleSubmit} />
    }>
      <Text>Recover Your Wallet</Text>
      <Text>Recover through the 12 words you kept safely.</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Paste the recovery phrase."
        onChangeText={v => setWords(v)}
        defaultValue={words}
      />
    </Screen>
  )
}

export default RecoverWalletScreen
