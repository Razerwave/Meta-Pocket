import React, { useEffect, useState } from 'react'
import { View, Text, Button, Alert, StyleSheet, TextInput } from 'react-native'
import { ButtonPrimary, Screen, StyledText } from '../../components'
import StyledTextInput from '../../components/StyledTextInput'
import { ROUTES } from '../../constants'

const RecoverWalletScreen = ({ navigation }) => {
  const [words, setWords] = useState('')

  const handleSubmit = () => {
    console.log("submitted")
    navigation.navigate(ROUTES.CREATE_PASSWORD)
  }

  return (
    <Screen bottom={
      <ButtonPrimary title='Continue' onPress={handleSubmit} />
    }>
      <StyledText>Recover Your Wallet</StyledText>
      <StyledText>Recover through the 12 words you kept safely.</StyledText>
      <StyledTextInput
        style={{ height: 40 }}
        placeholderTextColor="#000"
        placeholder="Paste the recovery phrase."
        onChangeText={v => setWords(v)}
        defaultValue={words}
      />
    </Screen>
  )
}

export default RecoverWalletScreen
