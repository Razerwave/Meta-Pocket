import React, { useEffect, useState } from 'react'
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import Clipboard from '@react-native-clipboard/clipboard';
import { ButtonPrimary, CardBox, LayoutBottom, LayoutScreen, Screen, Stack, StyledText, Title } from '../../components';
import { ROUTES } from '../../constants'
import { Svg, SvgXml } from 'react-native-svg';
import { useTheme } from 'styled-components';

const BackupWallet = ({ navigation }) => {
  const [copied, setCopied] = useState(false);
  const [words, setWords] = useState([]);
  const { fontColor } = useTheme();

  useEffect(() => {
    setWords('Isolate tiny hat want latin glide already Friend exchangessssssssssssssssssssss gap frost inner'.split(' '))
  }, [])

  const handleCopy = () => {
    Clipboard.setString(words.join(' '))
    setCopied(true)
  }

  return (
    <LayoutScreen>
      <Stack padding={28} spacing={20}>
        <Title>
          Back Up Your Wallet
        </Title>
        <StyledText>
          The recovery phrase is the only way to recover your cryptocurrency if you lose your phone or switch to another wallet.
        </StyledText>
        <StyledText>
          Keep the 12-word recovery phrase in a safe place and don’t share it with anyone.
        </StyledText>
        <CardBox style={{ borderRadius: 10 }}>
          <Stack direction='row' spacing={10} style={{ flexWrap: 'wrap' }}>
            {words.map((word, index) => <StyledText key={index} style={{ fontSize: 12, lineHeight: 16 }}>{word}</StyledText>)}
          </Stack>
        </CardBox>
        <Stack padding={16} spacing={16} style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={handleCopy}>
            <Stack direction='row' spacing={6}>
              <SvgXml width="14" height="16" viewBox="0 0 14 16" fill={fontColor} xml={`
              <svg width="14" height="16" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.7647 -5.61714e-06C13.0941 -5.64511e-06 13.3824 0.119995 13.6294 0.359995C13.8765 0.599995 14 0.879994 14 1.19999L14 13.26L12.7647 13.26L12.7647 1.19999L3.00588 1.2L3.00588 -4.78837e-06L12.7647 -5.61714e-06ZM10.2941 2.39999C10.6235 2.39999 10.9118 2.51999 11.1588 2.75999C11.4059 2.99999 11.5294 3.27999 11.5294 3.59999L11.5294 14.8C11.5294 15.12 11.4059 15.4 11.1588 15.64C10.9118 15.88 10.6235 16 10.2941 16L1.2353 16C0.905884 16 0.617649 15.88 0.37059 15.64C0.123532 15.4 1.82815e-06 15.12 1.79936e-06 14.8L7.91423e-07 3.59999C7.62625e-07 3.28 0.123531 3 0.370589 2.76C0.617648 2.52 0.905883 2.4 1.2353 2.39999L10.2941 2.39999ZM10.2941 3.59999L1.2353 3.59999L1.2353 14.8L10.2941 14.8L10.2941 3.59999Z"/>
              </svg>
            `} />
              <StyledText style={{ fontSize: 12, lineHeight: 16 }}>
                {copied ? 'Copied' : 'Copy'} to clipboard
              </StyledText>
            </Stack>
          </TouchableOpacity>
        </Stack>
      </Stack>
      <LayoutBottom>
        <ButtonPrimary title='Continue' onPress={() => navigation.navigate(ROUTES.AUTH.CHECK_BACKUP_WALLET, {
          firstWord: words[0],
          lastWord: words[words.length - 1],
          words: [...words].sort((a, b) => 0.5 - Math.random()),
        })} />
      </LayoutBottom>
    </LayoutScreen>
  )
}

export default BackupWallet
