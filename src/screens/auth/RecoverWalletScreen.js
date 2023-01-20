import React, { useEffect, useState } from 'react'
import { View, Text, Button, Alert, StyleSheet, TextInput } from 'react-native'
import { ROUTES } from '../../constants'

const RecoverWalletScreen = ({ navigation }) => {
  const [words, setWords] = useState('')

  const handleSubmit = () => {
    console.log("submitted")
    navigation.navigate(ROUTES.WELCOME)
  }

  return (
    <View>
      <Text>Recover Your Wallet</Text>
      <Text>Recover through the 12 words you kept safely.</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Paste the recovery phrase."
        onChangeText={v => setWords(v)}
        defaultValue={words}
      />
      <Button title='Continue' onPress={handleSubmit} />
    </View>
  )
}

export default RecoverWalletScreen
