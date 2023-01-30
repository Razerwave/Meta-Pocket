import React, { useEffect, useState } from 'react'
import { View, Text, Button, Alert, StyleSheet, TextInput } from 'react-native'
import { useTheme } from 'styled-components'
import { ButtonPrimary, CardBox, Screen, Stack, StyledText } from '../../components'
import { ROUTES } from '../../constants'

const RecoverWalletScreen = ({ navigation }) => {
  const [words, setWords] = useState('')
  const { fontColor } = useTheme()

  const handleSubmit = () => {
    console.log("submitted")
    navigation.navigate(ROUTES.CREATE_PASSWORD)
  }

  return (
    <Screen bottom={
      <Stack padding={16} spacing={16}>
        <ButtonPrimary title='Continue' onPress={handleSubmit} />
      </Stack>
    }>
      <Stack padding={16} spacing={16}>
        <CardBox>
          <StyledText style={{ fontSize: 20, fontWeight: 'bold' }}>
            <StyledText>Recover Your Wallet</StyledText>
          </StyledText>
        </CardBox>
        <CardBox>
          <StyledText>
            Recover through the 12 words you kept safely.
          </StyledText>
        </CardBox>
        <CardBox>
          <TextInput
            style={{ height: 40, color: fontColor }}
            placeholderTextColor="gray"
            placeholder="Paste the recovery phrase."
            onChangeText={v => setWords(v)}
            defaultValue={words}
          />
        </CardBox>
      </Stack>
    </Screen>
  )
}

export default RecoverWalletScreen
