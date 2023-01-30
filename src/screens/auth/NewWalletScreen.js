import React, { useEffect, useState } from 'react'
import { View, Text, Button, Alert, StyleSheet } from 'react-native'
import Clipboard from '@react-native-clipboard/clipboard';
import { ButtonPrimary, CardBox, Screen, Stack, StyledText } from '../../components';
import { ROUTES } from '../../constants'

const NewWalletScreen = ({ navigation }) => {
  const [copied, setCopied] = useState(false);
  const [words, setWords] = useState('')

  useEffect(() => {
    setWords('Isolate tiny hat want latin glide already Friend exchange gap frost inner')
  }, [])

  const handleCopy = () => {
    Clipboard.setString(words)
    setCopied(true)
  }

  return (
    <Screen bottom={
      <Stack padding={16} spacing={16}>
        <ButtonPrimary title='Continue' onPress={() => navigation.navigate(ROUTES.AUTH.NEW_WALLET_WORDS, { words })} />
      </Stack>
    }>
      <Stack padding={16} spacing={16}>
        <CardBox>
          <StyledText style={{ fontSize: 20, fontWeight: 'bold' }}>
            Back Up Your Wallet
          </StyledText>
        </CardBox>
        <CardBox>
          <StyledText>
            The recovery phrase is the only way to recover your cryptocurrency if you lose your phone or switch to another wallet.
          </StyledText>
        </CardBox>
        <CardBox>
          <StyledText>
            Keep the 12-word recovery phrase in a safe place and don’t share it with anyone.
          </StyledText>
        </CardBox>
        <CardBox style={{ borderRadius: 16 }}>
          <View style={{ paddingVertical: 24 }}>
            <StyledText>{words}</StyledText>
          </View>
        </CardBox>
        <ButtonPrimary title={copied ? 'Copied' : 'Copy'} onPress={handleCopy} />
      </Stack>
    </Screen>
  )
}

export default NewWalletScreen
