import React, { useEffect, useState } from 'react'
import { View, Text, Button, Alert, StyleSheet } from 'react-native'
import Clipboard from '@react-native-clipboard/clipboard';
import { ButtonPrimary, CardBox, Screen, StyledText } from '../../components';
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
      <ButtonPrimary title='Continue' onPress={() => navigation.navigate(ROUTES.NEW_WALLET_WORDS, { words })} />
    }>
      <StyledText>Back Up Your Wallet</StyledText>
      <StyledText>The recovery phrase is the only way to recover your cryptocurrency if you lose your phone or switch to another wallet.</StyledText>
      <StyledText>Keep the 12-word recovery phrase in a safe place and don’t share it with anyone.</StyledText>
      <CardBox>
        <StyledText>{words}</StyledText>
      </CardBox>
      <ButtonPrimary title={copied ? 'Copied' : 'Copy'} onPress={handleCopy} />
    </Screen>
  )
}

export default NewWalletScreen
