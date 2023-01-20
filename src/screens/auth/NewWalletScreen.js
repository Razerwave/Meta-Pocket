import React, { useEffect, useState } from 'react'
import { View, Text, Button, Alert, StyleSheet } from 'react-native'
import { ROUTES } from '../../constants'
import Clipboard from '@react-native-clipboard/clipboard';

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
    <View>
      <Text>Back Up Your Wallet</Text>
      <Text>The recovery phrase is the only way to recover your cryptocurrency if you lose your phone or switch to another wallet.</Text>
      <Text>Keep the 12-word recovery phrase in a safe place and don’t share it with anyone.</Text>
      <View>
        <Text>{words}</Text>
      </View>
      <Button title={copied ? 'Copied' : 'Copy'} onPress={handleCopy} />
      <Button title='Continue' onPress={() => navigation.navigate(ROUTES.NEW_WALLET_WORDS, { words })} />
    </View>
  )
}

export default NewWalletScreen
