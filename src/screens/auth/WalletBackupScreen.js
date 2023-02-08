import React, { useEffect, useState } from 'react'
import { View, Text, Button, Alert, StyleSheet } from 'react-native'
import Clipboard from '@react-native-clipboard/clipboard';
import { ButtonPrimary, CardBox, Screen, Stack, StyledText } from '../../components';
import { ROUTES } from '../../constants'

const WalletBackupScreen = ({ navigation }) => {
  const [copied, setCopied] = useState(false);
  const [words, setWords] = useState([])

  useEffect(() => {
    setWords('Isolate tiny hat want latin glide already Friend exchange gap frost inner'.split(' '))
  }, [])

  const handleCopy = () => {
    Clipboard.setString(words.join(' '))
    setCopied(true)
  }

  return (
    <Screen bottom={
      <Stack padding={16} spacing={16} style={{ alignItems: 'center' }}>
        <ButtonPrimary title='Continue' onPress={() => navigation.navigate(ROUTES.AUTH.NEW_WALLET_WORDS, { words })} />
      </Stack>
    }>
      <Stack padding={28} spacing={20}>
        <StyledText style={{ fontSize: 24, fontWeight: 600, lineHeight: 29 }}>
          Back Up Your Wallet
        </StyledText>
        <StyledText>
          The recovery phrase is the only way to recover your cryptocurrency if you lose your phone or switch to another wallet.
        </StyledText>
        <StyledText>
          Keep the 12-word recovery phrase in a safe place and don’t share it with anyone.
        </StyledText>
      </Stack>
      <Stack padding={28} spacing={16}>
        <CardBox style={{ borderRadius: 16 }}>
          <Stack direction='row' spacing={10} style={{ flexWrap: 'wrap' }}>
            {words.map((word) => <StyledText style={{ fontSize: 12, lineHeight: 14 }}>{word}</StyledText>)}
          </Stack>
        </CardBox>
        <ButtonPrimary title={copied ? 'Copied' : 'Copy'} onPress={handleCopy} />
      </Stack>
    </Screen>
  )
}

export default WalletBackupScreen
