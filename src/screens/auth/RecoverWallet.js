import React, { useEffect, useState } from 'react'
import { View, Text, Button, Alert, StyleSheet, TextInput } from 'react-native'
import { useTheme } from 'styled-components'
import { ButtonPrimary, CardBox, LayoutBottom, LayoutScreen, Screen, Stack, StepsAuth, StyledText, Title } from '../../components'
import { ROUTES } from '../../constants'

const RecoverWallet = ({ navigation }) => {
  const [words, setWords] = useState('')
  const { fontColor, backgroundCardColor } = useTheme()

  const handleSubmit = () => {
    navigation.navigate(ROUTES.AUTH.PROTECT_WALLET)
  }

  return (
    <LayoutScreen>
      <StepsAuth current={1} />
      <Stack marginTop={80} marginHorizontal={28} spacing={20}>
        <Title>
          Recover Your Wallet
        </Title>
        <StyledText>
          Recover through the 12 words you kept safely.
        </StyledText>
      </Stack>
      <Stack marginTop={40} marginHorizontal={28}>
        <TextInput
          style={[styles.input, { color: fontColor, backgroundColor: backgroundCardColor }]}
          editable
          multiline
          numberOfLines={2}
          textAlignVertical="top"
          placeholderTextColor="#838AA5"
          placeholder="Paste the recovery phrase."
          onChangeText={v => setWords(v)}
          value={words}
        />
      </Stack>
      <LayoutBottom>
        <ButtonPrimary title='Continue' onPress={handleSubmit} />
      </LayoutBottom>
    </LayoutScreen>
  )
}

const styles = StyleSheet.create({
  inputBox: {
  },
  input: {
    padding: 16,
    borderRadius: 10,
    fontSize: 12,
    // lineHeight: 24,

    fontWeight: '600',
  }
})

export default RecoverWallet